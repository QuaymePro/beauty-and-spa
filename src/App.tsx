import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './styles/global.css';
import './styles/app-shell.css';
import MeshGradient from './components/MeshGradient';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Routine from './pages/Routine';
import Community from './pages/Community';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar: React.FC = () => {
  return (
    <header className="header section-container">
      <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'var(--font-headline)', letterSpacing: '0.05em' }}>MOUNT GAMBIER</span>
        <span style={{ fontSize: '14px', fontWeight: 400, color: 'var(--primary-sage)', letterSpacing: '0.2em' }}>NAILS & SPA</span>
      </Link>
      
      <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <Link to="/technology" className="nav-link">Services</Link>
        <Link to="/community" className="nav-link">Reviews</Link>
        <Link to="/routine" className="btn btn-primary" style={{ padding: '10px 24px', backgroundColor: 'var(--primary-sage)' }}>Book Online</Link>
      </nav>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--secondary-cream)' }}>
      <div className="section-container">
        <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px', paddingBottom: '60px' }}>
          <div>
            <h3 style={{ fontSize: '24px', marginBottom: '24px', fontFamily: 'var(--font-headline)' }}>Mount Gambier Nails & Spa</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
              Your sanctuary for professional nail care and skin therapy in the heart of Mount Gambier. Experience luxury, precision, and care.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'var(--primary-sage)' }}>Instagram</a>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>Visit Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--primary-sage)', flexShrink: 0 }} />
                <span>Shop T18, Mount Gambier Marketplace,<br />182-210 Penola Rd, Mount Gambier SA 5290</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--primary-sage)' }} />
                <span>+61 401 653 638</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Clock size={18} style={{ color: 'var(--primary-sage)' }} />
                <span>Late Night Thursday till 7:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>Opening Hours</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Mon - Wed</span><span>9:00 AM - 5:00 PM</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-primary)', fontWeight: 500 }}><span>Thursday</span><span>9:00 AM - 7:00 PM</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Fri - Sat</span><span>9:00 AM - 5:00 PM</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '32px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '12px' }}>
          © {new Date().getFullYear()} Mount Gambier Nails & Spa. All rights reserved.
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
