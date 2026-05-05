import React from 'react';
import { useIntersectionObserver } from '../hooks/useAnimation';

const Technology: React.FC = () => {
  const setRef = useIntersectionObserver();

  const serviceCategories = [
    {
      title: 'Nail Enhancements',
      services: [
        { name: 'Full Set Acrylic', price: '60' },
        { name: 'SNS Dipping Powder', price: '50' },
        { name: 'Gel / Shellac Polish', price: '35' },
        { name: 'Custom Artistry', price: 'Quotes' }
      ]
    },
    {
      title: 'Dermal Therapy',
      services: [
        { name: 'Deep Cleansing Facial', price: '85' },
        { name: 'Anti-Aging Treatment', price: '110' },
        { name: 'Dermaplaning', price: '75' },
        { name: 'Chemical Peel', price: '120' }
      ]
    },
    {
      title: 'Pedicure Rituals',
      services: [
        { name: 'Signature Spa', price: '45' },
        { name: 'Deluxe Jelly', price: '65' },
        { name: 'Paraffin Treatment', price: '15' }
      ]
    }
  ];

  return (
    <div className="award-services" style={{ paddingTop: '220px' }}>
      <section className="section-container">
        <div className="grid-editorial" style={{ marginBottom: '120px' }}>
          <div style={{ gridColumn: '2 / span 6' }}>
            <h4 ref={setRef} className="reveal-editorial" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--accent-gold)' }}>
              Curated Menu
            </h4>
            <h1 ref={setRef} className="reveal-editorial delay-100" style={{ fontSize: '80px', marginBottom: '40px' }}>
              The Service <br /><em>Registry.</em>
            </h1>
          </div>
        </div>

        {serviceCategories.map((cat, i) => (
          <div key={i} className="grid-editorial" style={{ marginBottom: '160px' }}>
             <div style={{ gridColumn: i % 2 === 0 ? '1 / span 4' : '8 / span 4' }}>
                <h2 ref={setRef} className="reveal-editorial" style={{ fontSize: '40px', marginBottom: '48px' }}>{cat.title}</h2>
                <div ref={setRef} className="reveal-editorial delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {cat.services.map((s, j) => (
                    <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '12px' }}>
                      <span style={{ fontSize: '18px', fontWeight: 300 }}>{s.name}</span>
                      <span style={{ fontSize: '14px', letterSpacing: '0.1em', color: 'var(--primary-sage)' }}>${s.price}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div style={{ 
               gridColumn: i % 2 === 0 ? '6 / span 6' : '1 / span 6', 
               gridRow: '1',
               height: '500px', 
               backgroundColor: 'var(--secondary-cream)',
               backgroundImage: `url(https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800&seed=${i})`,
               backgroundSize: 'cover'
             }}></div>
          </div>
        ))}
      </section>
      <style>{`
        em { font-style: italic; color: var(--primary-sage); }
      `}</style>
    </div>
  );
};

export default Technology;
