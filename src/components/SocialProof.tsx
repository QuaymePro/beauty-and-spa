import React from 'react';
import { Diamond } from 'lucide-react';

interface CarouselItem {
  id: number;
  image: string;
}

const SocialProof: React.FC = () => {
  const items: CarouselItem[] = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`
  }));

  return (
    <section className="social-proof" style={{ padding: '120px 0', textAlign: 'center', overflow: 'hidden' }}>
      <div className="section-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
          <Diamond size={16} fill="var(--text-primary)" />
          <span style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Trusted by Creators
          </span>
        </div>
        
        <h2 style={{ fontSize: '48px', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
          The 3.6M+ creators getting personalized makeup with Overlay
        </h2>

        <div className="carousel-wrapper" style={{ position: 'relative', height: '300px' }}>
          <div className="carousel-arc" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '24px',
            paddingTop: '40px'
          }}>
            {items.map((item, index) => {
              // Calculate a simple arc offset
              const offset = Math.abs(index - 4.5);
              const translateY = offset * offset * 5;
              const rotate = (index - 4.5) * 5;

              return (
                <div 
                  key={item.id}
                  className="glass-card"
                  style={{
                    width: '120px',
                    height: '120px',
                    flexShrink: 0,
                    borderRadius: '24px',
                    padding: '8px',
                    transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `translateY(${translateY - 10}px) rotate(${rotate}deg) scale(1.1)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
                  }}
                >
                  <img 
                    src={item.image} 
                    alt="User" 
                    style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover' }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
