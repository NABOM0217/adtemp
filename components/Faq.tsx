import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * 시안에 없던 신규 섹션.
 * landing 패턴 "Pricing-Focused"의 순서(패키지 → FAQ → 최종 CTA)와
 * "Address objections in FAQ" 원칙에 따라 CTA 직전에 배치한다.
 *
 * ⚠️ 답변은 전부 시안·브리프에 이미 있는 사실만으로 작성했다.
 *    최소 시작가 대역·계약 기간·해지 조건은 확정된 값이 없어 넣지 않았다.
 *    사장님 확정 후 Q1에 가격 대역을 추가하면 이탈률이 더 낮아진다.
 */
const FAQ = [
  {
    q: '비용은 얼마인가요? 왜 금액이 공개되어 있지 않나요?',
    a: '진료과, 지역, 경쟁 키워드의 난이도에 따라 필요한 작업량이 크게 달라져 정찰가를 붙이면 오히려 맞지 않는 견적이 됩니다. 무료 진단 미팅에서 병원 상황과 예산 범위를 먼저 맞춰본 뒤, 그에 맞는 프로그램과 견적을 제안드립니다.',
  },
  {
    q: '효과는 언제부터 나타나나요?',
    a: '키워드 경쟁 강도에 따라 다릅니다. 경쟁이 낮은 지역 키워드는 비교적 빠르게, 경쟁이 치열한 키워드는 시간이 더 걸립니다. 다만 진행 상황을 기다리기만 하지 않도록, 나봄이 자체 제작한 실시간 순위 확인 프로그램으로 원장님이 직접 순위를 확인하실 수 있습니다.',
  },
  {
    q: '같은 지역의 경쟁 병원도 함께 맡으시나요?',
    a: '아닙니다. 같은 지역, 같은 진료과는 한 곳만 단독으로 진행합니다. 경쟁 병원을 동시에 맡으면 어느 쪽에도 최선을 다할 수 없기 때문입니다.',
  },
  {
    q: '실무도 대표가 직접 하시나요?',
    a: '방문 면담, 광고 설계, 촬영과 포스팅 제작, 병원 인터뷰까지 대표가 직접 진행합니다. 미팅은 대표가 하고 실무는 다른 사람이 하는 방식으로 일하지 않습니다.',
  },
  {
    q: '보고는 어떤 방식으로 받나요?',
    a: '월간 순위 보고서를 드리고, 여기에 더해 나봄이 자체 제작한 순위 확인 프로그램을 제공합니다. 보고서를 기다리지 않고 원하실 때 직접 순위와 노출 현황을 확인하실 수 있습니다.',
  },
  {
    q: '무료 진단 미팅에서는 무엇을 하나요?',
    a: '대표가 병원으로 직접 방문해 현재 마케팅 상태를 진단합니다. 1회 무료 컨설팅이며, 미팅 이후 병원에 맞춘 구체적인 제안서와 견적을 전달드립니다. 미팅했다고 계약해야 하는 것은 아닙니다.',
  },
];

export default function Faq() {
  const ref = useScrollAnimation();

  return (
    <section className="sec" id="faq">
      <div className="shell reveal" ref={ref}>
        <span className="note">FAQ</span>
        {/* 'FAQ' 영문 라벨만으로는 눈에 안 들어와 제목을 직관적으로 교정(사장님 확정) */}
        <h2 className="title">자주 묻는 질문.</h2>

        <div className="faq-list stagger">
          {FAQ.map((f, i) => (
            <details className="faq-item" key={f.q}>
              <summary>
                <span className="fq-i" aria-hidden="true">
                  Q{String(i + 1).padStart(2, '0')}
                </span>
                <span className="fq-q">{f.q}</span>
                <span className="fq-x" aria-hidden="true">
                  ＋
                </span>
              </summary>
              <p className="fq-a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
