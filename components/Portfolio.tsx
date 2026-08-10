import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Lightbox from './Lightbox';
import { VIDEO_HANSARANG, VIDEO_HANSARANG_DIET, type Shot } from '../lib/works';

/** cls 는 모자이크 그리드에서 차지할 칸(.tall = 2행, .wide = 2열). cap 은 확대했을 때 하단 설명. */
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
    src: '/images/portfolio_banners.jpg',
    alt: '시술별 배너 시리즈',
    cap: '배너 시리즈 — 시술별로 톤을 맞춰 한 벌로 제작',
    cls: 'pf wide',
    w: 820,
    h: 587,
  },
  {
    src: '/images/portfolio_event_poster.jpg',
    alt: '1월 이벤트 포스터',
    cap: '이벤트 포스터 — 시즌 이벤트 고지용',
    cls: 'pf',
    w: 760,
    h: 1075,
  },
  {
    src: '/images/portfolio_character_1.jpg',
    alt: '자체 제작 캐릭터',
    cap: '자체 제작 캐릭터 — 진료과 컨셉에 맞춘 오리지널',
    cls: 'pf',
    w: 760,
    h: 424,
  },
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
  // 영상은 서비스 '콘텐츠 제작'과 같은 것을 쓴다 — 주소·문구는 lib/works.ts 한 곳에만 있다.
  { ...VIDEO_HANSARANG, cls: 'pf wide' }, // 가로형 → 2칸
  { ...VIDEO_HANSARANG_DIET, cls: 'pf tall' }, // 세로형 → 2행
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
