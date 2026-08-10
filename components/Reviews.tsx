import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * 시안은 후기를 이미지 4장으로만 뒀다 → 검색 노출 0, 판독성 낮음.
 * 시안 CSS에 남아 있던 .rev-grid/.rev-c 구조를 되살려 텍스트 인용을 병기한다.
 * 인용문은 전부 캡처 이미지에 실제로 적힌 문장이다. (지어낸 후기 없음)
 */
const QUOTES = [
  {
    src: 'KAKAOTALK',
    q: '대표님이 써주시는 글들이 1위 유지가 아주 잘 되어지는 것 같아서 감사할 따름입니다.',
    who: '○○내과 마케팅 담당자',
  },
  {
    src: 'KAKAOTALK',
    q: '든든하구만요^^ 최고입니다. 감사합니다.',
    who: '○○ 부장님',
  },
  {
    src: 'KAKAOTALK',
    q: '오늘 신환, 당근 보고 오심ㅋㅋ',
    who: '진행 중 병원 실장님',
  },
];

const SHOTS = [
  { src: '/images/review_kakao_1.jpg', cap: 'KAKAOTALK · 진행 중 병원 담당자', w: 535, h: 406 },
  { src: '/images/review_kakao_2.jpg', cap: 'KAKAOTALK · ○○내과 마케팅 담당자', w: 693, h: 451 },
  { src: '/images/review_kakao_3.jpg', cap: 'KAKAOTALK · ○○ 부장님', w: 682, h: 1068 },
  {
    src: '/images/review_email_strategy.jpg',
    cap: 'BRAND STRATEGY · 브랜딩 전략 참여',
    w: 900,
    h: 444,
  },
];

export default function Reviews() {
  const ref = useScrollAnimation();

  return (
    <section className="sec" id="reviews">
      <div className="shell reveal" ref={ref}>
        <span className="note">Testimonials</span>
        {/*
          시안은 "원장님들이 직접 남긴 말."이었으나 실제 출처는 마케팅 담당자·부장·실장이라
          사실과 맞지 않았다. 직급을 특정하지 않는 표현으로 교정(2026-08-07 사장님 확정).
        */}
        <h2 className="title">함께 일한 분들이 남긴 말.</h2>

        <div className="rev-grid stagger">
          {QUOTES.map((r) => (
            <blockquote className="rev-c" key={r.who}>
              <div className="rev-src">
                <span className="dot" aria-hidden="true" />
                {r.src}
              </div>
              <p>&ldquo;{r.q}&rdquo;</p>
              <footer className="who">— {r.who}</footer>
            </blockquote>
          ))}
        </div>

        <p className="rev-wall-h">원문 캡처</p>
        {/* 모바일에서 .rev-wall 은 가로 스와이프 캐러셀이 된다 (CSS ≤680px) */}
        <p className="swipe-hint">옆으로 넘겨 보기</p>

        <div className="rev-wall stagger">
          {SHOTS.map((s) => (
            <figure className="rev-shot" key={s.src}>
              <Image
                src={s.src}
                alt={s.cap}
                width={s.w}
                height={s.h}
                loading="lazy"
                sizes="(max-width: 680px) 100vw, 560px"
              />
              <figcaption>{s.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
