import { useState } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Lightbox from './Lightbox';
import type { Shot } from '../lib/works';
/**
 * 성과 표기는 public/images/rank_*.jpg 캡처에 실제로 보이는 내용과 1:1로 맞춘다.
 * 네 캡처는 검색 영역(인기글 / 검색결과 / 플레이스)과 측정 시점이 서로 다르므로
 * "전부 1위"로 묶지 않는다 — 표시광고법 실증 책임과 의료법 과장광고를 피하려면
 * 구체적으로 쓰는 편이 오히려 방어에 유리하다.
 *
 * 시점은 캡처에 찍힌 게시물 날짜와 "N일/주 전" 표기로 역산한 값이다.
 * 정확한 측정일을 아시면 basis만 고치면 된다.
 */
const RANKS = [
  { kw: '천안보톡스', num: '1', unit: '위', lb: '인기글', basis: '2024.03 기준' },
  { kw: '천안무좀', num: '1', unit: '위', lb: '인기글', basis: '2025.02 기준' },
  { kw: '천안비만', num: '3', unit: '건', lb: '검색결과 상위', basis: '2025.07 기준' },
  { kw: '천안요양병원', num: '2', unit: '건', lb: '플레이스 상위', basis: '광고 1건 포함' },
];

const SHOTS = [
  { src: '/images/rank_cheonan_botox.jpg', kw: '천안보톡스', w: 680, h: 989 },
  { src: '/images/rank_cheonan_fungus.jpg', kw: '천안무좀', w: 669, h: 1375 },
  { src: '/images/rank_cheonan_diet.jpg', kw: '천안비만', w: 680, h: 1123 },
  { src: '/images/rank_cheonan_nursing.jpg', kw: '천안요양병원', w: 680, h: 995 },
];

/** 확대 모달에 넘길 형태. 캡션은 RANKS 에서 만들어 순위 표기가 두 군데로 갈리지 않게 한다. */
const ZOOMS: Shot[] = SHOTS.map((s) => {
  const r = RANKS.find((x) => x.kw === s.kw);
  return {
    src: s.src,
    alt: `'${s.kw}' 네이버 검색 결과 상위 노출 캡처 (확대)`,
    // lb 가 '검색결과 상위'일 때 "네이버 검색 검색결과"로 겹치던 걸 정리했다.
    cap: r ? `'${s.kw}' · 네이버 ${r.lb} ${r.num}${r.unit} · ${r.basis}` : `'${s.kw}' · 네이버 검색`,
    w: s.w,
    h: s.h,
  };
});

export default function Results() {
  const ref = useScrollAnimation();
  // 여기서는 한 장씩만 띄운다(증거 판독용). ‹ › 갤러리는 Services 쪽에서 쓴다.
  const [zoom, setZoom] = useState<number | null>(null);

  return (
    <section className="sec" id="results" style={{ background: 'var(--panel)' }}>
      <div className="shell reveal" ref={ref}>
        <span className="note">Reporting &amp; Results</span>
        <h2 className="title">
          순위는 보고서로,
          <br />
          확인은 실시간으로.
        </h2>
        <p className="lede">
          보고서가 어렵다고요? 나봄이 자체 제작한 프로그램으로, 원장님이 직접 실시간으로 확인하세요.
        </p>

        <div className="rank-row stagger" style={{ background: 'var(--paper)' }}>
          {RANKS.map((r) => (
            <div className="rank-c" key={r.kw}>
              <div className="kw">{r.kw}</div>
              <div className="no">
                {r.num}
                <span className="u">{r.unit}</span>
              </div>
              <div className="lb">{r.lb}</div>
              <div className="basis">{r.basis}</div>
            </div>
          ))}
        </div>
        {/* 표시광고법 실증 대비 — 시안엔 근거 표기가 없었다 */}
        <p className="rank-basis">
          ※ 네이버 검색 기준. 키워드별 검색 영역과 측정 시점이 달라 각각 표기했습니다. 아래 캡처를
          클릭하면 원본을 확인하실 수 있습니다.
        </p>

        {/* 모바일에서 .shots 는 가로 스와이프 캐러셀이 된다 (CSS ≤680px) */}
        <p className="swipe-hint">옆으로 넘겨 4개 모두 보기</p>

        <div className="shots stagger">
          {SHOTS.map((s, idx) => (
            <figure key={s.src}>
              {/* 시안은 240px로 잘라 순위가 안 보였다 → 전체 노출 + 클릭 확대 */}
              <button
                type="button"
                className="shot-btn"
                onClick={() => setZoom(idx)}
                aria-label={`'${s.kw}' 검색 결과 캡처 크게 보기`}
              >
                <Image
                  src={s.src}
                  alt={`'${s.kw}' 네이버 검색 결과 상위 노출 캡처`}
                  width={s.w}
                  height={s.h}
                  loading="lazy"
                  sizes="(max-width: 480px) 100vw, (max-width: 820px) 50vw, 270px"
                />
              </button>
              <figcaption>&lsquo;{s.kw}&rsquo;</figcaption>
            </figure>
          ))}
        </div>

        <figure className="rank-prog">
          <Image
            src="/images/rank_program.jpg"
            alt="나봄이 자체 제작한 실시간 순위 확인 프로그램 화면"
            width={1100}
            height={821}
            loading="lazy"
            sizes="(max-width: 1180px) 100vw, 1116px"
          />
          <figcaption>
            실시간 순위 확인 프로그램 · 나봄 자체 제작 — 원장님이 직접 순위·내원·전환을 확인합니다
          </figcaption>
        </figure>
      </div>

      {zoom !== null && (
        <Lightbox
          items={[ZOOMS[zoom]]}
          label={`'${SHOTS[zoom].kw}' 검색 결과 캡처`}
          onClose={() => setZoom(null)}
        />
      )}
    </section>
  );
}
