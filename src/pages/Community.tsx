import React from 'react';
import Gallery from '../components/Gallery';
import { useIntersectionObserver } from '../hooks/useAnimation';
import { Star, MessageCircle, Quote } from 'lucide-react';

const Community: React.FC = () => {
  const setRef = useIntersectionObserver();

  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      comment: 'Absolutely love my nails! The staff are so creative and the salon is incredibly clean. Best in Mount Gambier.',
      date: '2 weeks ago'
    },
    {
      name: 'Jessica L.',
      rating: 4,
      comment: 'Great service and lovely atmosphere. My SNS set lasted nearly 4 weeks without lifting. Highly recommend.',
      date: '1 month ago'
    },
    {
      name: 'Emma W.',
      rating: 5,
      comment: 'Fantastic experience. The spa pedicure was so relaxing. Will definitely be coming back for a facial next time!',
      date: '3 weeks ago'
    }
  ];

  return (
    <div className="reviews-page" style={{ paddingTop: '160px' }}>
      <section className="section-container" style={{ textAlign: 'center', marginBottom: '80px' }}>
        <div ref={setRef} className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '16px' }}>
          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
        </div>
        <h1 ref={setRef} className="reveal delay-100" style={{ fontSize: '64px', marginBottom: '24px' }}>What Our Clients Say</h1>
        <p ref={setRef} className="reveal delay-200" style={{ fontSize: '24px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
          We take pride in our 4.2-star rating and the wonderful community we've built in Mount Gambier.
        </p>
      </section>

      {/* Real Reviews Grid */}
      <section className="section-container" style={{ paddingBottom: '120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {reviews.map((rev, i) => (
            <div key={i} ref={setRef} className={`glass-card reveal-scale delay-${i * 100}`} style={{ padding: '40px', position: 'relative' }}>
              <Quote size={40} color="var(--primary-sage)" style={{ opacity: 0.2, position: 'absolute', top: '24px', left: '24px' }} />
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {Array.from({ length: rev.rating }).map((_, j) => <Star key={j} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
              </div>
              <p style={{ fontSize: '18px', lineHeight: 1.6, marginBottom: '32px', color: 'var(--text-primary)', fontStyle: 'italic' }}>
                "{rev.comment}"
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600 }}>{rev.name}</span>
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Proof */}
      <section style={{ backgroundColor: 'var(--secondary-cream)', padding: '100px 0' }}>
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
