import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // ✅ threshold 조건: 모바일은 0.1, PC는 0.3
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('animate-slide-in-fwd-bottom');
            target.classList.remove('invisible-before'); // ✨ 숨김 해제
          }
        });
      },
      {
        threshold: isMobile ? 0.1 : 0.3,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return ref;
}
