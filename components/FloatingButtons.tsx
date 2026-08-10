import { useEffect, useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { SITE } from '../lib/site';

/**
 * 시안엔 없던 요소. 13개 섹션짜리 롱페이지라 스크롤 중간에서
 * CTA에 닿을 방법이 없었다. 색은 시안 토큰(ink / ember)으로 통일.
 *
 * 히어로와 상담 폼 구간에서는 비켜준다 —
 * 히어로엔 이미 같은 CTA가 있고, 폼 구간에서는 제출 버튼을 가린다.
 *
 * IntersectionObserver 대신 스크롤 시점의 좌표를 직접 계산한다.
 * 뷰포트보다 훨씬 큰 섹션(#contact는 1,400px)에서는 threshold 기반 판정이
 * 기대대로 발동하지 않는 경우가 있어 실측에서 숨김이 걸리지 않았다.
 */
export default function FloatingButtons() {
  const [hidden, setHidden] = useState(true); // 첫 화면(히어로)에서는 숨김으로 시작

  useEffect(() => {
    // requestAnimationFrame으로 throttle 하지 않는다 — rAF가 돌지 않는 환경에서는
    // 상태가 초기값에 멈춰 버튼이 끝까지 나타나지 않는다.
    // 하는 일이 getBoundingClientRect 2회(읽기만)라 스크롤마다 호출해도 부담이 없고,
    // 값이 같으면 React가 리렌더를 건너뛴다.
    const evaluate = () => {
      const vh = window.innerHeight;
      const hero = document.querySelector('#top');
      const contact = document.querySelector('#contact');

      // 히어로가 아직 화면의 절반 이상을 차지하면 히어로 CTA로 충분하다
      const heroDominant = hero ? hero.getBoundingClientRect().bottom > vh * 0.5 : false;
      // 상담 폼이 화면에 들어오기 시작하면 비켜준다
      const contactNear = contact ? contact.getBoundingClientRect().top < vh * 0.85 : false;

      setHidden(heroDominant || contactNear);
    };

    evaluate();
    window.addEventListener('scroll', evaluate, { passive: true });
    window.addEventListener('resize', evaluate, { passive: true });
    // 앵커 점프(#contact 등)는 스크롤 이벤트 없이 위치가 바뀔 수 있다.
    // 이 버튼 자체가 #contact로 보내므로, 놓치면 버튼이 폼 위에 남는다.
    window.addEventListener('hashchange', evaluate);

    // 스크롤 이벤트가 누락되는 경우까지 커버하는 두 번째 신호.
    // 판정은 위 evaluate()의 좌표 계산 하나로만 하고, 관찰자는 트리거 역할만 한다.
    const observer = new IntersectionObserver(evaluate, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    ['#top', '#contact'].forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', evaluate);
      window.removeEventListener('resize', evaluate);
      window.removeEventListener('hashchange', evaluate);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`floaties${hidden ? ' is-hidden' : ''}`} aria-hidden={hidden}>
      <a href={SITE.telHref} className="floaty call" tabIndex={hidden ? -1 : 0}>
        <Phone size={17} aria-hidden="true" />
        <span>전화 상담</span>
      </a>
      <a href="#contact" className="floaty ask" tabIndex={hidden ? -1 : 0}>
        <MessageSquare size={17} aria-hidden="true" />
        <span>무료 진단 신청</span>
      </a>
    </div>
  );
}
