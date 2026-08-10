import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ROWS = [
  {
    idx: '01',
    h: '노출',
    tag: '보이는 자리에 둔다',
    p: '키워드 발굴과 포스팅으로 잠재 고객의 시야에 우리 병원을 정확히 위치시킵니다.',
  },
  {
    idx: '02',
    h: '설득',
    tag: '읽고 내원하게 만든다',
    p: '감성을 건드리는 글로 검색 → 클릭 → 내원의 흐름을 끊김없이 잇습니다.',
  },
  {
    idx: '03',
    h: '경험',
    tag: '내원 후 다시 찾게 한다',
    p: '내원한 환자가 후기를 남기고 또 다른 환자를 데려오는 선순환을 설계합니다.',
  },
];

export default function Method() {
  const ref = useScrollAnimation();

  return (
    <section className="sec dark" id="method">
      <div className="shell reveal" ref={ref}>
        <span className="note">Core Method · 성공의 3박자</span>
        <h2 className="title" style={{ color: '#fff' }}>
          노출로 보이고, 설득으로 이끌고,
          <br />
          경험으로 다시 찾게.
        </h2>
        <p className="lede">세 박자가 맞아야 환자가 움직입니다. 순서가 있는 흐름입니다.</p>

        <div className="method-rows stagger">
          {ROWS.map((r) => (
            <div className="mrow" key={r.idx}>
              <div className="idx" aria-hidden="true">
                {r.idx}
              </div>
              <div>
                <div className="mh">{r.h}</div>
                <span className="mtag">{r.tag}</span>
              </div>
              <p className="mp">{r.p}</p>
            </div>
          ))}
        </div>

        <p className="method-quote">
          &ldquo;상위 노출은 그물일 뿐,
          <br />
          결국 물고기를 잡는 건 <span className="em">환자의 감성을 건드리는 일</span>입니다.&rdquo;
        </p>
      </div>
    </section>
  );
}
