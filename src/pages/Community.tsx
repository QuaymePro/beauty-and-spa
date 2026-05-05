import React from 'react';
import Gallery from '../components/Gallery';
import SocialProof from '../components/SocialProof';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="community-page" style={{ paddingTop: '160px' }}>
      <section className="section-container" style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ fontSize: '64px', marginBottom: '24px' }}>Built by Us, Perfected by You</h1>
        <p style={{ fontSize: '24px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
          Join a global community of creators redefining beauty through technology and collaboration.
        </p>
      </section>

      <SocialProof />

      <section className="section-container" style={{ padding: '120px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card" style={{ padding: '24px' }}>
              <div style={{ aspectRatio: '1/1', background: 'var(--lavender-gradient)', borderRadius: '16px', marginBottom: '20px' }}></div>
              <p style={{ fontStyle: 'italic', marginBottom: '20px', color: 'var(--text-primary)' }}>
                "Overlay has completely changed how I think about my morning routine. The precision is unmatched."
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-secondary)' }}>
                <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>@creator_{i}</span>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Heart size={18} />
                  <MessageCircle size={18} />
                  <Share2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Gallery />
    </div>
  );
};

export default Community;
