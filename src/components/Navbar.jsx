import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Advisory', path: '/advisory' },
    { name: 'Academy', path: '/academy' }
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          AKOIN<span className="logo-accent">.</span>
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <button className="btn-primary">Consultation</button>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
