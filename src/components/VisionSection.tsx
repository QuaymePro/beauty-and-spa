import React from 'react';
import { useIntersectionObserver } from '../hooks/useAnimation';
import { Sparkles } from 'lucide-react';

const VisionSection: React.FC = () => {
  const setRef = useIntersectionObserver();

  const visionImages = [
    { 
      url: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=400', 
      rotation: '-20deg', 
      y: '140px',
      x: '40px'
    },
    { 
      url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400', 
      rotation: '-10deg', 
      y: '40px',
      x: '20px'
    },
    { 
      url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400', 
      rotation: '0deg', 
      y: '0px',
      x: '0px'
    },
    { 
      url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=400', 
      rotation: '10deg', 
      y: '40px',
      x: '-20px'
    },
    { 
      url: 'https://images.unsplash.com/photo-1526045431048-f857369aba09?auto=format&fit=crop&q=80&w=400', 
      rotation: '20deg', 
      y: '140px',
      x: '-40px'
    }
  ];

  return (
    <section className="vision-section" style={{ padding: '160px 0', textAlign: 'center', backgroundColor: 'var(--bg-pure-white)', overflow: 'hidden' }}>
      <div className="section-container">
        {/* Badge */}
        <div ref={setRef} className="reveal-editorial" style={{ marginBottom: '80px' }}>
          <span style={{ 
            padding: '8px 24px', 
            borderRadius: '100px', 
            backgroundColor: 'rgba(90, 107, 93, 0.05)', 
            color: 'var(--primary-sage)', 
            fontSize: '10px', 
            letterSpacing: '0.2em', 
            fontWeight: 600,
            textTransform: 'uppercase'
          }}>
            Our Vision
          </span>
        </div>

        {/* Image Arc */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '12px', 
          minHeight: '480px', 
          marginBottom: '80px',
          position: 'relative'
        }}>
          {visionImages.map((img, i) => (
            <div 
              key={i} 
              ref={setRef}
              className="reveal-editorial"
              style={{ 
                width: '200px', 
                aspectRatio: '0.8', 
                borderRadius: '40px', 
                overflow: 'hidden', 
                transform: `translate(${img.x}, ${img.y}) rotate(${img.rotation})`,
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                transitionDelay: `${i * 150}ms`,
                backgroundColor: 'var(--secondary-cream)',
                flexShrink: 0
              }}
            >
              <img 
                src={img.url} 
                alt="Ritual detail" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.1) contrast(1.02)' }} 
              />
            </div>
          ))}
        </div>

        {/* Centerpiece Icon */}
        <div ref={setRef} className="reveal-editorial" style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px', color: 'var(--primary-sage)' }}>
          <Sparkles size={24} />
        </div>

        {/* Headline */}
        <div ref={setRef} className="reveal-editorial" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '56px', 
            lineHeight: 1.1, 
            color: 'var(--text-primary)', 
            fontWeight: 300,
            fontFamily: 'var(--font-headline)'
          }}>
            The daily ritual of professional care has remained a manual process for centuries, <em>until now</em>.
          </h2>
        </div>
      </div>
      
      <style>{`
        .vision-section em {
          font-family: var(--font-headline);
          font-style: italic;
          color: var(--primary-sage);
        }
        @media (max-width: 1024px) {
          .vision-section h2 { fontSize: '40px'; }
          .vision-section div[style*="height: 500px"] { height: 400px; }
        }
      `}</style>
    </section>
  );
};

export default VisionSection;
