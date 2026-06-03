import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import LandingPage  from './pages/LandingPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      {/* Landing page route */}
      <Route path="/" element={<LandingPage />} />

      {/* Catch-all → redirect home */}
      <Route path="*" element={<LandingPage />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);

export default App;
