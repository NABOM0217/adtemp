const ITEMS = [
  { n: '15', u: '년', k: '병원 마케팅 경력' },
  { n: '20', u: '년', k: '블로그 · 파워블로그 1위 (2018~2024)' },
  { n: '1', u: '곳', k: '같은 지역·같은 업종은 단독 진행' },
];

export default function Masthead() {
  return (
    <div className="masthead">
      <div className="shell masthead-in">
        {ITEMS.map((it) => (
          <div className="mh-item" key={it.k}>
            <div className="n">
              {it.n}
              <span className="u">{it.u}</span>
            </div>
            <div className="k">{it.k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
