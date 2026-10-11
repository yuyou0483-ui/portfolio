import { useEffect, useRef } from 'react';

/**
 * 滚动进入视口时给元素加 .is-visible 触发淡入。
 * 用法：<div ref={useReveal()} className="reveal">
 */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const items = el.querySelectorAll ? el.querySelectorAll('.reveal') : [];
    // 若 ref 元素本身就是 .reveal，直接观察它
    if (el.classList.contains('reveal')) io.observe(el);
    items.forEach((n) => io.observe(n));

    return () => io.disconnect();
  }, []);
  return ref;
}
