import { useEffect, useRef, useState, useCallback } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<HTMLElement>>(new Set());

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, ...options });

    // Observe all existing elements
    elementsRef.current.forEach((el) => {
      observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [options]);

  const setRef = useCallback((el: HTMLElement | null) => {
    if (el && !elementsRef.current.has(el)) {
      elementsRef.current.add(el);
      observer.current?.observe(el);
    }
  }, []);

  return setRef;
};

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress((window.scrollY / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
};
