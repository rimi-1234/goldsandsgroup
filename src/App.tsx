import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import ScrollToTop  from './components/ScrollToTop';
import LandingPage  from './pages/LandingPage';
import CareerPage   from './pages/CareerPage';

// Helper component to handle scrolling to hash elements
const ScrollToHashElement: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

const App: React.FC = () => (
  <BrowserRouter>
    <ScrollToHashElement />
    <Navbar />

    <Routes>
      {/* Landing page route */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<LandingPage />} />
      <Route path="/career" element={<CareerPage />} />

      {/* Catch-all → redirect home */}
      <Route path="*" element={<LandingPage />} />
    </Routes>

    <Footer />
    <ScrollToTop />
  </BrowserRouter>
);

export default App;
