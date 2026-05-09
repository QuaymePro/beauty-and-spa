import React, { useState } from 'react';
import { ArrowRight, Sparkles, Scissors, Smile, Calendar, CheckCircle } from 'lucide-react';

const Routine: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '' });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const totalSteps = 5;

  const steps = [
    { title: 'Select Service', description: 'What treatment would you like today?', icon: <Scissors /> },
    { title: 'Choose Artist', description: 'Prefer a specific team member?', icon: <Smile /> },
    { title: 'Date & Time', description: 'When should we expect you?', icon: <Calendar /> },
    { title: 'Contact Info', description: 'How can we reach you?', icon: <Sparkles /> },
    { title: 'Confirmation', description: 'Almost there! Review your booking.', icon: <CheckCircle /> }
  ];

  const services = ['Full Set Acrylic', 'SNS Powder', 'Spa Pedicure', 'Facial'];
  const artists = ['Any Artist', 'Sarah', 'Michelle', 'Jessica'];
  const times = ['9:00 AM', '10:30 AM', '1:00 PM', '3:30 PM'];

  const canProceed = () => {
    if (step === 1) return selectedService !== null;
    if (step === 2) return selectedArtist !== null;
    if (step === 3) return selectedTime !== null;
    if (step === 4) return contactInfo.name.trim() !== '' && (contactInfo.phone.trim() !== '' || contactInfo.email.trim() !== '');
    return true;
  };

  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleNext = async () => {
    if (step === totalSteps) {
      setIsSubmitting(true);
      setError(null);
      
      try {
        const response = await fetch('http://localhost:8080/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service: selectedService,
            artist: selectedArtist,
            booking_time: selectedTime,
            customer_name: contactInfo.name,
            customer_phone: contactInfo.phone,
            customer_email: contactInfo.email,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to create booking. Please try again or call us.');
        }

        const data = await response.json();
        setConfirmedBooking(data);
        setIsConfirmed(true);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setStep(step + 1);
    }
  };

  if (isConfirmed && confirmedBooking) {
    const reference = confirmedBooking.reference;
    
    const handlePrint = () => {
      window.print();
    };

    return (
      <div className="booking-page" style={{ paddingTop: '100px' }}>
        <section className="section-container" style={{ textAlign: 'center', padding: '80px 0' }}>
          <div className="glass-card no-print step-enter" style={{ padding: '64px', borderRadius: '40px', maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(90, 107, 93, 0.1)', 
              color: 'var(--primary-sage)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 32px'
            }}>
              <svg width="40" height="40" viewBox="0 0 52 52">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" style={{
                  strokeDasharray: '48',
                  strokeDashoffset: '48',
                  strokeWidth: '3',
                  stroke: 'var(--primary-sage)',
                  animation: 'stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards'
                }}/>
              </svg>
            </div>
            <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Booking Confirmed</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '48px' }}>
              Thank you, {contactInfo.name.split(' ')[0]}! Your appointment is set. We've sent details to your {contactInfo.phone ? 'phone' : 'email'}.
            </p>
            
            <div style={{ 
              textAlign: 'left', 
              padding: '32px', 
              backgroundColor: 'var(--secondary-cream)', 
              borderRadius: '24px', 
              marginBottom: '40px',
              border: '1px solid rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Reference</span>
                  <span style={{ fontWeight: 600 }}>#{reference}</span>
                </div>
                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '16px' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Service</span>
                  <span style={{ fontWeight: 600 }}>{selectedService}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Artist</span>
                  <span style={{ fontWeight: 600 }}>{selectedArtist}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Time</span>
                  <span style={{ fontWeight: 600 }}>{selectedTime}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                className="btn btn-secondary" 
                style={{ flex: 1, borderColor: 'var(--primary-sage)', color: 'var(--primary-sage)', transition: 'all 0.3s var(--ease-out-expo)' }}
                onClick={handlePrint}
              >
                Download Receipt
              </button>
              <button 
                className="btn btn-primary" 
                style={{ flex: 1, backgroundColor: 'var(--primary-sage)' }}
                onClick={() => {
                  setIsConfirmed(false);
                  setStep(1);
                  setSelectedService(null);
                  setSelectedArtist(null);
                  setSelectedTime(null);
                  setContactInfo({ name: '', phone: '', email: '' });
                  setConfirmedBooking(null);
                }}
              >
                Done
              </button>
            </div>
          </div>
          {/* ... Rest of printable receipt ... */}

          {/* Printable Receipt */}
          <div className="print-only" style={{ padding: '40px', fontFamily: 'serif' }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid #000', paddingBottom: '20px', marginBottom: '20px' }}>
              <h1 style={{ fontSize: '24px', textTransform: 'uppercase', letterSpacing: '2px' }}>Mount Gambier Nails & Spa</h1>
              <p>Shop T18, Mount Gambier Marketplace</p>
              <p>+61 401 653 638</p>
            </div>
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '18px', marginBottom: '20px', textAlign: 'center' }}>BOOKING RECEIPT</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Reference:</span>
                <span style={{ fontWeight: 'bold' }}>#{reference}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Customer:</span>
                <span style={{ fontWeight: 'bold' }}>{contactInfo.name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Date:</span>
                <span style={{ fontWeight: 'bold' }}>{new Date().toLocaleDateString()}</span>
              </div>
              <div style={{ borderBottom: '1px dashed #ccc', margin: '20px 0' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Service:</span>
                <span style={{ fontWeight: 'bold' }}>{selectedService}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Artist:</span>
                <span style={{ fontWeight: 'bold' }}>{selectedArtist}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Scheduled Time:</span>
                <span style={{ fontWeight: 'bold' }}>{selectedTime}</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '60px' }}>
              <p>Thank you for choosing Mount Gambier Nails & Spa.</p>
              <p>Please arrive 5 minutes before your scheduled time.</p>
            </div>
          </div>
        </section>

        <style>{`
          @media screen { .print-only { display: none; } }
          @media print {
            .no-print, .header, .footer, .mesh-gradient-container { display: none !important; }
            .print-only { display: block !important; }
            body { background: white !important; }
            .booking-page { padding-top: 0 !important; }
          }
        `}</style>
      </div>
    );
  }

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

              <div key={step} className="step-enter" style={{ minHeight: '160px', marginBottom: '40px' }}>
                {step === 1 && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {services.map(s => (
                      <button 
                        key={s} 
                        onClick={() => setSelectedService(s)}
                        style={{ 
                          padding: '16px', 
                          borderRadius: '12px', 
                          border: selectedService === s ? '2px solid var(--primary-sage)' : '1px solid rgba(0,0,0,0.1)', 
                          background: selectedService === s ? 'rgba(122, 140, 122, 0.05)' : 'white', 
                          cursor: 'pointer', 
                          textAlign: 'left', 
                          fontWeight: 500,
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
                {step === 2 && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {artists.map(a => (
                      <button 
                        key={a} 
                        onClick={() => setSelectedArtist(a)}
                        style={{ 
                          padding: '16px', 
                          borderRadius: '12px', 
                          border: selectedArtist === a ? '2px solid var(--primary-sage)' : '1px solid rgba(0,0,0,0.1)', 
                          background: selectedArtist === a ? 'rgba(122, 140, 122, 0.05)' : 'white', 
                          cursor: 'pointer', 
                          textAlign: 'left', 
                          fontWeight: 500,
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                )}
                {step === 3 && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {times.map(t => (
                      <button 
                        key={t} 
                        onClick={() => setSelectedTime(t)}
                        style={{ 
                          padding: '16px', 
                          borderRadius: '12px', 
                          border: selectedTime === t ? '2px solid var(--primary-sage)' : '1px solid rgba(0,0,0,0.1)', 
                          background: selectedTime === t ? 'rgba(122, 140, 122, 0.05)' : 'white', 
                          cursor: 'pointer', 
                          textAlign: 'left', 
                          fontWeight: 500,
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
                {step === 4 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                      style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', fontSize: '16px' }}
                    />
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                      style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', fontSize: '16px' }}
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address (Optional)" 
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                      style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', fontSize: '16px' }}
                    />
                  </div>
                )}
                {step === 5 && (
                  <div style={{ padding: '24px', backgroundColor: 'var(--secondary-cream)', borderRadius: '16px' }}>
                    <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Service</span>
                      <span style={{ fontWeight: 600 }}>{selectedService}</span>
                    </div>
                    <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Artist</span>
                      <span style={{ fontWeight: 600 }}>{selectedArtist}</span>
                    </div>
                    <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Time</span>
                      <span style={{ fontWeight: 600 }}>{selectedTime}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>For</span>
                      <span style={{ fontWeight: 600 }}>{contactInfo.name}</span>
                    </div>
                  </div>
                )}
              </div>

              <button 
                className="btn btn-primary" 
                style={{ 
                  width: '100%', 
                  justifyContent: 'space-between', 
                  backgroundColor: 'var(--primary-sage)',
                  opacity: canProceed() && !isSubmitting ? 1 : 0.5,
                  cursor: canProceed() && !isSubmitting ? 'pointer' : 'not-allowed'
                }}
                disabled={!canProceed() || isSubmitting}
                onClick={handleNext}
              >
                <span>{isSubmitting ? 'Processing...' : step === totalSteps ? 'Confirm Booking' : 'Next Step'}</span>
                {!isSubmitting && <ArrowRight size={20} />}
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
