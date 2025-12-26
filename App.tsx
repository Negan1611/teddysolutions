
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CallButton from './components/CallButton';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import News from './pages/News';
import Contact from './pages/Contact';
import { AppRoute } from './types';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path={AppRoute.HOME} element={<Home />} />
            <Route path={AppRoute.SERVICES} element={<Services />} />
            <Route path={AppRoute.PROJECTS} element={<Projects />} />
            <Route path={AppRoute.SERVICE_DETAIL} element={<ServiceDetail />} />
            <Route path={AppRoute.NEWS} element={<News />} />
            <Route path={AppRoute.CONTACT} element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CallButton />
      </div>
    </Router>
  );
};

export default App;
