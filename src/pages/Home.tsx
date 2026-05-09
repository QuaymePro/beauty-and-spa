import React from 'react';
import VisionSection from '../components/VisionSection';
import { useIntersectionObserver } from '../hooks/useAnimation';
import { Sparkles, ArrowRight, Database, Zap, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  const setRef = useIntersectionObserver();

  const features = [
    {
      title: 'Full-Stack Innovation',
      desc: 'Hardware + AI-powered software',
      icon: <Database size={20} />,
      position: { top: '35%', left: '5%' }
    },
    {
      title: 'Daily Ritual Reimagined',
      desc: 'Save time, unlock pro-level results',
      icon: <Zap size={20} />,
      position: { bottom: '15%', left: '20%' }
    },
    {
      title: 'Beauty + Tech',
      desc: 'Premium industrial design meets personalization',
      icon: <Sparkles size={20} />,
      position: { bottom: '15%', right: '20%' }
    },
    {
      title: 'Safe & Effortless',
      desc: 'Designed for the face, built with care',
      icon: <ShieldCheck size={20} />,
      position: { top: '35%', right: '5%' }
    }
  ];

  return (
    <div className="award-home">
      {/* Overlay Styled Hero */}
      <section style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '80px',
        position: 'relative'
      }}>
        <div style={{ textAlign: 'center', zIndex: 10, maxWidth: '800px' }}>
          <h1 ref={setRef} className="reveal-editorial" style={{ fontSize: '90px', marginBottom: '24px', fontWeight: 400, letterSpacing: '-0.02em' }}>
            The Future of <br />Beauty is Automated
          </h1>
          
          <div ref={setRef} className="reveal-editorial delay-100" style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              background: 'rgba(0,0,0,0.03)', 
              padding: '8px 8px 8px 24px', 
              borderRadius: '100px', 
              width: '400px',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <input 
                type="text" 
                placeholder="Subscribe to our updates" 
                style={{ background: 'transparent', border: 'none', flex: 1, fontSize: '14px', outline: 'none' }} 
              />
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--text-primary)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyCenter: 'center', cursor: 'pointer' }}>
                <ArrowRight size={18} style={{ margin: '0 auto' }} />
              </button>
            </div>
          </div>
        </div>

        {/* Central Image & Orbit */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '500px', display: 'flex', justifyContent: 'center' }}>
           {/* Ellipse Outline */}
           <div style={{ 
             position: 'absolute', 
             top: '50%', 
             left: '50%', 
             transform: 'translate(-50%, -50%)', 
             width: '90%', 
             height: '70%', 
             border: '1px solid rgba(0,0,0,0.05)', 
             borderRadius: '50%',
             zIndex: 1
           }}></div>

           {/* Central Face Image */}
           <div ref={setRef} className="reveal-editorial" style={{ 
             width: '400px', 
             height: '500px', 
             zIndex: 5, 
             position: 'relative',
             borderRadius: '200px 200px 0 0',
             overflow: 'hidden'
           }}>
             <img 
               src="https://images.unsplash.com/photo-1594744803329-e58b31de2177?auto=format&fit=crop&q=80&w=800" 
               alt="AI Beauty" 
               style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
             />
             <div className="scan-line"></div>
           </div>

           {/* Orbiting Features */}
           {features.map((f, i) => (
             <div 
               key={i} 
               className="feature-orbit reveal-editorial" 
               style={{ 
                 ...f.position, 
                 transitionDelay: `${400 + (i * 100)}ms` 
               }}
             >
               <div className="icon-box">{f.icon}</div>
               <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{f.title}</div>
               <div style={{ fontSize: '11px', color: 'var(--text-secondary)', maxWidth: '160px', margin: '0 auto' }}>{f.desc}</div>
             </div>
           ))}
        </div>
      </section>

      <VisionSection />

      {/* Rest of the sections following the same clean style */}
      <section style={{ padding: '160px 0', textAlign: 'center' }}>
         <div className="section-container">
            <h2 style={{ fontSize: '48px', maxWidth: '800px', margin: '0 auto', fontWeight: 300 }}>
              Overlay is an intelligent, personalized makeup experience
            </h2>
         </div>
      </section>

      <style>{`
        em { font-family: var(--font-headline); font-style: italic; color: var(--primary-sage); }
      `}</style>
    </div>
  );
};

export default Home;
