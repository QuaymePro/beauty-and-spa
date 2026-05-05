import React from 'react';
import { Sparkles, Zap, Smartphone, CheckCircle } from 'lucide-react';

const FeatureBlocks: React.FC = () => {
  return (
    <div className="features">
      {/* AI Analysis Block */}
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="section-container">
          <div style={{ position: 'relative', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
            {/* Abstract flowing wave mesh simulation */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100px',
              background: 'linear-gradient(90deg, transparent, var(--pink-gradient), var(--lavender-gradient), transparent)',
              filter: 'blur(40px)',
              opacity: 0.6,
              animation: 'wave 10s infinite linear'
            }}></div>
            <Sparkles size={48} color="var(--text-primary)" style={{ zIndex: 1 }} />
          </div>
          <h2 style={{ fontSize: '40px', maxWidth: '600px', margin: '0 auto 24px' }}>
            AI Skin Analysis detects every feature of your face to generate personalized recommendations
          </h2>
        </div>
      </section>

      {/* Real-time Try-On Block */}
      <section style={{ padding: '120px 0' }}>
        <div className="section-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className="glass-card" style={{ aspectRatio: '1/1', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Smartphone size={120} strokeWidth={1} color="var(--text-secondary)" />
          </div>
          <div>
            <Zap size={32} color="var(--text-primary)" style={{ marginBottom: '24px' }} />
            <h2 style={{ fontSize: '40px', marginBottom: '24px' }}>
              Real-time virtual try-on lets you see every shade and style instantly on your face
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>
              Minimal, precise, and instantaneous. Experience makeup without the mess.
            </p>
          </div>
        </div>
      </section>

      {/* Value Prop Statement */}
      <section style={{ padding: '120px 0', backgroundColor: 'rgba(255,255,255,0.5)' }}>
        <div className="section-container">
          <h2 style={{ fontSize: '48px', textAlign: 'center', marginBottom: '80px' }}>
            Overlay is an intelligent, personalized makeup experience
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {[
              { icon: <CheckCircle />, title: 'Precision AI', label: 'Detection' },
              { icon: <CheckCircle />, title: 'Real-time', label: 'Visualization' },
              { icon: <CheckCircle />, title: 'Bespoke', label: 'Formulas' },
              { icon: <CheckCircle />, title: 'Step-by-step', label: 'Guidance' }
            ].map((prop, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', color: 'var(--text-primary)' }}>
                  {prop.icon}
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{prop.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{prop.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes wave {
          0% { transform: translateX(-50%) skewX(0deg); }
          50% { transform: translateX(50%) skewX(20deg); }
          100% { transform: translateX(-50%) skewX(0deg); }
        }
      `}</style>
    </div>
  );
};

export default FeatureBlocks;
