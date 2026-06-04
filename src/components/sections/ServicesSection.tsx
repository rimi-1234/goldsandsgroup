import { SERVICES } from '../../data/landingData';
import servicesImg from '../../assets/image/1.jfif';

const ServicesSection: React.FC = () => (
  <section id="services" className="gs-section bg-white">
    <div className="gs-container">
      {/* Heading */}
      <div className="text-center mb-14">
        <span className="section-label">What We Offer</span>
        <h2 className="section-title">Our Investment Categories</h2>
        <div className="gold-divider mx-auto" />
        <p className="section-subtitle mx-auto mt-4">
          Choose from premium hotel suites, modern apartments, and strategic land plots across Bangladesh's most coveted destinations.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES.map((service, idx) => (
          <div
            key={service.id}
            id={`service-card-${service.id}`}
            className="gs-card group text-center p-8 cursor-pointer animate-fade-up"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl
                            transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                 style={{ background: `linear-gradient(135deg, ${service.color}15, ${service.color}30)`,
                          border: `2px solid ${service.color}25` }}>
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="mb-3 font-bold" style={{ color: service.color }}>
              {service.title}
            </h3>

            {/* Divider */}
            <div className="w-10 h-0.5 mx-auto mb-4 rounded-full"
                 style={{ background: service.color, opacity: 0.4 }} />

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>

            {/* Arrow */}
            <div className="mt-5 flex justify-center">
              <span className="text-xs font-semibold tracking-wider uppercase transition-all duration-300
                               group-hover:translate-x-1"
                    style={{ color: service.color }}>
                Learn More →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom image strip — local resort pool image */}
      <div className="mt-16 rounded-3xl overflow-hidden relative h-64 md:h-80 img-overlay shadow-card-lg">
        <img
          src={servicesImg}
          alt="Goldsands Group resort pool view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
             style={{ background: 'linear-gradient(135deg,rgba(26,35,126,0.70) 0%,rgba(201,168,76,0.40) 100%)' }}>
          <span className="section-label text-gold-300">Our Vision</span>
          <h3 className="text-white text-2xl md:text-3xl font-black mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            World-Class Resorts Across Bangladesh
          </h3>
          <a href="#projects"
             onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
             id="services-view-projects-btn"
             className="btn-gold font-bold">
            View All Projects
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;

