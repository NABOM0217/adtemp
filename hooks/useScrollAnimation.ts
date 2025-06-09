import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-slide-in');
          el.classList.remove('invisible-before');
        } else {
          el.classList.remove('animate-slide-in');
          el.classList.add('invisible-before');
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return ref;
}
