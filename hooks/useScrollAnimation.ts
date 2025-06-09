import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // 📱 화면 크기에 따라 threshold 값 설정
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-fwd-bottom');
          } else {
            entry.target.classList.remove('animate-slide-in-fwd-bottom');
          }
        });
      },
      {
        threshold: isMobile ? 0.1 : 0.3,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return ref;
}
