
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Compendium from './pages/Compendium';
import Pillars from './pages/Pillars';
import Fellowship from './pages/Fellowship';
import Contact from './pages/Contact';
import GalleryPage from './pages/GalleryPage';
import Admin from './pages/Admin';
import NewsPage from './pages/NewsPage';
import ArticlePage from './pages/ArticlePage';
import Application from './pages/Application';
import Library from './pages/Library';
import IIGRAPage from './pages/IIGRAPage';
import ServicesPage from './pages/ServicesPage';
import ComplianceSuite from './pages/ComplianceSuite';
import DiplomacySuite from './pages/DiplomacySuite';
import TechnicalSuite from './pages/TechnicalSuite';
import YouthGovernance from './pages/YouthGovernance';
import DiplomaticEngagement from './pages/DiplomaticEngagement';
import PartnershipsPage from './pages/PartnershipsPage';
import StrategicCommitments from './pages/StrategicCommitments';
import LegalCompliance from './pages/LegalCompliance';
import Safeguarding from './pages/Safeguarding';
import { ContentProvider } from './context/ContentContext';
import { AuthProvider } from './context/AuthContext';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('GGPA Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '16px', color: '#dc2626' }}>Something went wrong</h1>
          <p style={{ color: '#64748b', marginBottom: '16px' }}>{this.state.error?.message}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 24px',
              backgroundColor: '#0f172a',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Reload Page
          </button>
          <pre style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f1f5f9', borderRadius: '8px', overflow: 'auto', textAlign: 'left' }}>
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  console.log('GGPA: App component rendering...');
  
  return (
    <ErrorBoundary>
      <AuthProvider>
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
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:id" element={<ArticlePage />} />
                <Route path="/application" element={<Application />} />
                <Route path="/library" element={<Library />} />
                <Route path="/knowledge-hub" element={<Library />} />
                <Route path="/iigra" element={<IIGRAPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/technical-core/compliance" element={<ComplianceSuite />} />
                <Route path="/technical-core/diplomacy" element={<DiplomacySuite />} />
                <Route path="/technical-core/technical" element={<TechnicalSuite />} />
                <Route path="/youth" element={<YouthGovernance />} />
                <Route path="/diplomacy" element={<DiplomaticEngagement />} />
                <Route path="/partnerships" element={<PartnershipsPage />} />
                <Route path="/strategic-commitments" element={<StrategicCommitments />} />
                <Route path="/legal-compliance" element={<LegalCompliance />} />
                <Route path="/safeguarding" element={<Safeguarding />} />
              </Routes>
            </Layout>
          </Router>
        </ContentProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
