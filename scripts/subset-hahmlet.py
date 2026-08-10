"""
Hahmlet(제목 폰트) 서브셋 생성기.

Google Fonts에서 Hahmlet을 받으면 한글 서브셋이 13파일 1,011KB로 쪼개져 온다.
이 스크립트는 사이트가 실제로 표시 폰트로 그리는 글자만 남겨 약 70KB로 줄인다.

## 언제 다시 돌려야 하나
제목·숫자·패키지명 등 **표시 폰트(var(--display))로 렌더되는 카피에 새 한글을 추가했을 때.**
안 돌리면 그 글자만 Nanum Myeongjo로 폴백돼 자형이 튄다.

## 사용법
    pip install fonttools brotli
    npm run dev                      # 다른 터미널에서 3000번 포트로 띄워두고
    python scripts/subset-hahmlet.py

CHARSET_EXTRA에 수동으로 글자를 추가할 수도 있다(초기 DOM에 없는 모달 문구 등).
결과물: public/fonts/hahmlet-subset.woff2
"""

import pathlib
import subprocess
import sys
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
BUILD = ROOT / "build-fonts"
OUT = ROOT / "public" / "fonts" / "hahmlet-subset.woff2"

VF_URL = "https://raw.githubusercontent.com/google/fonts/main/ofl/hahmlet/Hahmlet%5Bwght%5D.ttf"
WGHT_RANGE = "wght=700:800"  # globals.css가 쓰는 굵기 범위

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
<iframe id="f" src="/" style="width:1280px;height:800px"></iframe>
<script>
document.getElementById('f').addEventListener('load', function () {
  var d = this.contentDocument, w = this.contentWindow, set = {};
  setTimeout(function () {
    (function walk(n) {
      if (n.nodeType === 3) {
        var fam = w.getComputedStyle(n.parentElement).fontFamily || '';
        if (/Hahmlet/i.test(fam.split(',')[0]))
          for (var i = 0; i < n.nodeValue.length; i++) set[n.nodeValue[i]] = 1;
        return;
      }
      if (n.nodeType !== 1) return;
      ['::before', '::after'].forEach(function (pe) {
        var cs = w.getComputedStyle(n, pe);
        if (/Hahmlet/i.test((cs.fontFamily || '').split(',')[0])) {
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
                shutil.which("google-chrome") or "",
                shutil.which("chromium") or "",
            )
            if p and pathlib.Path(p).exists()
        ),
        None,
    )
    if not chrome:
        print("[warn] Chrome을 찾지 못해 자동 수집을 건너뜁니다. CHARSET_EXTRA만 사용합니다.")
        return set()

    page = ROOT / "public" / "_glyphcollect.html"
    page.write_text(COLLECTOR, encoding="utf-8")
    try:
        profile = BUILD / "chrome-profile"
        r = run(
            [
                chrome, "--headless=new", "--no-sandbox", "--disable-gpu", "--no-first-run",
                f"--user-data-dir={profile}", "--virtual-time-budget=20000",
                "--dump-dom", "http://localhost:3000/_glyphcollect.html",
            ],
            "글리프 수집(dev 서버가 3000번에 떠 있어야 합니다)",
        )
        m = re.search(r"CHARS=([^<]*)", r.stdout)
        chars = set(m.group(1)) if m else set()
        print(f"페이지에서 수집: {len(chars)}자")
        return chars
    finally:
        page.unlink(missing_ok=True)


def main():
    BUILD.mkdir(exist_ok=True)
    OUT.parent.mkdir(parents=True, exist_ok=True)

    vf = BUILD / "Hahmlet-VF.ttf"
    if not vf.exists():
        print("원본 가변 폰트 다운로드...")
        req = urllib.request.Request(VF_URL, headers={"User-Agent": "Mozilla/5.0"})
        data = urllib.request.urlopen(req, timeout=120).read()
        if data[:4] != b"\x00\x01\x00\x00":
            sys.exit("[FAIL] 받은 파일이 TTF가 아닙니다.")
        vf.write_bytes(data)
    print(f"원본: {vf.stat().st_size / 1024:.0f} KB")

    # 수집이 0자로 나와도 그냥 진행하면 CHARSET_EXTRA(139자)만 남은 서브셋이 만들어져
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

    pinned = BUILD / "Hahmlet-VF-pinned.ttf"
    run(
        [sys.executable, "-m", "fontTools.varLib.instancer", str(vf), WGHT_RANGE, "-o", str(pinned)],
        f"가변 축 제한({WGHT_RANGE})",
    )
    run(
        [
            sys.executable, "-m", "fontTools.subset", str(pinned),
            f"--text-file={charset}", "--flavor=woff2", "--layout-features=*",
            "--no-hinting", "--desubroutinize", f"--output-file={OUT}",
        ],
        "서브셋 생성",
    )
    print(f"완료: {OUT.relative_to(ROOT)}  {OUT.stat().st_size / 1024:.1f} KB")


if __name__ == "__main__":
    main()
