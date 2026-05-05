import React from 'react';
import { useIntersectionObserver } from '../hooks/useAnimation';
import { Scissors, Sparkles, Smile, Droplets } from 'lucide-react';

const Technology: React.FC = () => {
  const setRef = useIntersectionObserver();

  const serviceCategories = [
    {
      title: 'Nail Enhancements',
      icon: <Scissors size={32} />,
      services: [
        { name: 'Full Set Acrylic', price: 'From $60' },
        { name: 'SNS Dipping Powder', price: 'From $50' },
        { name: 'Gel / Shellac Polish', price: '$35' },
        { name: 'Nail Art Design', price: 'Quotes available' }
      ]
    },
    {
      title: 'Spa Pedicures',
      icon: <Smile size={32} />,
      services: [
        { name: 'Signature Spa Pedicure', price: '$45' },
        { name: 'Deluxe Jelly Pedicure', price: '$65' },
        { name: 'Express Pedicure', price: '$30' },
        { name: 'Paraffin Wax Treatment', price: '$15' }
      ]
    },
    {
      title: 'Facial Therapy',
      icon: <Sparkles size={32} />,
      services: [
        { name: 'Deep Cleansing Facial', price: '$85' },
        { name: 'Anti-Aging Treatment', price: '$110' },
        { name: 'Acne Solution Facial', price: '$95' },
        { name: 'Dermaplaning', price: '$75' }
      ]
    },
    {
      title: 'Beauty & Waxing',
      icon: <Droplets size={32} />,
      services: [
        { name: 'Eyebrow Sculpting', price: '$20' },
        { name: 'Full Leg Waxing', price: '$45' },
        { name: 'Lash Tinting', price: '$25' },
        { name: 'Eyelash Extensions', price: 'From $90' }
      ]
    }
  ];

  return (
    <div className="services-page" style={{ paddingTop: '160px' }}>
      <section className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 ref={setRef} className="reveal" style={{ fontSize: '64px', marginBottom: '24px' }}>Our Service Menu</h1>
          <p ref={setRef} className="reveal delay-100" style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Professional care for every detail. We use only premium products to ensure the health and beauty of your nails and skin.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '120px' }}>
          {serviceCategories.map((cat, i) => (
            <div key={i} ref={setRef} className={`glass-card reveal-scale delay-${(i % 2) * 200}`} style={{ padding: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
                <div style={{ color: 'var(--primary-sage)' }}>{cat.icon}</div>
                <h2 style={{ fontSize: '28px' }}>{cat.title}</h2>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cat.services.map((service, j) => (
                  <div key={j} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ fontWeight: 500 }}>{service.name}</span>
                    <span style={{ color: 'var(--primary-sage)', fontWeight: 600 }}>{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--primary-sage)', color: 'white', textAlign: 'center' }}>
        <div className="section-container">
          <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>Ready to Pamper Yourself?</h2>
          <p style={{ fontSize: '18px', marginBottom: '40px', opacity: 0.9 }}>Appointments are recommended, but walk-ins are always welcome!</p>
          <a href="/routine" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-sage)' }}>Book Now</a>
        </div>
      </section>
    </div>
  );
};

export default Technology;
