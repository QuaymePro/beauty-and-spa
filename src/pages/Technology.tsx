import React from 'react';
import { Sparkles, Brain, Cpu, Layers } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useAnimation';

const Technology: React.FC = () => {
  const setRef = useIntersectionObserver();

  return (
    <div className="technology-page" style={{ paddingTop: '160px' }}>
      <section className="section-container">
        <h1 ref={setRef} className="reveal" style={{ fontSize: '64px', marginBottom: '40px' }}>The Intelligence Behind the Glow</h1>
        <p ref={setRef} className="reveal-blur delay-200" style={{ fontSize: '24px', color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '80px' }}>
          Overlay combines proprietary computer vision with dermatological data to automate the perfect makeup application.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '120px' }}>
          {[
            { 
              icon: <Brain size={32} />, 
              title: 'Neural Mesh Mapping', 
              desc: 'Our engine identifies 1,400+ unique points on your face to understand bone structure and muscle movement in real-time.' 
            },
            { 
              icon: <Cpu size={32} />, 
              title: 'Sub-surface Analysis', 
              desc: 'Detects skin hydration levels, texture, and vascularity to recommend formulas that breathe and heal.' 
            },
            { 
              icon: <Layers size={32} />, 
              title: 'AR Compositing', 
              desc: 'Hyper-realistic virtual application that accounts for lighting environments from sunrise to fluorescent office lights.' 
            },
            { 
              icon: <Sparkles size={32} />, 
              title: 'Bespoke Automation', 
              desc: 'A system that learns your preferences over time, adapting your routine to your changing skin and schedule.' 
            }
          ].map((tech, i) => (
            <div key={i} ref={setRef} className={`glass-card reveal-scale delay-${(i % 2) * 200}`} style={{ padding: '48px' }}>
              <div style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>{tech.icon}</div>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{tech.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Technology;
