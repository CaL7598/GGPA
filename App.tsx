
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Compendium from './pages/Compendium';
import GalleryPage from './pages/GalleryPage';
import Admin from './pages/Admin';
import { ContentProvider } from './context/ContentContext';

const About = () => <div className="py-40 text-center"><h1 className="text-4xl font-serif">About GGPA</h1><p className="mt-4 text-slate-500">The Secretariat, Governance Structure, and Act 992 Compliance.</p></div>;
const Pillars = () => <div className="py-40 text-center"><h1 className="text-4xl font-serif">Pillars of Impact</h1><p className="mt-4 text-slate-500">Governance, Diplomacy, Research, Academy, Partnerships.</p></div>;
const Fellowship = () => <div className="py-40 text-center"><h1 className="text-4xl font-serif">Fellowship: YAC Portal</h1><p className="mt-4 text-slate-500">Join the Technical Elite. Architects of Integrity.</p></div>;
const Contact = () => <div className="py-40 text-center"><h1 className="text-4xl font-serif">Diplomatic Inquiries</h1><p className="mt-4 text-slate-500">Headquarters in Accra, Ghana.</p></div>;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ContentProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/compendium" element={<Compendium />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/pillars" element={<Pillars />} />
            <Route path="/fellowship" element={<Fellowship />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      </Router>
    </ContentProvider>
  );
};

export default App;
