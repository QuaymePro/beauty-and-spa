import React from 'react';
import './styles/global.css';
import MeshGradient from './components/MeshGradient';
import SocialProof from './components/SocialProof';
import FeatureBlocks from './components/FeatureBlocks';
import RoutineBuilder from './components/RoutineBuilder';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="app">
      <MeshGradient />
      
      <header className="header section-container" style={{ display: 'flex', justifyContent: 'flex-end', padding: '24px', position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
        <button className="btn btn-primary">Get Started</button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero section-container" style={{ textAlign: 'center', paddingTop: '160px', paddingBottom: '120px' }}>
          <h1 style={{ fontSize: '72px', maxWidth: '900px', margin: '0 auto 40px', lineHeight: 1.1 }}>
            The Future of Beauty is Automated
          </h1>
          
          <div className="hero-visual" style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
            <div 
              className="portrait-placeholder fade-up" 
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
                {/* Simulated scan line */}
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
                <div key={i} className="glass-card fade-up" style={{ padding: '10px 24px', borderRadius: '100px', fontSize: '14px', fontWeight: 500, animationDelay: `${0.2 + i * 0.1}s` }}>
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <SocialProof />
        <FeatureBlocks />
        <RoutineBuilder />
        <Gallery />

        {/* Footer CTA */}
        <section style={{ padding: '120px 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="section-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>Get started with Overlay today</h2>
              <div style={{ display: 'flex', gap: '24px', color: 'var(--text-secondary)' }}>
                <span>Instagram</span>
                <span>Twitter</span>
                <span>TikTok</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '24px', fontWeight: 500, marginBottom: '8px' }}>hello@overlay.com</p>
              <p style={{ color: 'var(--text-secondary)' }}>Based in SF & NY</p>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fade-up 0.8s forwards ease-out;
        }

        @keyframes fade-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }

        @media (max-width: 768px) {
          h1 { font-size: 48px !important; }
          .section-container { padding: 0 16px !important; }
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          div[style*="justify-content: space-between"] {
            flex-direction: column !important;
            gap: 40px !important;
            text-align: center !important;
          }
          div[style*="text-align: right"] {
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
