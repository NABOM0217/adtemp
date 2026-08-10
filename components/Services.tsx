import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Lightbox from './Lightbox';
import { WORKS } from '../lib/works';

/** si 는 lib/works.ts 의 WORKS 키와 1:1로 맞춘다 — 항목을 누르면 그 종류의 결과물이 열린다. */
const ITEMS = [
  {
    si: '01',
    kr: '콘텐츠 제작',
    en: 'CREATIVE PRODUCTION',
    sd: '광고 영상 · 자체 캐릭터 작업 · 이벤트/팝업 이미지',
  },
  {
    si: '02',
    kr: '온라인 노출',
    en: 'ONLINE VISIBILITY',
    sd: '블로그·카페·지도 · 인스타·당근·구글 · 파워링크·다음/카카오',
  },
  {
    si: '03',
    kr: '오프라인',
    en: 'OFFLINE',
    sd: '이벤트·팝업 · 배너·포스터·현수막 · 입간판·게시판 · 옥탑 빌보드',
  },
  {
    si: '04',
    kr: '홈페이지',
    en: 'WEBSITE',
    sd: '홈페이지 제작 · 유지보수 · 수시 업데이트와 관리',
  },
];

export default function Services() {
  const ref = useScrollAnimation();
  const [open, setOpen] = useState<string | null>(null);
  const group = open ? WORKS[open] : null;

  return (
    <section className="sec" id="services">
      <div className="shell reveal" ref={ref}>
        <div className="svc-lead">
          <div>
            <span className="note">Service Lineup</span>
            <h2 className="title">
              병원 마케팅을 중심으로,
              <br />
              필요한 건 한 곳에서.
            </h2>
          </div>
          <p className="lede" style={{ maxWidth: 340 }}>
            나봄은 종합 마케팅 대행사입니다. 다만 시작은 언제나 병원 마케팅·컨설팅입니다.
          </p>
        </div>

        <div className="svc-list stagger">
          {ITEMS.map((it) => {
            const shots = WORKS[it.si]?.shots ?? [];

            const inner = (
              <>
                <span className="si" aria-hidden="true">
                  {it.si}
                </span>
                <div className="sh">
                  {it.kr}
                  <span className="en">{it.en}</span>
                </div>
                <div className="sd">{it.sd}</div>
                {shots.length > 0 && (
                  <span className="svc-count" aria-hidden="true">
                    결과물 {shots.length}
                  </span>
                )}
              </>
            );

            // 결과물 이미지가 있는 종류만 누를 수 있다.
            // 없는 종류(현재 홈페이지)는 lib/works.ts 에 파일을 채우면 자동으로 버튼이 된다.
            return shots.length > 0 ? (
              <button
                type="button"
                className="svc-item"
                key={it.si}
                onClick={() => setOpen(it.si)}
                aria-label={`'${it.kr}' 작업 결과물 ${shots.length}장 보기`}
              >
                {inner}
              </button>
            ) : (
              <div className="svc-item" key={it.si}>
                {inner}
              </div>
            );
          })}
        </div>

        <span className="svc-flag">
          <span className="caret" aria-hidden="true">
            ＾
          </span>
          메인은 병원 마케팅 · 컨설팅 — 분석부터 시작합니다 (고객층 → 시술 → 컨셉 정립)
        </span>
      </div>

      {group && group.shots.length > 0 && (
        <Lightbox
          items={group.shots}
          label={`'${group.label}' 작업 결과물`}
          fit={group.fit}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
