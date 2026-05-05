import { useEffect, useRef, useState, useCallback } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, ...options });

    elements.forEach((el) => {
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [elements, options]);

  const setRef = useCallback((el: HTMLElement | null) => {
    if (el) {
      setElements((prev) => {
        if (prev.includes(el)) return prev;
        return [...prev, el];
      });
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
