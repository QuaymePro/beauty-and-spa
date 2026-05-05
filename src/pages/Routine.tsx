import React, { useState } from 'react';
import { ArrowRight, Sparkles, Scissors, Smile, Calendar, CheckCircle } from 'lucide-react';

const Routine: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    { title: 'Select Service', description: 'What treatment would you like today?', icon: <Scissors /> },
    { title: 'Choose Artist', description: 'Prefer a specific team member?', icon: <Smile /> },
    { title: 'Date & Time', description: 'When should we expect you?', icon: <Calendar /> },
    { title: 'Confirmation', description: 'Almost there! Review your booking.', icon: <CheckCircle /> }
  ];

  return (
    <div className="booking-page" style={{ paddingTop: '100px' }}>
      <section className="section-container" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '56px', marginBottom: '16px' }}>Reserve Your Moment</h1>
        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Secure your appointment at Mount Gambier's favorite nails and spa sanctuary.
        </p>
      </section>
      
      <section style={{ padding: '60px 0' }}>
        <div className="section-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div 
            style={{ 
              aspectRatio: '1/1', 
              background: 'var(--secondary-cream)',
              borderRadius: '40px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800)',
              backgroundSize: 'cover',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div className="glass-card" style={{ position: 'absolute', top: '10%', left: '10%', padding: '24px', borderRadius: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>Expert Care</h3>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Quality products only.</p>
            </div>
          </div>

          <div>
            <div className="glass-card" style={{ padding: '48px', position: 'relative' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      height: '4px', 
                      flex: 1, 
                      backgroundColor: i + 1 <= step ? 'var(--primary-sage)' : 'rgba(0,0,0,0.05)',
                      borderRadius: '2px',
                      transition: 'background-color 0.3s ease'
                    }} 
                  />
                ))}
              </div>

              <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '32px' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  backgroundColor: 'var(--secondary-cream)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--primary-sage)'
                }}>
                  {steps[step - 1].icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '24px' }}>{steps[step - 1].title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{steps[step - 1].description}</p>
                </div>
              </div>

              <div style={{ minHeight: '120px', marginBottom: '40px' }}>
                {step === 1 && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {['Full Set Acrylic', 'SNS Powder', 'Spa Pedicure', 'Facial'].map(s => (
                      <button key={s} style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'white', cursor: 'pointer', textAlign: 'left', fontWeight: 500 }}>{s}</button>
                    ))}
                  </div>
                )}
                {step === 2 && <p style={{ color: 'var(--text-secondary)' }}>Loading available team members...</p>}
                {step === 3 && <p style={{ color: 'var(--text-secondary)' }}>Opening calendar for Shop T18...</p>}
                {step === 4 && <p style={{ color: 'var(--text-secondary)' }}>Reviewing your Mount Gambier Marketplace booking...</p>}
              </div>

              <button 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'space-between', backgroundColor: 'var(--primary-sage)' }}
                onClick={() => setStep(step < totalSteps ? step + 1 : 1)}
              >
                <span>{step === totalSteps ? 'Confirm Booking' : 'Next Step'}</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="glass-card" style={{ padding: '64px', borderRadius: '40px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Prefer to call?</h2>
          <p style={{ marginBottom: '40px', color: 'var(--text-secondary)' }}>Speak directly with our team at the Marketplace.</p>
          <a href="tel:+61401653638" className="btn btn-secondary" style={{ color: 'var(--primary-sage)', borderColor: 'var(--primary-sage)' }}>+61 401 653 638</a>
        </div>
      </section>
    </div>
  );
};

export default Routine;
