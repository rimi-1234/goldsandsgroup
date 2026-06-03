import { Link } from 'react-router-dom';
import { FOOTER_COLUMNS } from '../data/landingData';

const SOCIALS = [
  { id: 'fb',  label: 'Facebook',  icon: 'f',  href: '#', color: '#1877F2' },
  { id: 'ig',  label: 'Instagram', icon: '▶',  href: '#', color: '#E4405F' },
  { id: 'li',  label: 'LinkedIn',  icon: 'in', href: '#', color: '#0A66C2' },
  { id: 'yt',  label: 'YouTube',   icon: '▶',  href: '#', color: '#FF0000' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Top wave / cityscape image */}
      <div className="relative h-44 md:h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80"
          alt="City skyline footer"
          className="w-full h-full object-cover object-bottom"
          style={{ filter: 'brightness(0.4) saturate(0.7) hue-rotate(200deg)' }}
        />
        <div className="absolute inset-0"
             style={{ background: 'linear-gradient(180deg, transparent 20%, #0D0D2B 100%)' }} />
      </div>

      {/* Main footer body */}
      <div style={{ background: '#0D0D2B' }}>
        <div className="gs-container py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link to="/" id="footer-logo" className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-black"
                     style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)' }}>G</div>
                <div>
                  <p className="font-black text-xl text-white"
                     style={{ fontFamily: 'Playfair Display,serif' }}>GOLDSANDS</p>
                  <p className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: '#C9A84C' }}>GROUP</p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                Bangladesh's premier hotel development & investment company — building world-class resorts at
                Cox's Bazar, Kuakata, and along the Padma riverside.
              </p>

              {/* Social icons */}
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    id={`footer-social-${s.id}`}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold
                               text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    style={{ background: `${s.color}22`, border: `1px solid ${s.color}44` }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = s.color; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${s.color}22`; }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-bold text-sm mb-5 tracking-wide">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 text-sm hover:text-gold-400 transition-colors duration-200
                                   flex items-center gap-1 group"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">›</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Language toggle */}
              <div className="flex items-center gap-2">
                <button id="footer-lang-en"
                        className="px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-white/30
                                   hover:border-gold-400 hover:text-gold-400 transition-all">
                  English
                </button>
                <button id="footer-lang-bn"
                        className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
                        style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)', color: '#0D0D1A' }}>
                  বাংলা
                </button>
              </div>

              <p className="text-gray-500 text-xs text-center">
                © {year} Goldsands Group. All rights reserved.
              </p>

              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">Privacy Policy</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">Terms</a>
              </div>
            </div>
          </div>

          {/* Powered by */}
          <div className="mt-4 text-center">
            <p className="text-gray-600 text-xs">
              Powered by <span className="text-gold-400 font-semibold">NETBRIDGE LTD</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
