import logoImg  from '../../assets/image/logo.png';
import img2      from '../../assets/image/6fa3ef6e-c22d-45b6-a859-b2108f8af13c.jfif';   // Who We Are main
import img3      from '../../assets/image/3.jfif';   // street-level facade — Mission
import img4      from '../../assets/image/4.jfif';   // aerial top-down resort — Vision

const SISTER_CONCERNS = [
  { name: 'One City Developer Ltd',        sub: 'A Trusted Destination for Affordable Land Buying' },
  { name: 'Goldsands Project Management',  sub: 'Comprehensive and efficient project execution' },
  { name: 'Goldsands Properties',          sub: 'Luxury apartment project in Dhaka' },
  { name: 'Goldsands Hotels and Resorts',  sub: 'Number one hotel developer company in Bangladesh' },
];

const MISSION_POINTS = [
  'To Ensure High Quality Product With Most Modern & Innovation Concept.',
  'To Grow the Economy by Reducing Poverty & Unemployment.',
  'To Create Tension Free Source of Income by Providing Guaranteed & Safe Investment Return.',
  'To Give Most Priority and Ensure Best Service to our Clients.',
  'To make Bangladesh as one of the top Tourism Countries in the World.',
  'To Make the Nation Prestigious & Wealthy.',
];

const VALUES = [
  { icon: '🤝', label: 'Always Customer First — Customer Priority — Customer Focused' },
  { icon: '💬', label: 'Sharing both happiness & sadness' },
  { icon: '⚖️', label: 'Respect & Responsibility' },
  { icon: '❤️', label: 'Honesty, Caring & Trust' },
];

