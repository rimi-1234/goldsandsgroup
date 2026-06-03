import { STATS } from '../../data/landingData';

const StatsSection: React.FC = () => (
  <section id="stats" className="py-16 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0"
         style={{ background: 'linear-gradient(135deg,#1a237e 0%,#0288D1 100%)' }} />
    <div className="absolute inset-0 opacity-10"
         style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C9A84C 0%, transparent 60%)' }} />

    <div className="gs-container relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {STATS.map((stat, idx) => (
          <div
            key={stat.id}
            id={`stat-${stat.id}`}
            className="text-center animate-fade-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2 text-gold-shimmer"
                 style={{ fontFamily: 'Playfair Display,serif',
                          background: 'linear-gradient(135deg,#C9A84C,#fde68a)',
                          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text' }}>
              {stat.value}
            </div>
            <p className="text-white/70 text-sm font-medium tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
