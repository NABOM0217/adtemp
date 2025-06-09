import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const isMobile = window.innerWidth <= 768; // 모바일 기준 너비
    const thresholdValue = isMobile ? 0.1 : 0.3; // 모바일은 10%, 나머지는 30%

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('invisible-before');
            entry.target.classList.add('slide-in-fwd-bottom');
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
