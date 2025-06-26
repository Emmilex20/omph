import React, { useState } from 'react';
import { Mail, X, ArrowUp  } from 'lucide-react'; // Renamed Sitemap to SitemapIcon to avoid conflict with page name
import { Link } from 'react-router-dom';

// Reusable Contact Modal Component (Copied for self-containment of this new file)
const ContactModal = ({ isOpen, onClose }) => {
  const modalClasses = `fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50
                        transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;
  const contentClasses = `bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center relative
                          transform transition-all duration-300 ease-out
                          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`;

  if (!isOpen && contentClasses.includes('opacity-0')) {
    return null;
  }

  return (
    <div className={modalClasses} onClick={onClose}>
      <div className={contentClasses} onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col items-center justify-center">
          <Mail size={64} className="text-primary mb-6" />
          <h3 className="text-2xl font-bold text-dark mb-4">Need Help Navigating?</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            If you're looking for something specific and can't find it on our sitemap, please feel free to contact our parish office directly.
          </p>
          <Link
            to="/contact"
            onClick={onClose} // Close modal when navigating
            className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold
                       hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
          >
            Go to Contact Page
          </Link>
        </div>
      </div>
    </div>
  );
};


const SitemapPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  // Hero Section background image (a relevant image for overview/structure)
  const heroBackgroundImage = 'https://www.directline.pro/wp-content/uploads/2024/02/a02c9bb7edc1dcbeeb658c2e68672304.jpg';

  const siteSections = [
    {
      title: 'Main Navigation',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Mass Times', path: '/mass-times' },
        { name: 'Sermons', path: '/sermons' },
        { name: 'Ministries', path: '/ministries' },
        { name: 'Events', path: '/events' },
        { name: 'Giving', path: '/giving' },
        { name: 'Clergy & Staff', path: '/clergy' },
        { name: 'Sacraments', path: '/sacraments' },
        { name: 'News', path: '/news' },
        { name: 'Bulletin & Readings', path: '/bulletin' },
        { name: 'FAQs', path: '/faqs' },
        { name: 'Contact Us', path: '/contact' },
      ]
    },
    {
      title: 'Other Important Pages',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service (Placeholder)', path: '/terms-of-service' },
        { name: 'Accessibility Statement (Placeholder)', path: '/accessibility' },
      ]
    },
    {
        title: 'Community & Resources',
        links: [
            { name: 'Photo Gallery (Placeholder)', path: '/gallery' },
            { name: 'Parish Registration (Placeholder)', path: '/register' },
            { name: 'Volunteer Opportunities (Placeholder)', path: '/volunteer' },
            { name: 'RCIA (Becoming Catholic) (Placeholder)', path: '/rcia' },
        ]
    }
  ];


  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-center bg-cover h-[50vh] flex items-center justify-center text-white shadow-xl mb-16 rounded-b-3xl"
        style={{ backgroundImage: `url('${heroBackgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-primary/40 rounded-b-3xl"></div>
        <div className="absolute inset-0 bg-black opacity-30 rounded-b-3xl"></div>
        <h1 className="z-10 text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif text-center drop-shadow-lg tracking-wide">
          Site Map
        </h1>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Introduction */}
        <section className="text-center max-w-5xl mx-auto mb-16 px-4">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            This sitemap provides an overview of all the pages and main sections within Our Mother of Perpetual Help Catholic Church website, helping you navigate and find information efficiently.
          </p>
        </section>

        {/* Sitemap Sections */}
        <section className="bg-gradient-to-br from-white to-light p-8 md:p-12 rounded-2xl shadow-xl border border-primary-light mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 text-center leading-tight">
            Explore Our Website
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-dark mb-4 border-b pb-2 border-gray-200">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="flex items-center text-lg text-gray-700 hover:text-primary hover:underline transition-colors duration-200"
                      >
                        <ArrowUp  size={20} className="mr-3 text-primary flex-shrink-0" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action: Contact Us for Questions */}
        <section className="mt-16 bg-gradient-to-br from-primary/10 to-blue-100 p-8 md:p-12 rounded-2xl shadow-xl text-center border border-primary-light">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 leading-tight">
            Still Can't Find What You're Looking For?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            If you need further assistance in navigating our site or have a specific inquiry, our parish office is here to help.
          </p>
          <button
            onClick={openContactModal}
            className="inline-flex items-center space-x-3 bg-primary text-white px-10 py-4 rounded-full text-xl font-bold
                       hover:bg-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl
                       focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            <Mail size={24} />
            <span>Contact Our Parish Office</span>
          </button>
        </section>
      </div>

      {/* Render Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </div>
  );
};

export default SitemapPage;