const AboutSection: React.FC = () => (
  <section id="about" className="overflow-hidden" style={{ background: 'linear-gradient(180deg,#f0f4ff 0%,#ffffff 100%)' }}>

    {/* ── 1. WHO WE ARE ──────────────────────────────────────────────── */}
    <div className="gs-section pb-0">
      <div className="gs-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="animate-slide-left">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title mb-4">
              Bangladesh's Leading Hotel Development &amp; Investment Company
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-500 mt-5 mb-5 leading-relaxed">
              Goldsands Group is Bangladesh's number one hotel developer and investment company, shaping the
              future of hospitality, tourism, and real estate since 2015. Alongside premium hotel projects like
              Best Western Plus Bay Hills Himchhari, Bay Sands, Bay Marina, and Bay Breeze, we have also
              developed landmark residential projects, including Amin City Purbachol and Gold City Mawa.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Driven by quality, innovation, and long-term vision, we create profitable investment opportunities
              that combine luxury, trust, and sustainable growth. Through legally secured ownership, we make
              premium property and hotel investments accessible for everyday Bangladeshis.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Halal income & lifetime facilities',
                'International standard hospitality',
                'Transparent investment process',
                'Strategic prime-location projects',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white"
                        style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#projects"
               onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
               id="about-see-projects-btn"
               className="btn-primary">
              See Our Projects
            </a>
          </div>

          {/* Right — img2 (pool & facade) */}
          <div className="relative animate-slide-right">
            <div className="rounded-3xl overflow-hidden img-overlay shadow-card-lg h-80 md:h-[480px]">
              <img src={img2} alt="Goldsands luxury resort pool and facade" className="w-full h-full object-cover" />
            </div>

            {/* Floating logo card */}
            <div className="absolute -bottom-6 -left-4 glass-card p-4 shadow-card animate-float"
                 style={{ background: 'white', borderRadius: '20px', boxShadow: '0 8px 40px rgba(26,35,126,0.15)' }}>
              <div className="flex items-center gap-3">
                <img src={logoImg} alt="Goldsands Group Logo"
                     className="w-16 h-16 rounded-full object-contain bg-white border-2 border-gold-300 shadow-gold"
                     style={{ padding: '3.5px' }} />
                <div>
                  <p className="font-black text-sm leading-none"
                     style={{ fontFamily: 'Playfair Display, serif', color: '#1a237e' }}>GOLDSANDS</p>
                  <p className="text-xs tracking-widest uppercase font-medium" style={{ color: '#C9A84C' }}>GROUP</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex gap-4">
                <div className="text-center">
                  <p className="font-black text-lg" style={{ color: '#1a237e' }}>10+</p>
                  <p className="text-gray-400 text-xs">Years</p>
                </div>
                <div className="text-center">
                  <p className="font-black text-gold-500 text-lg">5K+</p>
                  <p className="text-gray-400 text-xs">Investors</p>
                </div>
                <div className="text-center">
                  <p className="font-black text-lg" style={{ color: '#0288D1' }}>15+</p>
                  <p className="text-gray-400 text-xs">Projects</p>
                </div>
              </div>
            </div>

            {/* Accent dot */}
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-20"
                 style={{ background: 'radial-gradient(circle,#C9A84C,transparent)' }} />
          </div>
        </div>
      </div>
    </div>

    {/* ── 2. SISTER CONCERN ──────────────────────────────────────────── */}
    <div className="gs-section py-20" style={{ background: 'linear-gradient(135deg,#e8f4fd 0%,#dbeeff 100%)' }}>
      <div className="gs-container">
        <div className="text-center mb-12">
          <span className="section-label">Our Family</span>
          <h2 className="section-title">Goldsands Group Sister Concern</h2>
          <div className="gold-divider mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SISTER_CONCERNS.map((item, i) => (
            <div key={i}
                 className="gs-card p-6 text-center hover:shadow-gold transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-black text-lg"
                   style={{ background: 'linear-gradient(135deg,#1a237e,#0288D1)' }}>
                {i + 1}
              </div>
              <h3 className="font-black text-sm mb-2 leading-snug" style={{ color: '#1a237e' }}>{item.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── 3. OUR MISSION ─────────────────────────────────────────────── */}
    <div className="gs-section py-20 bg-white">
      <div className="gs-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — img3 (street-level facade) */}
          <div className="relative rounded-3xl overflow-hidden shadow-card-lg animate-slide-left img-overlay h-80 md:h-[460px]">
            <img src={img3} alt="Goldsands resort street-level facade" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg,rgba(26,35,126,0.55) 0%,transparent 60%)' }} />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-black text-2xl" style={{ fontFamily: 'Playfair Display,serif' }}>
                Our Mission
              </p>
              <p className="text-gold-300 text-sm mt-1">Building with Purpose</p>
            </div>
          </div>

          {/* Right — mission points */}
          <div className="animate-slide-right">
            <span className="section-label">Our Direction</span>
            <h2 className="section-title mb-4">Our Mission</h2>
            <div className="gold-divider mb-8" />
            <ul className="space-y-4">
              {MISSION_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black text-white mt-0.5 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: 'linear-gradient(135deg,#1a237e,#0288D1)' }}>
                    {i + 1}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* ── 4. OUR VISION ──────────────────────────────────────────────── */}
    <div className="gs-section py-20" style={{ background: 'linear-gradient(135deg,#f0f4ff 0%,#e8eaf6 100%)' }}>
      <div className="gs-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — vision text */}
          <div className="animate-slide-left">
            <span className="section-label">Our Direction</span>
            <h2 className="section-title mb-6">Our Vision</h2>
            <div className="gold-divider mb-8" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Join us on this journey as we redefine real estate standards, transform spaces into homes,
              a source of halal income and create environments that inspire progress.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Together, we are architects of dreams, shaping a future where Goldsands Group is synonymous
              with excellence, compassion, and the realization of aspirations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Welcome to a world where your real estate goals become our shared vision for a brighter tomorrow.
              Goldsands Group stands as a symbol of trust, innovation, and integrity.
            </p>
          </div>

          {/* Right — img4 (aerial top-down resort) */}
          <div className="relative rounded-3xl overflow-hidden shadow-card-lg h-80 md:h-[460px] animate-slide-right img-overlay">
            <img src={img4} alt="Goldsands resort aerial view" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg,rgba(26,35,126,0.5) 0%,transparent 60%)' }} />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-black text-xl" style={{ fontFamily: 'Playfair Display,serif' }}>
                Building Tomorrow<br/>Today
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ── 5. VALUES ──────────────────────────────────────────────────── */}
    <div className="gs-section py-16 bg-white">
      <div className="gs-container">
        <div className="text-center mb-12">
          <span className="section-label">What We Stand For</span>
          <h2 className="section-title">Our Values</h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, i) => (
            <div key={i}
                 className="gs-card p-6 flex flex-col items-center text-center gap-3
                            hover:shadow-gold transition-all duration-300 hover:-translate-y-1 group">
              <span className="text-4xl transition-transform duration-300 group-hover:scale-110">{v.icon}</span>
              <p className="text-gray-700 text-sm font-semibold leading-snug">{v.label}</p>
            </div>
          ))}
        </div>

        {/* Consultants strip */}
        <div className="mt-12 p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg,#f0f4ff,#e8eaf6)' }}>
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-8" style={{ color: '#C9A84C' }}>
            Our Project Consultants
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
            {['Paradigm', 'SJ Subana', 'South Avenue', 'One City Developers', 'Goldsands Properties'].map((name) => (
              <span key={name} className="px-4 py-2 rounded-full text-xs font-bold tracking-wide border border-gray-300 text-gray-600 bg-white">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* ── 6. PREPARED BY OS IT SOLUTIONS LTD ────────────────────────── */}
    <div className="py-8" style={{ background: 'linear-gradient(135deg,#0a0a18 0%,#1a237e 100%)' }}>
      <div className="gs-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <img src={logoImg} alt="OS IT Solutions Ltd"
               className="w-16 h-16 rounded-full object-contain bg-white border-4 border-gold-400 shadow-gold flex-shrink-0"
               style={{ padding: '5px' }} />
          <div>
            <p className="text-white/60 text-xs tracking-[0.25em] uppercase mb-1">Prepared by</p>
            <h3 className="text-white font-black text-xl md:text-2xl tracking-tight"
                style={{ fontFamily: 'Playfair Display,serif',
                         background: 'linear-gradient(135deg,#C9A84C,#fde68a)',
                         WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                         backgroundClip: 'text' }}>
              OS IT Solutions Ltd
            </h3>
            <p className="text-white/50 text-sm mt-1">
              Your trusted partner in digital transformation &amp; web solutions
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
);

export default AboutSection;
