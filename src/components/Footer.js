import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="col-span-1">
          <h3 className="text-2xl font-bold text-white mb-4">Our Mother of Perpetual Help Catholic Church</h3>
          <p className="text-sm leading-relaxed">
            A welcoming community rooted in faith, committed to serving God and neighbor. Join us for worship, spiritual growth, and fellowship.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Fix for jsx-a11y/anchor-is-valid: Provide valid placeholder URLs */}
            <a href="https://facebook.com/yourchurchpage" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com/yourchurchpage" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com/yourchurchpage" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {/* Assuming these are valid internal routes in your React app */}
            <li><Link to="/mass-times" className="hover:text-white transition-colors duration-300">Mass Schedule</Link></li>
            <li><Link to="/bulletin" className="hover:text-white transition-colors duration-300">Weekly Bulletin</Link></li>
            <li><Link to="/faqs" className="hover:text-white transition-colors duration-300">FAQs</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
            <li><Link to="/sitemap" className="hover:text-white transition-colors duration-300">Sitemap</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
          <p className="flex items-center space-x-2 text-sm mb-2">
            <MapPin size={18} />
            {/* Updated address for consistency */}
            <span>[Your Church Address Here, e.g., 123 Church Road, Lekki Phase 1, Lagos]</span>
          </p>
          <p className="flex items-center space-x-2 text-sm mb-2">
            <Phone size={18} />
            <span>(123) 456-7890</span>
          </p>
          <p className="flex items-center space-x-2 text-sm">
            <Mail size={18} />
            <span>info@yourchurch.org</span> {/* Changed to a generic email placeholder */}
          </p>
          <p className="text-sm mt-4">
            Office Hours:<br />
            Mon-Fri: 9 AM - 4 PM
          </p>
        </div>

        {/* Newsletter Signup (Placeholder) */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Stay updated with parish news and events.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="bg-accent text-primary font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Our Mother of Perpetual Help Catholic Church. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
