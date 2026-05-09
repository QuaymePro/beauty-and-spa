import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './styles/global.css';
import './styles/app-shell.css';
import MeshGradient from './components/MeshGradient';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Routine from './pages/Routine';
import Community from './pages/Community';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <div className="section-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-primary)' }} />
          </div>
          <span style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>Overlay</span>
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <Link to="/technology" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500 }}>Technology</Link>
          <Link to="/community" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500 }}>Community</Link>
          <Link to="/routine" className="btn-luxury" style={{ textDecoration: 'none', padding: '10px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Get in Touch <ArrowRight size={14} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#fcfcfc', borderTop: '1px solid rgba(0,0,0,0.03)', padding: '80px 0' }}>
      <div className="section-container">
        <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px', paddingBottom: '60px' }}>
          <div>
            <h3 style={{ fontSize: '24px', marginBottom: '24px', fontFamily: 'var(--font-headline)' }}>Overlay</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
              The future of beauty is automated. Hardware + AI-powered software designed for the face.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>Visit Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--primary-sage)', flexShrink: 0 }} />
                <span>Mount Gambier SA 5290</span>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)' }}>
              <span>hello@overlay.com</span>
              <span>+61 401 653 638</span>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '12px' }}>
          <span>© {new Date().getFullYear()} Overlay Robots, Inc.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <MeshGradient />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/routine" element={<Routine />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
