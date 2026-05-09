import React from 'react';
import Gallery from '../components/Gallery';
import { AnimatedTestimonials } from '../components/AnimatedTestimonials';
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
    <div className="reviews-page" style={{ paddingTop: '160px' }}>
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
      <section style={{ backgroundColor: 'var(--secondary-cream)', padding: '100px 0', marginTop: '40px' }}>
        <div className="section-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center', gap: '40px' }}>
          {[
            { value: '4.2', label: 'Star Rating' },
            { value: '5k+', label: 'Happy Clients' },
            { value: '10+', label: 'Expert Staff' },
            { value: '100%', label: 'Hygiene Focus' }
          ].map((stat, i) => (
            <div key={i} ref={setRef} className="reveal">
              <div style={{ fontSize: '48px', fontWeight: 600, color: 'var(--primary-sage)', marginBottom: '8px', fontFamily: 'var(--font-headline)' }}>{stat.value}</div>
              <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Gallery />
    </div>
  );
};

export default Community;
