import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const thresholdValue = isMobile ? 0.1 : 0.3;

    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('invisible-before');
            entry.target.classList.add('animate-slide-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: thresholdValue }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}
