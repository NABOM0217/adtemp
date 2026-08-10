const OUT_ROWS = [
  'AI로 찍어낸 낚시성 상위노출 포스팅',
  '클릭만 있고 내원은 없는 광고비',
];

const IN_ROWS = [
  '감성을 건드려 발걸음을 만드는 글',
  '인하우스 출신 — 환자를 아는 대표의 직접 설계',
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div>
          <span className="note ember">병원 마케팅 · 컨설팅 전문</span>
          <h1>
            {/*
              h1 카피는 시안 그대로 두고, 검색 키워드는 h1 안에 sr-only로 넣는다.
              별도 <h2 class="sr-only">로 두면 문서 순서상 h2가 h1보다 먼저 와서
              heading 위계(h1→h2)가 깨진다.
            */}
            <span className="sr-only">천안 병원 마케팅 · 의료 마케팅 컨설팅 전문 나봄 — </span>
            이 광고는 <s className="cut">빼고</s>,
            <span className="l2">
              이 광고는{' '}
              {/* 마침표가 홀로 다음 줄로 떨어지지 않게 함께 묶는다 */}
              <span className="nowrap">
                {/*
                  시안 CSS에는 .ins-caret(삽입기호 ＾) 규칙이 있으나 마크업이 없다.
                  실제로 넣어보면 h1의 line-height 1.08에서 윗줄·글자와 충돌해 읽기 어렵다.
                  ＾ 모티프는 교정지 카드·OUT/IN·패키지 불릿·서비스 플래그에서 이미 반복되므로
                  여기서는 시안과 동일하게 생략한다.
                */}
                <span className="add">넣으세요</span>.
              </span>
            </span>
          </h1>
          <p className="hero-lede">
            넣을 광고와 뺄 광고 — <b>예산이 새지 않도록</b> 15년차 대표가 직접 설계합니다. 상위 노출
            대행이 아니라, 내원을 만드는 병원 마케팅 컨설팅.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-fill">
              무료 진단 미팅 신청 →
            </a>
            <a href="#method" className="btn btn-line">
              일하는 방식 보기
            </a>
          </div>
        </div>

        {/* 시그니처: 교정지. 시안은 aria-hidden="true" 였으나 장식이 아니라 핵심 메시지라 해제 */}
        <div className="proof">
          <div className="proof-h">원장님 마케팅 예산 · 교정 검토</div>

          {OUT_ROWS.map((t) => (
            <div className="proof-row out" key={t}>
              <span className="mk" aria-hidden="true">
                —
              </span>
              <s className="tx">{t}</s>
            </div>
          ))}

          {IN_ROWS.map((t) => (
            <div className="proof-row in" key={t}>
              <span className="mk" aria-hidden="true">
                ＾
              </span>
              <span className="tx">{t}</span>
            </div>
          ))}

          {/*
            시안 CSS에 .proof-foot 규칙도 남아 있다(카드 하단 요약줄).
            다만 여기 들어갈 문구는 사장님 카피 영역이라 임의로 지어 넣지 않았다.
            문구를 주시면 <div className="proof-foot">…</div> 만 추가하면 된다.
          */}
        </div>
      </div>
    </section>
  );
}
