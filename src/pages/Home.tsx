import React from 'react';
import Gallery from '../components/Gallery';
import { useIntersectionObserver } from '../hooks/useAnimation';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const setRef = useIntersectionObserver();

  return (
    <div className="award-home">
      {/* Editorial Hero */}
      <section className="section-container" style={{ paddingTop: '220px', paddingBottom: '160px' }}>
        <div className="grid-editorial">
          <div className="asym-1">
            <h4 ref={setRef} className="reveal-editorial" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '32px', color: 'var(--primary-sage)' }}>
              Mount Gambier, South Australia
            </h4>
            <h1 ref={setRef} className="reveal-editorial delay-100" style={{ fontSize: '110px', marginBottom: '48px', fontWeight: 300 }}>
              The Art of <br /><em>Restoration.</em>
            </h1>
            <p ref={setRef} className="reveal-editorial delay-200" style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '400px', marginBottom: '48px', lineHeight: 1.8 }}>
              A sanctuary where architectural precision meets organic care. We redefine the beauty experience through silence and artistry.
            </p>
            <div ref={setRef} className="reveal-editorial delay-300">
              <Link to="/routine" className="btn-luxury" style={{ textDecoration: 'none' }}>Begin Experience</Link>
            </div>
          </div>
          
          <div className="asym-2">
            <div 
              ref={setRef} 
              className="reveal-editorial" 
              style={{ 
                width: '100%', 
                height: '600px', 
                backgroundColor: 'var(--secondary-cream)',
                backgroundImage: 'url(https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(0.2)'
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ backgroundColor: 'var(--secondary-cream)', padding: '160px 0' }}>
        <div className="section-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 ref={setRef} className="reveal-editorial" style={{ fontSize: '56px', marginBottom: '40px' }}>Our Philosophy</h2>
            <p ref={setRef} className="reveal-editorial delay-100" style={{ fontSize: '24px', lineHeight: 1.6, color: 'var(--primary-sage)', fontStyle: 'italic' }}>
              "True beauty is an act of presence. At Mount Gambier Nails & Spa, we create the space for you to return to yourself."
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Service Grid */}
      <section style={{ padding: '160px 0' }}>
        <div className="section-container">
          <div className="grid-editorial" style={{ marginBottom: '100px' }}>
            <div style={{ gridColumn: '1 / span 4' }}>
              <h2 ref={setRef} className="reveal-editorial" style={{ fontSize: '48px' }}>Curated Treatments</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '80px' }}>
            {[
              { 
                label: '01', 
                title: 'Technical Artistry', 
                desc: 'SNS, Acrylics, and Hand-painted designs that reflect your individual architecture.',
                img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400' 
              },
              { 
                label: '02', 
                title: 'Dermal Therapy', 
                desc: 'Rejuvenating facials using organic compounds and advanced skin technology.',
                img: 'https://images.unsplash.com/photo-1570172619996-23b2ed125994?auto=format&fit=crop&q=80&w=400'
              },
              { 
                label: '03', 
                title: 'Sensory Pedicures', 
                desc: 'Complete immersion therapy involving heat, pressure, and curated botanical oils.',
                img: 'https://images.unsplash.com/photo-1519415510236-85592ac59c97?auto=format&fit=crop&q=80&w=400'
              }
            ].map((s, i) => (
              <div key={i} ref={setRef} className="reveal-editorial hover-lift" style={{ transitionDelay: `${i * 200}ms`, padding: '24px', margin: '-24px', borderRadius: '24px', transition: 'all 0.6s var(--ease-out-expo)' }}>
                <div style={{ width: '100%', aspectRatio: '1/1', marginBottom: '32px', overflow: 'hidden', borderRadius: '8px' }}>
                   <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.5s var(--ease-out-expo)' }} className="editorial-img" />
                </div>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', marginBottom: '16px', color: 'var(--accent-gold)', fontWeight: 600 }}>{s.label}</div>
                <h3 style={{ fontSize: '24px', marginBottom: '16px', letterSpacing: '-0.01em' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      <style>{`
        .editorial-img:hover {
          transform: scale(1.05);
        }
        em {
          font-family: 'Playfair Display';
          font-style: italic;
          color: var(--primary-sage);
        }
      `}</style>
    </div>
  );
};

export default Home;
