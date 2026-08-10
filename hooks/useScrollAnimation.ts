import { useEffect, useRef } from 'react';

/**
 * 스크롤 페이드업 리빌.
 * 시안(나봄_시안_v2_reference.html)의 IntersectionObserver 동작을 그대로 옮긴 것:
 * threshold .12에서 한 번만 발동(unobserve)하고, .reveal → .reveal.on 으로 전환한다.
 * prefers-reduced-motion 이면 관찰 없이 즉시 노출.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      el.classList.add('on');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
