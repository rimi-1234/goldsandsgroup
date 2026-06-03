import HeroSection        from '../components/sections/HeroSection';
import ServicesSection    from '../components/sections/ServicesSection';
import AboutSection       from '../components/sections/AboutSection';
import StatsSection       from '../components/sections/StatsSection';
import ProjectsSection    from '../components/sections/ProjectsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const LandingPage: React.FC = () => (
  <main id="landing-page">
    {/* ── Section 1: Hero (Image 3 — tall building / resort) ─────── */}
    <HeroSection />

    {/* ── Section 2: Services + bottom image strip (Image 1) ──────── */}
    <ServicesSection />

    {/* ── Section 3: About / Who We Are ───────────────────────────── */}
    <AboutSection />

    {/* ── Section 4: Stats bar ────────────────────────────────────── */}
    <StatsSection />

    {/* ── Section 5: Projects (Image 3 used in cards) ─────────────── */}
    <ProjectsSection />

    {/* ── Section 6: Testimonials + city skyline image ─────────────── */}
    <TestimonialsSection />
  </main>
);

export default LandingPage;
