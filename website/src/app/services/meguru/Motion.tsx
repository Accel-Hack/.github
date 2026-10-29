'use client';

import { useEffect } from 'react';

export default function Motion() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      '#main section:not(:first-child) h2, #main article, #main li, #main figure',
    );
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.animate(
              [
                { opacity: 0, transform: 'translateY(26px)' },
                { opacity: 1, transform: 'translateY(0)' },
              ],
              { duration: 800, easing: 'cubic-bezier(.2,.7,.2,1)' },
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}
