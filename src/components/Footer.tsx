import { Link } from 'react-router-dom';
import { FOOTER_COLUMNS } from '../data/landingData';
import logoImg from '../assets/image/logo.png';
import footerBg from '../assets/image/3.jfif';
// import ositLogo from '../assets/image/logo.png'; // reused; swap if OS IT has its own logo


const SOCIALS = [
  { id: 'fb', label: 'Facebook', icon: 'f', href: '#', color: '#1877F2' },
  { id: 'ig', label: 'Instagram', icon: '▶', href: '#', color: '#E4405F' },
  { id: 'li', label: 'LinkedIn', icon: 'in', href: '#', color: '#0A66C2' },
  { id: 'yt', label: 'YouTube', icon: '▶', href: '#', color: '#FF0000' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden text-gray-300">
      {/* Top wave / cityscape image */}
      <div className="relative h-44 md:h-56 overflow-hidden">
        <img
          src={footerBg}
          alt="Goldsands Group resort aerial view"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.3) saturate(0.8) hue-rotate(200deg)' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, transparent 0%, #08081a 100%)' }} />
      </div>

      {/* Main footer body */}
      <div style={{ background: '#08081a' }} className="border-t border-navy-900/60">
        <div className="gs-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

            {/* Brand column */}
            <div className="lg:col-span-2 space-y-6">
              <Link to="/" id="footer-logo" className="flex items-center gap-4 group">
                <img
                  src={logoImg}
                  alt="Goldsands Group Logo"
                  className="w-20 h-20 rounded-2xl object-contain bg-white border border-gold-400 shadow-md transition-transform duration-300 group-hover:scale-105"
                  style={{ padding: '6px' }}
                />
                <div className="leading-tight">
                  <p className="font-black text-2xl text-white tracking-tight"
                    style={{ fontFamily: 'Playfair Display,serif' }}>
                    GOLDSANDS
                  </p>
                  <p className="text-xs tracking-[0.25em] uppercase font-bold" style={{ color: '#C9A84C' }}>
                    GROUP
                  </p>
                </div>
              </Link>

              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
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
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                               text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow"
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
              <div key={col.title} className="space-y-6">
                <div>
                  <h4 className="text-white font-extrabold text-sm tracking-wider uppercase">{col.title}</h4>
                  <div className="w-8 h-[2px] mt-2 rounded-full" style={{ background: '#C9A84C' }} />
                </div>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 text-sm hover:text-gold-400 transition-colors duration-200
                                   flex items-center gap-1.5 group"
                      >
                        <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-xs text-gold-400">
                          ▶
                        </span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-16 pt-8 border-t" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Language toggle */}
              {/* <div className="flex items-center gap-2">
                <button id="footer-lang-en"
                  className="px-4 py-1.5 rounded-full text-xs font-bold text-white border border-white/20
                                   hover:border-gold-400 hover:text-gold-400 transition-all duration-200">
                  English
                </button>
                <button id="footer-lang-bn"
                  className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 shadow"
                  style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)', color: '#08081a' }}>
                  বাংলা
                </button>
              </div> */}
              <div className="py-5 px-6 flex flex-col sm:flex-row items-center justify-center gap-3 lg:text-right border-t lg:border-none border-navy-950/40">
                <span className="text-gray-500 text-xs font-medium tracking-wide">Prepared by</span>
                <div className="flex items-center gap-3">
                  {/* <img
                    src={ositLogo}
                    alt="OS IT Solutions Ltd"
                    className="w-10 h-10 rounded-full object-contain bg-white border border-gold-400/80 shadow"
                    style={{ padding: '2.5px' }}
                  /> */}
                  <span className="text-white text-sm font-black tracking-wide"
                    style={{
                      background: 'linear-gradient(135deg,#C9A84C,#fde68a)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                    OS IT Solutions Ltd
                  </span>
                </div>
              </div>


              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-gray-500 text-xs">&copy; {year} Goldsands Group. All rights reserved.</span>
                <span className="hidden sm:inline text-gray-700">|</span>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">Privacy Policy</a>
                  <span className="text-gray-700">|</span>
                  <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>

          {/* 
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-xs font-semibold">
              Powered by <span className="text-gold-400 font-bold hover:underline cursor-pointer">NETBRIDGE LTD</span>
            </p>
          </div> */}
        </div>
      </div>

      {/* ── Prepared by OS IT Solutions Ltd ─────────────────────────────── */}

    </footer>
  );
};

export default Footer;
