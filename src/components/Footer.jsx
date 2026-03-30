import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Globe, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              AKOIN<span className="logo-accent">.</span>
            </Link>
            <p>Empowering organizations through digital risk intelligence, advisory, and specialized academy training.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Share2 size={20} /></a>
              <a href="#"><MessageCircle size={20} /></a>
              <a href="#"><Mail size={20} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/advisory">Advisory</Link></li>
              <li><Link to="/academy">Academy</Link></li>
              <li><a href="#">Insights</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/advisory">Risk Audits</Link></li>
              <li><Link to="/advisory">Cyber Resilience</Link></li>
              <li><Link to="/advisory">AI Risk</Link></li>
              <li><a href="#">Frameworks</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:akoininfo@gmail.com">akoininfo@gmail.com</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AKOIN Digital Risk Academy & Advisory.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
