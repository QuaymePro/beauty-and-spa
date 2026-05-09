import React from 'react';
import Gallery from '../components/Gallery';
import { AnimatedTestimonials } from '../components/AnimatedTestimonials';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { useIntersectionObserver } from '../hooks/useAnimation';
import { Star } from 'lucide-react';

const Community: React.FC = () => {
  const setRef = useIntersectionObserver();

  const testimonials = [
    {
      quote: "Absolutely love my nails! The staff are so creative and the salon is incredibly clean. Best in Mount Gambier.",
      name: "Sarah Miller",
      designation: "Mount Gambier Local",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
    },
    {
      quote: "Great service and lovely atmosphere. My SNS set lasted nearly 4 weeks without lifting. Highly recommend.",
      name: "Jessica Lawson",
      designation: "Beauty Enthusiast",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800"
    },
    {
      quote: "Fantastic experience. The spa pedicure was so relaxing. Will definitely be coming back for a facial next time!",
      name: "Emma Watkins",
      designation: "Wellness Seeker",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
    },
    {
      quote: "Precision and care in every detail. The atmosphere at the Marketplace is unparalleled for a quick escape.",
      name: "Chloe Evans",
      designation: "Regular Client",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="reviews-page">
      <section className="section-container" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div ref={setRef} className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '16px' }}>
          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
        </div>
        <h1 ref={setRef} className="reveal delay-100" style={{ fontSize: '64px', marginBottom: '24px' }}>Voices of Sanctuary</h1>
        <p ref={setRef} className="reveal delay-200" style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Real stories from our community at Mount Gambier Nails & Spa.
        </p>
      </section>

      {/* Animated Testimonials Section */}
      <section>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </section>

      {/* Stats / Proof */}
      <section style={{ backgroundColor: 'var(--secondary-cream)', padding: '120px 0', marginTop: '40px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle decorative elements */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'var(--accent-gold)', opacity: 0.03, filter: 'blur(60px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'var(--primary-sage)', opacity: 0.05, filter: 'blur(80px)' }}></div>

        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { value: 4.2, decimals: 1, suffix: '', label: 'Star Rating', icon: '★' },
              { value: 5, decimals: 0, suffix: 'k+', label: 'Happy Clients', icon: '♡' },
              { value: 10, decimals: 0, suffix: '+', label: 'Expert Staff', icon: '✦' },
              { value: 100, decimals: 0, suffix: '%', label: 'Hygiene Focus', icon: '⚓' }
            ].map((stat, i) => (
              <div key={i} ref={setRef} className="reveal glass-card hover-lift" style={{ 
                padding: '40px 24px', 
                textAlign: 'center', 
                transitionDelay: `${i * 100}ms`,
                border: '1px solid rgba(255,255,255,0.4)',
                background: 'rgba(255,255,255,0.3)',
                borderRadius: '24px'
              }}>
                <div style={{ fontSize: '12px', color: 'var(--accent-gold)', marginBottom: '16px', fontWeight: 600, letterSpacing: '0.1em' }}>{stat.icon}</div>
                <div style={{ fontSize: '56px', fontWeight: 300, color: 'var(--primary-sage)', marginBottom: '8px', fontFamily: 'var(--font-headline)' }}>
                  <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-secondary)', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
    </div>
  );
};

export default Community;
