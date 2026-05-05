import React from 'react';
import RoutineBuilder from '../components/RoutineBuilder';

const Routine: React.FC = () => {
  return (
    <div className="routine-page" style={{ paddingTop: '100px' }}>
      <section className="section-container" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '56px', marginBottom: '16px' }}>Your Personalized Path</h1>
        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Take the first step towards an automated beauty routine tailored specifically to your unique skin profile.
        </p>
      </section>
      
      <RoutineBuilder />
      
      <section className="section-container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="glass-card" style={{ padding: '64px', borderRadius: '40px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Ready to experience the future?</h2>
          <p style={{ marginBottom: '40px', color: 'var(--text-secondary)' }}>Our beta program is currently open for early adopters in select regions.</p>
          <button className="btn btn-primary">Join the Waitlist</button>
        </div>
      </section>
    </div>
  );
};

export default Routine;
