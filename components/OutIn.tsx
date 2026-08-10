import { useScrollAnimation } from '../hooks/useScrollAnimation';

const OUT = [
  '미팅은 대표가, 실무는 초보 실무자가',
  '연락 두절·피드백 불일치·다른 진행',
  'AI가 찍어내듯 상위 노출만 된 포스팅',
  "'다 그런가' 싶어 지나친 낚시성 광고",
];

const IN = [
  '대표가 직접 방문 — 마케터·의사와 면담',
  '대표가 직접 설계 — 15년차의 광고 설계',
  '대표가 직접 제작 — 촬영부터 포스팅까지',
  '대표가 직접 인터뷰 — 병원의 진짜 이야기',
];

export default function OutIn() {
  const ref = useScrollAnimation();

  return (
    <section className="sec">
      <div className="shell reveal" ref={ref}>
        <span className="note">Why Nabom</span>
        <h2 className="title">
          이런 광고, 빼드립니다.
          <br />
          이런 광고, 넣어드립니다.
        </h2>
        <p className="lede">
          미팅 따로 실무 따로 — 그런 일이 없도록, 나봄은 대표가 직접 빼고 직접 넣습니다.
        </p>

        <div className="oi-grid">
          <div className="oi-col out stagger">
            <div className="oi-head">
              <span className="tag">빼기 OUT</span>
            </div>
            <p className="oi-sub">일반 대행사에서 흔한 일</p>
            {OUT.map((t) => (
              <div className="oi-item" key={t}>
                <span className="mk" aria-hidden="true">
                  —
                </span>
                <s className="tx">{t}</s>
              </div>
            ))}
          </div>

          <div className="oi-col in stagger">
            <div className="oi-head">
              <span className="tag">넣기 IN</span>
            </div>
            <p className="oi-sub">그래서, 나봄은</p>
            {IN.map((t) => (
              <div className="oi-item" key={t}>
                <span className="mk" aria-hidden="true">
                  ＾
                </span>
                <span className="tx">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
