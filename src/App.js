import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react'; // Import a loading icon

// Import your existing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import SacramentsPage from './pages/SacramentsPage';
import MinistriesPage from './pages/MinistriesPage';
import EventsPage from './pages/EventsPage';
import ClergyPage from './pages/ClergyPage';
import GivingPage from './pages/GivingPage';
import ContactUsPage from './pages/ContactUsPage';
import NewsPage from './pages/NewsPage';
import BulletinPage from './pages/BulletinPage';
import MassTimesPage from './pages/MassTimesPage';
import useScrollToTop from './hooks/useScrollToTop';
import SermonsPage from './pages/SermonsPage';
import FaqsPage from './pages/FaqsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import SitemapPage from './pages/SiteMapPage';
import ParishActivitiesPage from './pages/ParishActivitiesPage';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app-wide loading (e.g., fetching initial user data, configs, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time for the entire app

    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  useScrollToTop(); // Hook is called here, now guaranteed to be within Router context

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-primary flex flex-col items-center">
          <Loader2 size={64} className="animate-spin mb-4" />
          <p className="text-xl font-semibold">Loading Our Parish App...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-dark">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/sacraments" element={<SacramentsPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/clergy" element={<ClergyPage />} />
          <Route path="/giving" element={<GivingPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/bulletin" element={<BulletinPage />} />
          <Route path="/mass-times" element={<MassTimesPage />} />
          <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/parish-activities" element={<ParishActivitiesPage />} />
          {/* Add more routes for additional pages */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
