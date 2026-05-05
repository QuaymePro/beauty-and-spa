import React from 'react';

const Gallery: React.FC = () => {
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=gallery-${i}`
  }));

  return (
    <section style={{ padding: '120px 0', overflow: 'hidden' }}>
      <div className="section-container" style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '48px', textAlign: 'center' }}>Captured with Overlay</h2>
      </div>
      
      <div className="gallery-track" style={{ display: 'flex', gap: '24px', animation: 'scroll 40s linear infinite' }}>
        {[...images, ...images].map((img, i) => (
          <div 
            key={i} 
            className="glass-card" 
            style={{ 
              width: '300px', 
              aspectRatio: '1/1', 
              flexShrink: 0, 
              borderRadius: '24px',
              padding: '12px',
              overflow: 'hidden'
            }}
          >
            <div style={{ 
              width: '100%', 
              height: '100%', 
              borderRadius: '16px', 
              backgroundColor: i % 2 === 0 ? 'var(--pink-gradient)' : 'var(--lavender-gradient)',
              backgroundImage: `url(${img.image})`,
              backgroundSize: 'cover'
            }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-300px * 12 - 24px * 12)); }
        }
        .gallery-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
