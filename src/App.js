import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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
            {/* Add more routes for additional pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;