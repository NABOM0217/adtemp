"""
표시 폰트(제목용) 서브셋 생성기.

원본은 **SUITE**(SUNN, http://sun.fo/suite) — SIL Open Font License 1.1.

## 왜 이름을 바꿔서 내보내나
SUITE 는 OFL 에 `Reserved Font Name SUITE` 가 지정되어 있다. OFL 3항상
**변형본(서브셋 포함)은 그 이름을 쓸 수 없다.** 그래서 웹에 싣는 서브셋은
`Nabom Display` 라는 다른 이름으로 내보낸다. 저작권 표시는 그대로 유지하고
라이선스 전문도 public/fonts/SUITE-OFL.txt 로 함께 배포한다.

원본을 그대로 쓰면 이름을 유지할 수 있지만 Variable 파일이 523KB다.
이 사이트가 실제로 쓰는 글자는 300자 남짓이라 서브셋이 훨씬 가볍다.

## 언제 다시 돌려야 하나
제목·숫자·패키지명 등 **표시 폰트(var(--display))로 렌더되는 카피에 새 한글을 추가했을 때.**
안 돌리면 그 글자만 시스템 폰트로 폴백돼 자형이 튄다.
페이지를 새로 만들었으면 아래 PAGES 에도 넣을 것.

## 사용법
    pip install fonttools brotli
    npm run dev                      # 다른 터미널에서 3000번 포트로 띄워두고
    python scripts/subset-display-font.py

CHARSET_EXTRA 에 수동으로 글자를 추가할 수도 있다(초기 DOM에 없는 모달 문구 등).
결과물: public/fonts/nabom-display-subset.woff2
"""

import pathlib
import subprocess
import sys
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
BUILD = ROOT / "build-fonts"
OUT = ROOT / "public" / "fonts" / "nabom-display-subset.woff2"
LICENSE_OUT = ROOT / "public" / "fonts" / "SUITE-OFL.txt"

SRC_URL = "https://raw.githubusercontent.com/sun-typeface/SUITE/main/fonts/variable/ttf/SUITE-Variable.ttf"
LICENSE_URL = "https://raw.githubusercontent.com/sun-typeface/SUITE/main/LICENSE"
WGHT_RANGE = "wght=500:800"  # globals.css 가 쓰는 굵기 범위
FAMILY_OUT = "Nabom Display"  # RFN 때문에 반드시 'SUITE' 가 아닌 이름이어야 한다

# 표시 폰트가 쓰이는 페이지를 전부 훑는다. 페이지를 추가했으면 여기에도 넣을 것 —
# 빠뜨리면 그 페이지 제목 글자만 폴백된다.
PAGES = ["/", "/privacy"]

# 초기 DOM에 없어 자동 수집이 안 되는 글자 + 향후 수정 여유분
CHARSET_EXTRA = (
    "".join(chr(c) for c in range(0x20, 0x7F))  # ASCII 전체(숫자·영문)
    + "\uFF3E\uFF0B\u00B7\u2014\u2026\u201C\u201D\u2018\u2019\u203B\u2192\u2190"
    + "감사합니다접수되었대표확인빠르게연락드리겠닫기"  # 제출 성공 모달
    + "년월일곳위건원장님"
)

COLLECTOR = """<!doctype html>
<meta charset="utf-8">
<div id="out">...</div>
<iframe id="f" src="__PATH__" style="width:1280px;height:800px"></iframe>
<script>
document.getElementById('f').addEventListener('load', function () {
  var d = this.contentDocument, w = this.contentWindow, set = {};
  setTimeout(function () {
    (function walk(n) {
      if (n.nodeType === 3) {
        var fam = w.getComputedStyle(n.parentElement).fontFamily || '';
        if (/Nabom Display/i.test(fam.split(',')[0]))
          for (var i = 0; i < n.nodeValue.length; i++) set[n.nodeValue[i]] = 1;
        return;
      }
      if (n.nodeType !== 1) return;
      ['::before', '::after'].forEach(function (pe) {
        var cs = w.getComputedStyle(n, pe);
        if (/Nabom Display/i.test((cs.fontFamily || '').split(',')[0])) {
          var c = cs.content;
          if (c && c !== 'none' && c !== 'normal') {
            c = c.replace(/^["']|["']$/g, '');
            for (var j = 0; j < c.length; j++) set[c[j]] = 1;
          }
        }
      });
      for (var k = 0; k < n.childNodes.length; k++) walk(n.childNodes[k]);
    })(d.body);
    document.getElementById('out').textContent =
      'CHARS=' + Object.keys(set).filter(function (c) { return c.charCodeAt(0) > 31; }).sort().join('');
  }, 2500);
});
</script>
"""


def run(cmd, what):
    # encoding 을 명시하지 않으면 윈도우에서 cp949 로 읽어 한글 DOM 덤프가 깨지고
    # stdout 이 통째로 None 이 된다(수집 글자 0자 → 자형 폴백).
    r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode != 0:
        sys.exit(f"[FAIL] {what}\n{r.stderr[-1000:]}")
    return r


