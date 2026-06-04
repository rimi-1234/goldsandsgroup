import { useState } from 'react';
import { TESTIMONIALS } from '../../data/landingData';
import testimonialsBg from '../../assets/image/3.jfif';

const TestimonialsSection: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <section id="testimonials" className="gs-section" style={{ background: 'linear-gradient(180deg,#f8f9ff 0%,#e8eaf6 100%)' }}>
      <div className="gs-container">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">What Our Investors Say</h2>
          <div className="gold-divider mx-auto" />
        </div>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              onClick={() => setActive(idx)}
              className={`gs-card p-6 cursor-pointer transition-all duration-300 animate-fade-up
                ${active === idx ? 'ring-2 ring-gold-500 scale-[1.02]' : ''}`}
              style={{
                animationDelay: `${idx * 0.15}s`,
                boxShadow: active === idx ? '0 8px 40px rgba(201,168,76,0.25)' : undefined,
              }}
            >
              {/* Badge */}
              {t.badge && (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-4 tracking-wider uppercase"
                      style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)', color: '#0D0D1A' }}>
                  ✦ {t.badge}
                </span>
              )}

              {/* Avatar + name */}
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.name}
                     className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-500" />
                <div>
                  <h4 className="font-bold text-sm" style={{ color: '#1a237e' }}>{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-base">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-500 text-sm leading-relaxed italic">
                "{t.text}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* City skyline image — bottom image for testimonials page */}
        <div className="relative rounded-3xl overflow-hidden h-56 md:h-72 img-overlay shadow-card-lg">
          <img
            src={testimonialsBg}
            alt="Goldsands Padma resort aerial view"
            className="w-full h-full object-cover"
          />
          {/* Blue tint overlay matching the goldsands style */}
          <div className="absolute inset-0"
               style={{ background: 'linear-gradient(180deg, rgba(26,35,126,0.15) 0%, rgba(2,136,209,0.55) 100%)' }} />
          {/* Newsletter strip */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col sm:flex-row items-center
                          justify-between gap-4"
               style={{ background: 'linear-gradient(90deg,rgba(26,35,126,0.92),rgba(2,136,209,0.85))' }}>
            <div>
              <p className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display,serif' }}>
                Subscribe for Investment Updates
              </p>
              <p className="text-white/70 text-xs">Get the latest project news delivered to your inbox.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter Email Or Mobile"
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-full text-sm bg-white/10 border border-white/30
                           text-white placeholder-white/50 outline-none focus:border-gold-400 transition-colors"
              />
              <button id="newsletter-subscribe-btn"
                      className="btn-gold text-sm font-bold px-5 py-2.5 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
