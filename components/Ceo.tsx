import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LINE = [
  { n: '15', u: '년', k: '병원 마케팅' },
  { n: '20', u: '년', k: '파워블로그 1위 (2018~2024)' },
  { n: '10', u: '년', k: '인하우스 마케터' },
];

export default function Ceo() {
  const ref = useScrollAnimation();

  return (
    <section className="sec dark ceo" id="ceo">
      <div className="shell reveal ceo-solo" ref={ref}>
        <div>
          <span className="note">About · 대표 김현진</span>
          <h2>
            &ldquo;광고를 보고 왔다&rdquo;는 후기 한 줄,
            <br />
            제가 글을 쓰는 이유입니다.
          </h2>
          <p className="story">
            병원 인하우스 마케터 총괄로 10년, 지금의 나봄으로 다시 5년. 그리고 네이버 파워블로거 —
            2018~2024년 파워블로그 랭킹 1위, 블로그 경력 20년. 마케터이기 전에, 20년을 쓴 사람입니다.
          </p>

          <div className="ceo-line stagger">
            {LINE.map((c) => (
              <div className="ci" key={c.k}>
                <div className="n">
                  {c.n}
                  <span className="u">{c.u}</span>
                </div>
                <div className="k">{c.k}</div>
              </div>
            ))}
          </div>

          <p className="ceo-quote">내 글이 누군가의 발걸음이 될 때, 가장 행복합니다.</p>
        </div>
      </div>
    </section>
  );
}
