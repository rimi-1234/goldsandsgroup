import { useLocation } from 'react-router-dom';
import HeroSection        from '../components/sections/HeroSection';
import ServicesSection    from '../components/sections/ServicesSection';
import AboutSection       from '../components/sections/AboutSection';
import StatsSection       from '../components/sections/StatsSection';
import ProjectsSection    from '../components/sections/ProjectsSection';
import GallerySection     from '../components/sections/GallerySection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection     from '../components/sections/ContactSection';

const LandingPage: React.FC = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <main id="landing-page" className={isAboutPage ? 'pt-24' : ''}>
      {!isAboutPage && <HeroSection />}
      {!isAboutPage && <ServicesSection />}
      
      <AboutSection />
      
      {!isAboutPage && <StatsSection />}
      {!isAboutPage && <ProjectsSection />}
      {!isAboutPage && <GallerySection />}
      {!isAboutPage && <TestimonialsSection />}
      {!isAboutPage && <ContactSection />}
    </main>
  );
};

export default LandingPage;
