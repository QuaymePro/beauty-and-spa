import React from 'react';
import SocialProof from '../components/SocialProof';
import FeatureBlocks from '../components/FeatureBlocks';
import RoutineBuilder from '../components/RoutineBuilder';
import Gallery from '../components/Gallery';
import { useIntersectionObserver } from '../hooks/useAnimation';

const Home: React.FC = () => {
  const setRef = useIntersectionObserver();

  return (
    <>
      <section className="hero section-container" style={{ textAlign: 'center', paddingTop: '160px', paddingBottom: '120px' }}>
        <h1 ref={setRef} className="reveal" style={{ fontSize: '72px', maxWidth: '900px', margin: '0 auto 40px', lineHeight: 1.1 }}>
          The Future of Beauty is Automated
        </h1>
        
        <div ref={setRef} className="hero-visual reveal-scale delay-200" style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
          <div 
            className="portrait-placeholder" 
            style={{ 
              width: '100%', 
              aspectRatio: '3/4', 
              backgroundColor: '#f0f0f0', 
              borderRadius: '32px',
              backgroundImage: 'linear-gradient(45deg, var(--pink-gradient), var(--lavender-gradient))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
            }}
          >
            <div 
              className="ar-mesh-sim" 
              style={{ 
                width: '80%', 
                height: '80%', 
                border: '1px solid rgba(255,255,255,0.8)', 
                borderRadius: '50% 50% 40% 40%',
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: 'rgba(255,255,255,0.8)',
                boxShadow: '0 0 10px white',
                animation: 'scan 4s infinite linear'
              }}></div>
            </div>
          </div>
          
          <div className="feature-pills" style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
            {['AI Analysis', 'Real-time Try-on', 'Routine Builder', 'Custom Shades'].map((pill, i) => (
              <div key={i} className={`glass-card reveal delay-${300 + i * 100}`} style={{ padding: '10px 24px', borderRadius: '100px', fontSize: '14px', fontWeight: 500 }}>
                {pill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div ref={setRef} className="reveal"><SocialProof /></div>
      <div ref={setRef} className="reveal-blur"><FeatureBlocks /></div>
      <div ref={setRef} className="reveal"><RoutineBuilder /></div>
      <div ref={setRef} className="reveal-scale"><Gallery /></div>
    </>
  );
};

export default Home;
