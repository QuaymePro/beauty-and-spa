import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, ...options });

    elements.forEach((el) => observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, [elements, options]);

  const setRef = (el: HTMLElement | null) => {
    if (el && !elements.includes(el)) {
      setElements((prev) => [...prev, el]);
    }
  };

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
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
};
