import React from 'react';
import SocialProof from '../components/SocialProof';
import Gallery from '../components/Gallery';
import { useIntersectionObserver } from '../hooks/useAnimation';
import { Sparkles, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const setRef = useIntersectionObserver();

  return (
    <>
      {/* Hero Section */}
      <section className="hero section-container" style={{ textAlign: 'center', paddingTop: '160px', paddingBottom: '120px' }}>
        <div ref={setRef} className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
          <Star size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
          <span style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary-sage)' }}>
            Premier Beauty Sanctuary in Mount Gambier
          </span>
          <Star size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
        </div>

        <h1 ref={setRef} className="reveal delay-100" style={{ fontSize: '72px', maxWidth: '900px', margin: '0 auto 40px', lineHeight: 1.1 }}>
          Artistry in Every Detail. Comfort in Every Moment.
        </h1>
        
        <p ref={setRef} className="reveal delay-200" style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 48px' }}>
          Experience the finest nail artistry and skin therapy at Mount Gambier Marketplace. From custom nail designs to rejuvenating spa treatments.
        </p>

        <div ref={setRef} className="reveal delay-300" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '80px' }}>
          <Link to="/routine" className="btn btn-primary" style={{ backgroundColor: 'var(--primary-sage)' }}>Book Your Appointment</Link>
          <Link to="/technology" className="btn btn-secondary">Explore Services</Link>
        </div>
        
        <div ref={setRef} className="hero-visual reveal-scale delay-400" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          <div 
            style={{ 
              width: '100%', 
              height: '500px', 
              backgroundColor: 'var(--secondary-cream)', 
              borderRadius: '32px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=1200)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 40px 100px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4))',
              borderRadius: '32px',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '40px',
              color: 'white',
              textAlign: 'left'
            }}>
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Exquisite Nail Artistry</h3>
                <p style={{ opacity: 0.9 }}>Tailored designs for your unique style.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--secondary-cream)' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 ref={setRef} className="reveal" style={{ fontSize: '48px', marginBottom: '24px' }}>Our Signature Treatments</h2>
            <p ref={setRef} className="reveal delay-100" style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>Premium care for your nails, skin, and soul.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { title: 'SNS & Acrylics', desc: 'Long-lasting strength and flawless finish with custom shaping.' },
              { title: 'Spa Pedicures', desc: 'Relaxing foot therapy including exfoliation and massage.' },
              { title: 'Luxury Facials', desc: 'Deep cleansing and rejuvenation for a radiant local glow.' }
            ].map((service, i) => (
              <div key={i} ref={setRef} className={`glass-card reveal-scale delay-${i * 100}`} style={{ padding: '40px', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--primary-sage)' }}>
                  <Sparkles size={24} />
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialProof />
      <Gallery />

      {/* Trust Quote */}
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="section-container">
          <Heart size={48} color="var(--primary-sage)" style={{ marginBottom: '32px' }} />
          <h2 ref={setRef} className="reveal" style={{ fontSize: '40px', maxWidth: '800px', margin: '0 auto', fontStyle: 'italic' }}>
            "We believe that beauty is not just about how you look, but how you feel. Our mission is to provide every client with a moment of peace and a touch of perfection."
          </h2>
        </div>
      </section>
    </>
  );
};

export default Home;
