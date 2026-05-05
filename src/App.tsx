import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './styles/global.css';
import MeshGradient from './components/MeshGradient';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Routine from './pages/Routine';
import Community from './pages/Community';
import { useScrollProgress } from './hooks/useAnimation';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar: React.FC = () => {
  return (
    <header className="header section-container" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '24px', 
      position: 'fixed', 
      top: 0, 
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%', 
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.01)',
      backdropFilter: 'blur(10px)'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '24px', fontWeight: 600, fontFamily: 'var(--font-headline)' }}>
        Overlay
      </Link>
      
      <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <Link to="/technology" className="nav-link">Technology</Link>
        <Link to="/community" className="nav-link">Community</Link>
        <Link to="/routine" className="btn btn-primary" style={{ padding: '10px 24px' }}>Get Started</Link>
      </nav>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '120px 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="section-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>Get started with Overlay today</h2>
          <div style={{ display: 'flex', gap: '24px', color: 'var(--text-secondary)' }}>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>TikTok</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '24px', fontWeight: 500, marginBottom: '8px' }}>hello@overlay.com</p>
          <p style={{ color: 'var(--text-secondary)' }}>Based in SF & NY</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <div className="scroll-progress" style={{ width: `${progress}%` }}></div>
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

        <style>{`
          .nav-link {
            text-decoration: none;
            color: var(--text-secondary);
            font-weight: 500;
            font-size: 14px;
            transition: color 0.2s ease;
          }
          .nav-link:hover {
            color: var(--text-primary);
          }
          @media (max-width: 768px) {
            h1 { font-size: 48px !important; }
            .section-container { padding: 0 16px !important; }
            .header { 
              flex-direction: column !important; 
              gap: 20px !important; 
              position: relative !important;
              transform: none !important;
              left: 0 !important;
            }
            nav { gap: 16px !important; }
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            div[style*="grid-template-columns: repeat(4, 1fr)"],
            div[style*="grid-template-columns: repeat(3, 1fr)"] {
              grid-template-columns: 1fr !important;
            }
            footer div[style*="justify-content: space-between"] {
              flex-direction: column !important;
              gap: 40px !important;
              text-align: center !important;
            }
            footer div[style*="text-align: right"] {
              text-align: center !important;
            }
          }
        `}</style>
      </div>
    </Router>
  );
};

export default App;
