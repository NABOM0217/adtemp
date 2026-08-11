import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PKGS = [
  {
    pt: 'LIGHT',
    h3: '라이트',
    pd: '신규 개원 / 첫 시작',
    feat: false,
    items: [
      '블로그 포스팅 (월 정량)',
      '파워링크 운영',
      '지도 광고 셋업',
      '월간 순위 보고서',
      '포스팅 순위 확인 프로그램',
    ],
    btn: '상담 후 견적',
  },
  {
    pt: 'STANDARD',
    h3: '스탠다드',
    pd: '라이트 전체 포함 + 확장',
    feat: true,
    items: [
      '라이트 전체 포함',
      '인스타·카페·당근 운영',
      '이벤트/팝업 이미지 제작',
      '월간 컨설팅 미팅',
    ],
    btn: '무료 진단 미팅 신청',
  },
  {
    pt: 'PREMIUM',
    h3: '프리미엄',
    pd: '확장기 / 풀 마케팅',
    feat: false,
    items: [
      '스탠다드 전체 포함',
      '광고 영상·캐릭터 작업',
      '홈페이지 제작·관리',
      '오프라인 자산 제작',
    ],
    btn: '상담 후 견적',
  },
];

export default function Packages() {
  const ref = useScrollAnimation();

  return (
    <section className="sec" style={{ background: 'var(--panel)' }} id="packages">
      <div className="shell reveal" ref={ref}>
        <span className="note">Packages</span>
        <h2 className="title">
          병원에 맞는 프로그램을,
          <br />
          컨설팅 후에 함께 정합니다.
        </h2>

        <div className="pkg-row stagger" style={{ background: 'var(--paper)' }}>
          {PKGS.map((p) => (
            <div className={`pkg${p.feat ? ' feat' : ''}`} key={p.pt}>
              {/*
                배지는 스탠다드에만 보이지만 세 칸 모두 렌더한다.
                추천 카드에만 넣으면 그 칸의 내용이 배지 높이만큼 아래로 밀려
                제목·항목·버튼이 옆 칸과 어긋난다. 같은 요소를 숨겨 자리만 잡아두면
                글자 크기나 줄바꿈이 달라져도 높이가 항상 일치한다.
              */}
              <span
                className={`rec${p.feat ? '' : ' rec-ghost'}`}
                aria-hidden={p.feat ? undefined : true}
              >
                RECOMMENDED · 가장 많이 선택
              </span>
              <div className="pt">{p.pt}</div>
              <h3>{p.h3}</h3>
              <div className="pd">{p.pd}</div>
              <ul>
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {/* 시안은 <div>라 클릭이 안 됐다 → 앵커로 살림 (외형 동일) */}
              <a href="#contact" className="pbtn">
                {p.btn}
              </a>
            </div>
          ))}
        </div>

        <p className="pkg-note">※ 진료과·상담 내용에 따라 프로그램은 조정될 수 있습니다.</p>
      </div>
    </section>
  );
}
