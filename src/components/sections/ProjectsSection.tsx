import { useState } from 'react';
import { PROJECTS } from '../../data/landingData';
import type { Project } from '../../types';

type Filter = 'All' | Project['category'];
const FILTERS: Filter[] = ['All', 'Hotel', 'Resort', 'Apartment', 'Land'];

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [selected,     setSelected]     = useState<Project | null>(null);

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="gs-section bg-white">
      <div className="gs-container">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title">Our Project Overview</h2>
          <div className="gold-divider mx-auto" />
          <p className="section-subtitle mx-auto mt-4">
            Explore our portfolio of world-class hospitality and real estate projects across Bangladesh's most sought-after destinations.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              id={`projects-filter-${filter.toLowerCase()}`}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${activeFilter === filter
                  ? 'text-white shadow-gold scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              style={activeFilter === filter
                ? { background: 'linear-gradient(135deg,#1a237e,#0288D1)' }
                : {}}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="gs-card group overflow-hidden cursor-pointer animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setSelected(project)}
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 img-overlay">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ background: 'rgba(26,35,126,0.85)' }}>
                    {project.category}
                  </span>
                  {project.tag && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)', color: '#0D0D1A' }}>
                      {project.tag}
                    </span>
                  )}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                flex items-center justify-center"
                     style={{ background: 'linear-gradient(135deg,rgba(26,35,126,0.7),rgba(201,168,76,0.5))' }}>
                  <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    Learn More →
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-lg" style={{ color: '#1a237e', fontFamily: 'Playfair Display,serif' }}>
                    {project.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <span>📍</span>
                  <span>{project.location}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                <div className="mt-4 flex items-center gap-4">
                  <button className="text-xs font-semibold transition-all duration-300 hover:translate-x-1"
                          style={{ color: '#C9A84C' }}>
                    View Details →
                  </button>
                  <span className="text-xs text-gray-300">|</span>
                  <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">📍 Location</button>
                  <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">🎥 Video</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {PROJECTS.map((_, i) => (
            <span key={i}
                  className={`rounded-full transition-all duration-300 ${i === 0 ? 'w-6 h-2' : 'w-2 h-2 bg-gray-300'}`}
                  style={i === 0 ? { background: 'linear-gradient(135deg,#1a237e,#0288D1)' } : {}} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
             style={{ background: 'rgba(13,13,26,0.75)', backdropFilter: 'blur(8px)' }}
             onClick={() => setSelected(null)}>
          <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-card-lg animate-fade-up"
               onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64">
              <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
              <button onClick={() => setSelected(null)}
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white
                                 flex items-center justify-center hover:bg-black/70 transition-colors text-lg">
                ×
              </button>
            </div>
            <div className="p-8">
              <span className="gs-badge mb-3">{selected.category}</span>
              <h3 className="text-2xl font-black mb-2" style={{ color: '#1a237e', fontFamily: 'Playfair Display,serif' }}>
                {selected.name}
              </h3>
              <p className="text-xs text-gray-400 mb-4">📍 {selected.location}</p>
              <p className="text-gray-600 leading-relaxed">{selected.description}</p>
              <div className="mt-6 flex gap-3">
                <button className="btn-primary flex-1 justify-center text-sm">Book Now</button>
                <button className="btn-outline flex-1 justify-center text-sm">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
