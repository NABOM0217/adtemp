import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Lightbox from './Lightbox';
import {
  VIDEO_HANSARANG,
  VIDEO_HANSARANG_DIET,
  SIGN_GEUMJEONG,
  SIGN_HWAIL,
  type Shot,
} from '../lib/works';

/**
 * 모자이크 그리드. cls 가 차지할 칸을 정한다 — `tall`=2행, `wide`=2열, 없으면 1칸.
 *
 * **4열 × 4행 = 16칸을 빈틈없이 채우도록 짜여 있다. 순서를 바꾸면 구멍이 생긴다.**
 * 세로 2행 3개(6칸) + 가로 2열 3개(6칸) + 1칸짜리 4개(4칸) = 16칸.
 * CSS 자동 배치는 앞에서부터 채우므로 아래 순서가 곧 아래 배치가 된다.
 *
 *   ┌─────┬─────┬───────────┐
 *   │  1  │  2  │     3     │   1,2 = 세로 2행
 *   │     │     ├───────────┤   3,4 = 가로 2열
 *   │     │     │     4     │
 *   ├─────┼──┬──┴──┬────────┤
 *   │  5  │6 │  7  │   8    │   5   = 세로 2행
 *   │     ├──┴─────┼────────┤   6~8 = 1칸
 *   │     │    9   │   10   │   9   = 가로 2열, 10 = 1칸
 *   └─────┴────────┴────────┘
 *
 * 이미지 비율에 맞춰 배치했다 — 세로 사진은 세로칸, 1.70 비율은 1칸.
 * 영상·간판은 서비스 '콘텐츠 제작'/'오프라인'과 같은 것을 쓴다(원본은 lib/works.ts).
 */
const PF: (Shot & { cls: string })[] = [
  {
    src: '/images/portfolio_mesotherapy.jpg',
    alt: '메조테라피 시술 배너',
    cap: '메조테라피 시술 배너 — 원내 게시용',
    cls: 'pf tall',
    w: 760,
    h: 1074,
  },
  {
    src: '/images/portfolio_event_poster.jpg',
    alt: '1월 이벤트 포스터',
    cap: '이벤트 포스터 — 시즌 이벤트 고지용',
    cls: 'pf tall',
    w: 760,
    h: 1075,
  },
  {
    src: '/images/portfolio_banners.jpg',
    alt: '시술별 배너 시리즈',
    cap: '배너 시리즈 — 시술별로 톤을 맞춰 한 벌로 제작',
    cls: 'pf wide',
    w: 820,
    h: 587,
  },
  { ...VIDEO_HANSARANG, cls: 'pf wide' },
  { ...VIDEO_HANSARANG_DIET, cls: 'pf tall' },
  {
    src: '/images/portfolio_character_1.jpg',
    alt: '자체 제작 캐릭터',
    cap: '자체 제작 캐릭터 — 진료과 컨셉에 맞춘 오리지널',
    cls: 'pf',
    w: 760,
    h: 424,
  },
  // 간판만 남기고 1.70 비율로 잘라뒀다 → 1칸에 잘림 없이 딱 들어간다
  { ...SIGN_GEUMJEONG, cls: 'pf' },
  { ...SIGN_HWAIL, cls: 'pf' },
  {
    src: '/images/portfolio_character_2.jpg',
    alt: '자체 제작 캐릭터',
    cap: '자체 제작 캐릭터 — 시리즈로 확장해 채널 전반에 사용',
    cls: 'pf wide',
    w: 760,
    h: 420,
  },
  {
    src: '/images/portfolio_character_3.jpg',
    alt: '자체 제작 캐릭터',
    cap: '자체 제작 캐릭터 — 시술·이벤트별 응용컷',
    cls: 'pf',
    w: 760,
    h: 423,
  },
];

export default function Portfolio() {
  const ref = useScrollAnimation();
  const [zoom, setZoom] = useState<number | null>(null);

  return (
    <section className="sec" id="portfolio">
      <div className="shell reveal" ref={ref}>
        <span className="note">Design Works</span>
        <h2 className="title">
          작은 이미지부터 영상까지,
          <br />
          직접 제작합니다.
        </h2>
        <p className="lede">
          팝업·배너·포스터·현수막·입간판·게시판까지. 진료과 컨셉에 맞춰 시리즈로 만듭니다.
          <br />
          이미지를 클릭하면 크게 보고, ‹ › 로 넘겨볼 수 있습니다.
        </p>

        <div className="pf-grid stagger">
          {PF.map((p, i) => (
            <button
              type="button"
              className={p.cls}
              key={`${p.src}-${i}`}
              onClick={() => setZoom(i)}
              aria-label={
                p.video
                  ? `${p.alt} 재생 (${i + 1}/${PF.length})`
                  : `${p.alt} 크게 보기 (${i + 1}/${PF.length})`
              }
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                sizes="(max-width: 480px) 50vw, (max-width: 760px) 50vw, 290px"
              />
              {/* 영상 타일에만 재생 표시 — 정지 이미지와 구분이 안 되면 아무도 안 누른다 */}
              {p.video && (
                <span className="pf-play" aria-hidden="true">
                  <Play size={20} fill="currentColor" />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {zoom !== null && (
        <Lightbox
          items={PF}
          startIndex={zoom}
          label="디자인 작업물"
          fit
          onClose={() => setZoom(null)}
        />
      )}
    </section>
  );
}
