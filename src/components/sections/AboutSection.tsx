const AboutSection: React.FC = () => (
  <section id="about" className="gs-section" style={{ background: 'linear-gradient(180deg,#f0f4ff 0%,#ffffff 100%)' }}>
    <div className="gs-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — text */}
        <div className="animate-slide-left">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title mb-4">
            Bangladesh's Leading Hotel Development & Investment Company
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-500 mt-5 mb-5 leading-relaxed">
            Goldsands Group is one of Bangladesh's premier hotel development and investment companies, maintaining
            a laser focus on quality and process in every facet of development. Driven by a relentless desire to
            streamline and advance, we lead our partners and investors toward a future of profit and growth.
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Our goal is to build and develop world-class hotels and suites at Cox's Bazar — the world's longest
            beach — and Kuakata, a natural paradise in the Bay of Bengal. Our unique features ensure investors
            a sound and valuable venture providing substantial profit sharing.
          </p>

          {/* Feature list */}
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

        {/* Right — image collage */}
        <div className="relative animate-slide-right">
          {/* Main image */}
          <div className="rounded-3xl overflow-hidden img-overlay shadow-card-lg h-80 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80"
              alt="Goldsands Group who we are"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating logo card */}
          <div className="absolute -bottom-6 -left-6 glass-card p-5 shadow-card animate-float"
               style={{ background: 'white', borderRadius: '20px', boxShadow: '0 8px 40px rgba(26,35,126,0.15)' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-black"
                   style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)' }}>G</div>
              <div>
                <p className="font-black text-navy-600 text-sm leading-none"
                   style={{ fontFamily: 'Playfair Display, serif', color: '#1a237e' }}>GOLDSANDS</p>
                <p className="text-xs tracking-widest uppercase font-medium" style={{ color: '#C9A84C' }}>GROUP</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex gap-4">
              <div className="text-center">
                <p className="font-black text-navy-600 text-lg" style={{ color: '#1a237e' }}>10+</p>
                <p className="text-gray-400 text-xs">Years</p>
              </div>
              <div className="text-center">
                <p className="font-black text-gold-500 text-lg">5K+</p>
                <p className="text-gray-400 text-xs">Investors</p>
              </div>
              <div className="text-center">
                <p className="font-black text-navy-600 text-lg" style={{ color: '#0288D1' }}>15+</p>
                <p className="text-gray-400 text-xs">Projects</p>
              </div>
            </div>
          </div>

          {/* Accent dot */}
          <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20"
               style={{ background: 'radial-gradient(circle,#C9A84C,transparent)' }} />
        </div>
      </div>

      {/* Consultants strip */}
      <div className="mt-20 p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg,#f0f4ff,#e8eaf6)' }}>
        <p className="text-center text-sm font-semibold tracking-widest uppercase mb-8" style={{ color: '#C9A84C' }}>
          Our Project Consultants
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
          {['Paradigm', 'SJ Subana', 'South Avenue', 'One City Developers', 'Goldsands Properties'].map((name) => (
            <span key={name} className="px-4 py-2 rounded-full text-xs font-bold tracking-wide border border-gray-300 text-gray-600 bg-white">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
