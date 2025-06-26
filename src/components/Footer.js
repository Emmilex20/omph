import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, X, CheckCircle, AlertTriangle } from 'lucide-react'; // Added X, CheckCircle, AlertTriangle for custom alert

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); // 'success' or 'error'

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Formspree endpoint (replace xyzjlgwb with your actual Formspree form ID)
    const formspreeUrl = "https://formspree.io/f/xovwyawb";

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        setAlertMessage('Thank you for subscribing to our newsletter!');
        setAlertType('success');
        setShowAlert(true);
        setEmail('');
      } else {
        const errorData = await response.json();
        setAlertMessage(`Failed to subscribe: ${errorData.error || 'Unknown error'}`);
        setAlertType('error');
        setShowAlert(true);
        console.error('Formspree submission error:', errorData);
      }
    } catch (error) {
      setAlertMessage('An error occurred during subscription. Please try again.');
      setAlertType('error');
      setShowAlert(true);
      console.error('Network or fetch error:', error);
    }
    // Auto-hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage('');
    }, 3000);
  };

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
            <span>F8J7+VM9, Maria Rd, Amuwo Odofin Estate, Lagos 102102, Lagos</span>
          </p>
          <p className="flex items-center space-x-2 text-sm mb-2">
            <Phone size={18} />
            <span>(123) 456-7890</span>
          </p>
          <p className="flex items-center space-x-2 text-sm">
            <Mail size={18} />
            <span>info@omphchurch.org</span>
          </p>
          <p className="text-sm mt-4">
            Office Hours:<br />
            Mon-Fri: 9 AM - 4 PM
          </p>
        </div>

        {/* Newsletter Signup (Formspree Integration via JavaScript) */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Stay updated with parish news and events.
          </p>
          <form 
            className="flex flex-col space-y-3"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-accent text-primary font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          
          {/* Custom Alert Message */}
          {showAlert && (
            <div className={`mt-4 p-4 rounded-lg flex items-center space-x-3
                            ${alertType === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
              {alertType === 'success' ? <CheckCircle size={24} className="flex-shrink-0" /> : <AlertTriangle size={24} className="flex-shrink-0" />}
              <p className="text-sm flex-grow">{alertMessage}</p>
              <button onClick={() => setShowAlert(false)} className="text-gray-500 hover:text-gray-800 focus:outline-none">
                <X size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Our Mother of Perpetual Help Catholic Church. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
