import Image from 'next/image';

/**
 * 시안에 없던 신규 섹션.
 * 실거래 병원 로고는 이 업종에서 가장 강한 신뢰 증거인데 시안에서 빠져 있었다.
 * landing 패턴 "Trust & Authority + Conversion"(Hero → Proof: logos/stats → …)에 따라
 * Masthead 직후에 배치한다.
 */
const PARTNERS = [
  { src: '/partners/hwahong_hospital.png', alt: '화홍병원', w: 3361, h: 1069 },
  { src: '/partners/geumgang_medical.gif', alt: '금강메디컬의원', w: 236, h: 58 },
  { src: '/partners/geumgang_ihwa.png', alt: '금강이화의원', w: 264, h: 53 },
  { src: '/partners/hansarang_clinic.png', alt: '한사랑의원', w: 208, h: 69 },
  { src: '/partners/hansarang_nursing.png', alt: '한사랑요양병원', w: 233, h: 70 },
  { src: '/partners/hansarang_obesity.png', alt: '한사랑비만클리닉', w: 163, h: 49 },
  { src: '/partners/babilumi_logo.gif', alt: '바비루미', w: 240, h: 87 },
];

export default function Partners() {
  return (
    <section className="partners" aria-labelledby="partners-h">
      <div className="shell">
        <h2 className="partners-h" id="partners-h">
          함께해 온 병원
        </h2>
        <div className="partners-row">
          {PARTNERS.map((p) => (
            <Image
              key={p.src}
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              unoptimized={p.src.endsWith('.gif')}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
