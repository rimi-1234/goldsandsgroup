import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../data/landingData';
import logoImg from '../assets/image/logo.png';

const Navbar: React.FC = () => {
  const [scrolled,    setScrolled]    = useState<boolean>(false);
  const [menuOpen,    setMenuOpen]    = useState<boolean>(false);
  const [activeHash,  setActiveHash]  = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);
  const isScrolledPage = location.pathname === '/about' || location.pathname === '/career';

  useEffect(() => {
    const onScroll = () => {
      if (isScrolledPage) {
        setScrolled(true);
      } else {
        setScrolled(window.scrollY > 60);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname, isScrolledPage]);

  useEffect(() => {
    setActiveHash(location.hash);
    setMenuOpen(false);
  }, [location]);

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  const getHref = (href: string) => {
    if (href.startsWith('#') && location.pathname !== '/') {
      return '/' + href;
    }
    return href;
  };

  return (
    <nav
      ref={navRef}
      id="main-navbar"
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-400 rounded-full
        ${(scrolled || isScrolledPage)
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-1.5 px-6 border border-gray-100'
          : 'bg-white/10 backdrop-blur-md shadow-sm py-2.5 px-6 border border-white/15'}`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" id="nav-logo">
          <img
            src={logoImg}
            alt="Goldsands Group Logo"
            className="w-16 h-16 rounded-full object-contain bg-white shadow-gold border-2 border-gold-300 transition-transform duration-300 group-hover:scale-105"
            style={{ padding: '3.5px' }}
          />
          <div className="leading-tight">
            <p className={`font-black text-xl tracking-tight transition-colors duration-300
              ${(scrolled || isScrolledPage) ? 'text-navy-500' : 'text-white'}`}
               style={{ fontFamily: 'Playfair Display, serif' }}>
              GOLDSANDS
            </p>
            <p className={`text-[11px] tracking-[0.2em] uppercase font-bold transition-colors duration-300
              ${(scrolled || isScrolledPage) ? 'text-gold-500' : 'text-gold-300'}`}>
              GROUP
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href || (location.pathname === '/' && activeHash === link.href);
            return (
              <li key={link.label}>
                <a
                  href={getHref(link.href)}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                    ${(scrolled || isScrolledPage)
                      ? 'text-gray-700 hover:text-navy-500 hover:bg-navy-50'
                      : 'text-white/90 hover:text-white hover:bg-white/15'}
                    ${isActive
                      ? (scrolled || isScrolledPage)
                        ? 'text-navy-600 font-bold bg-navy-50/80 shadow-sm border border-navy-100/50'
                        : 'text-white font-bold bg-white/20 shadow-sm border border-white/25'
                      : 'border border-transparent'}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
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
            ${(scrolled || isScrolledPage) ? 'text-gray-700' : 'text-white'}`}
        >
          <span className={`block h-0.5 w-6 transition-all duration-300 bg-current ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all duration-300 bg-current ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all duration-300 bg-current ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out
        ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/98 backdrop-blur-md border border-gray-100 shadow-lg mt-2 rounded-2xl overflow-hidden">
          <div className="py-4 px-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href || (location.pathname === '/' && activeHash === link.href);
              return (
                <a
                  key={link.label}
                  href={getHref(link.href)}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }
                  }}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors duration-200
                    ${isActive
                      ? 'bg-navy-50 text-navy-600 font-bold'
                      : 'text-gray-700 hover:bg-navy-50 hover:text-navy-600'}`}
                >
                  {link.label}
                </a>
              );
            })}
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
