import React, { useState } from 'react';
import { ArrowRight, Sparkles, User, Palette, Calendar } from 'lucide-react';

const RoutineBuilder: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    { title: 'AI Analysis', description: 'Detecting skin tone and undertones...', icon: <User /> },
    { title: 'Goal Selection', description: 'What look are you aiming for today?', icon: <Palette /> },
    { title: 'Schedule Sync', description: 'Optimizing for your daily routine...', icon: <Calendar /> },
    { title: 'Custom Formula', description: 'Generating your unique beauty path...', icon: <Sparkles /> }
  ];

  return (
    <section style={{ padding: '120px 0' }}>
      <div className="section-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div 
          className="portrait-visual" 
          style={{ 
            aspectRatio: '3/4', 
            background: 'linear-gradient(135deg, var(--peach-gradient), var(--pink-gradient))',
            borderRadius: '32px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Floating UI elements simulation */}
          <div className="glass-card" style={{ position: 'absolute', top: '20%', right: '-10%', padding: '12px 24px', borderRadius: '100px', animation: 'float 4s infinite ease-in-out' }}>
            98% Accuracy
          </div>
          <div className="glass-card" style={{ position: 'absolute', bottom: '30%', left: '-5%', padding: '12px 24px', borderRadius: '100px', animation: 'float 5s infinite ease-in-out -1s' }}>
            Warm Undertone
          </div>
          <div className="glass-card" style={{ position: 'absolute', top: '50%', right: '5%', padding: '12px 24px', borderRadius: '100px', animation: 'float 6s infinite ease-in-out -2s' }}>
            Hydration: High
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '40px', marginBottom: '24px' }}>
            Build your custom routine in 30 seconds
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '48px' }}>
            Get step-by-step guidance that adapts to your skin, schedule, and skill level.
          </p>

          <div className="glass-card" style={{ padding: '40px', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div 
                  key={i} 
                  style={{ 
                    height: '4px', 
                    flex: 1, 
                    backgroundColor: i + 1 <= step ? 'var(--text-primary)' : 'rgba(0,0,0,0.1)',
                    borderRadius: '2px',
                    transition: 'background-color 0.3s ease'
                  }} 
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                backgroundColor: 'rgba(0,0,0,0.05)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                {steps[step - 1].icon}
              </div>
              <div>
                <h3 style={{ fontSize: '20px' }}>{steps[step - 1].title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{steps[step - 1].description}</p>
              </div>
            </div>

            <button 
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'space-between' }}
              onClick={() => setStep(step < totalSteps ? step + 1 : 1)}
            >
              <span>{step === totalSteps ? 'Complete Routine' : 'Next Step'}</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default RoutineBuilder;