def collect_glyphs() -> set:
    """dev 서버(3000)를 헤드리스 크롬으로 열어 표시 폰트로 렌더되는 글자를 수집."""
    import re
    import shutil

    chrome = next(
        (
            p
            for p in (
                r"C:\Program Files\Google\Chrome\Application\chrome.exe",
                r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
                r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
                r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
                shutil.which("google-chrome") or "",
                shutil.which("chromium") or "",
            )
            if p and pathlib.Path(p).exists()
        ),
        None,
    )
    if not chrome:
        print("[warn] 크롬/엣지를 찾지 못해 자동 수집을 건너뜁니다.")
        return set()

    page = ROOT / "public" / "_glyphcollect.html"
    profile = BUILD / "chrome-profile"
    chars: set = set()
    try:
        for path in PAGES:
            page.write_text(COLLECTOR.replace("__PATH__", path), encoding="utf-8")
            r = run(
                [
                    chrome, "--headless=new", "--no-sandbox", "--disable-gpu", "--no-first-run",
                    f"--user-data-dir={profile}", "--virtual-time-budget=20000",
                    "--dump-dom", "http://localhost:3000/_glyphcollect.html",
                ],
                f"글리프 수집 {path} (dev 서버가 3000번에 떠 있어야 합니다)",
            )
            m = re.search(r"CHARS=([^<]*)", r.stdout)
            got = set(m.group(1)) if m else set()
            print(f"  {path} 에서 {len(got)}자")
            chars |= got
        print(f"페이지에서 수집: {len(chars)}자")
        return chars
    finally:
        page.unlink(missing_ok=True)


def fetch(url: str, dest: pathlib.Path, what: str):
    print(f"{what} 다운로드...")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    dest.write_bytes(urllib.request.urlopen(req, timeout=120).read())


def main():
    BUILD.mkdir(exist_ok=True)
    OUT.parent.mkdir(parents=True, exist_ok=True)

    src = BUILD / "SUITE-Variable.ttf"
    if not src.exists():
        fetch(SRC_URL, src, "원본 가변 폰트")
        if src.read_bytes()[:4] not in (b"\x00\x01\x00\x00", b"true", b"OTTO"):
            sys.exit("[FAIL] 받은 파일이 TTF가 아닙니다.")
    print(f"원본: {src.stat().st_size / 1024:.0f} KB")

    # OFL 은 사본 배포 시 라이선스 전문을 함께 두도록 요구한다.
    if not LICENSE_OUT.exists():
        fetch(LICENSE_URL, LICENSE_OUT, "SUITE 라이선스")

    # 수집이 0자로 나와도 그냥 진행하면 CHARSET_EXTRA 만 남은 서브셋이 만들어져
    # 제목 글자 대부분이 폴백된다. 조용히 망가지는 대신 멈추거나 지난 결과를 쓴다.
    collected = collect_glyphs()
    cache = BUILD / "charset-collected.txt"
    if collected:
        cache.write_text("".join(sorted(collected)), encoding="utf-8")
    elif cache.exists():
        collected = set(cache.read_text(encoding="utf-8"))
        print(f"[warn] 자동 수집 실패 → 지난 수집 결과 사용: {len(collected)}자")
    else:
        sys.exit(
            "[FAIL] 표시 폰트로 렌더되는 글자를 하나도 수집하지 못했습니다.\n"
            "       dev 서버가 3000번에 떠 있는지 확인하세요.\n"
            "       (npm run build 를 dev 서버와 동시에 돌리면 .next 가 엉켜 / 가 404가 됩니다)"
        )

    chars = collected | set(CHARSET_EXTRA)
    charset = BUILD / "charset.txt"
    charset.write_text("".join(sorted(chars)), encoding="utf-8")
    print(f"서브셋 대상: {len(chars)}자")

    pinned = BUILD / "display-pinned.ttf"
    run(
        [sys.executable, "-m", "fontTools.varLib.instancer", str(src), WGHT_RANGE, "-o", str(pinned)],
        f"가변 축 제한({WGHT_RANGE})",
    )
    run(
        [
            sys.executable, "-m", "fontTools.subset", str(pinned),
            f"--text-file={charset}", "--flavor=woff2", "--layout-features=*",
            "--no-hinting", "--desubroutinize",
            # RFN 때문에 이름을 반드시 바꿔야 한다 (OFL 3항)
            f"--name-legacy", f"--output-file={OUT}",
        ],
        "서브셋 생성",
    )

    # 패밀리 이름 교체 — fontTools.subset 은 이름을 안 바꾸므로 직접 손댄다
    from fontTools.ttLib import TTFont

    f = TTFont(OUT)
    for rec in f["name"].names:
        if rec.nameID in (1, 3, 4, 6, 16):
            v = rec.toUnicode().replace("SUITE", FAMILY_OUT.replace(" ", ""))
            if rec.nameID in (1, 4, 16):
                v = FAMILY_OUT if rec.nameID != 4 else f"{FAMILY_OUT} Variable"
            rec.string = v
    f.save(OUT)
    f.close()

    print(f"완료: {OUT.relative_to(ROOT)}  {OUT.stat().st_size / 1024:.1f} KB  (패밀리: {FAMILY_OUT})")
    print(f"라이선스: {LICENSE_OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
