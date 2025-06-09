import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // 1. 브라우저 환경에서만 실행
    if (!ref.current || typeof window === 'undefined') return;

    // 2. 클라이언트에서 안전하게 width 체크
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const thresholdValue = isMobile ? 0.1 : 0.3;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('invisible-before');
            entry.target.classList.add('slide-in-fwd-bottom');
            observer.unobserve(entry.target); // 한 번만 실행되도록
          }
        });
      },
      {
        threshold: thresholdValue,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}
