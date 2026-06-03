import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/landingData';

const Navbar: React.FC = () => {
  const [scrolled,    setScrolled]    = useState<boolean>(false);
  const [menuOpen,    setMenuOpen]    = useState<boolean>(false);
  const [activeHash,  setActiveHash]  = useState<string>('');
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setActiveHash(location.hash);
    setMenuOpen(false);
  }, [location]);

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'}`}
    >
      <div className="gs-container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" id="nav-logo">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl font-black shadow-gold transition-transform duration-300 group-hover:scale-105"
               style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)' }}>
            G
          </div>
          <div className="leading-tight">
            <p className={`font-black text-lg tracking-tight transition-colors duration-300
              ${scrolled ? 'text-navy-500' : 'text-white'}`}
               style={{ fontFamily: 'Playfair Display, serif' }}>
              GOLDSANDS
            </p>
            <p className={`text-[10px] tracking-[0.15em] uppercase font-medium transition-colors duration-300
              ${scrolled ? 'text-gold-500' : 'text-gold-300'}`}>
              GROUP
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${scrolled
                    ? 'text-gray-700 hover:text-navy-500 hover:bg-navy-50'
                    : 'text-white/90 hover:text-white hover:bg-white/15'}
                  ${activeHash === link.href ? 'font-semibold' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
             id="nav-book-btn" className="btn-gold text-sm font-bold px-6 py-2.5">
            BOOK NOW →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="nav-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className={`lg:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors duration-300
            ${scrolled ? 'text-gray-700' : 'text-white'}`}
        >
          <span className={`block h-0.5 w-6 transition-all duration-300 bg-current ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all duration-300 bg-current ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all duration-300 bg-current ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out
        ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/98 backdrop-blur-md border-t border-gold-200 shadow-lg">
          <div className="gs-container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }
                }}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-navy-50 hover:text-navy-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
               className="btn-gold text-center mt-2">
              BOOK NOW →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
