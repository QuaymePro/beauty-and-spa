import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
}

export const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  testimonials,
  autoplay = false,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="animated-testimonials-container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
      <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div className="image-column">
          <div className="relative-wrapper" style={{ position: 'relative', height: '480px', width: '100%' }}>
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 99
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -20, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  style={{ position: 'absolute', inset: 0, originY: 'bottom' }}
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    style={{ height: '100%', width: '100%', borderRadius: '32px', objectFit: 'cover', objectPosition: 'center' }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="content-column" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px 0' }}>
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
              {testimonials[active].name}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              {testimonials[active].designation}
            </p>
            <motion.p style={{ fontSize: '24px', color: 'var(--text-secondary)', marginTop: '32px', lineHeight: 1.6, fontStyle: 'italic', fontFamily: 'var(--font-headline)' }}>
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                  style={{ display: 'inline-block' }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div style={{ display: 'flex', gap: '16px', paddingTop: '48px' }}>
            <button
              onClick={handlePrev}
              className="btn-round"
              style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--primary-sage)', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }}
            >
              <ArrowLeft size={20} color="var(--primary-sage)" />
            </button>
            <button
              onClick={handleNext}
              className="btn-round"
              style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--primary-sage)', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }}
            >
              <ArrowRight size={20} color="var(--primary-sage)" />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .btn-round:hover {
          background-color: var(--primary-sage);
        }
        .btn-round:hover svg {
          color: white !important;
        }
        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .relative-wrapper {
            height: 320px;
          }
        }
      `}</style>
    </div>
  );
};
