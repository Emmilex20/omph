import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircleQuestion, Mail, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // For linking to contact page

// NEW Contact Modal for "Still have a question?"
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
          <MessageCircleQuestion size={64} className="text-primary mb-6" />
          <h3 className="text-2xl font-bold text-dark mb-4">Still Have a Question?</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            If you couldn't find the answer you were looking for, please feel free to contact our parish office directly.
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


const FaqsPage = () => {
  const [openFAQId, setOpenFAQId] = useState(null); // State to manage which FAQ is open
  const [searchTerm, setSearchTerm] = useState('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleFAQ = (id) => {
    setOpenFAQId(openFAQId === id ? null : id);
  };

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const faqs = [
    {
      id: 'mass-times',
      question: 'What are your Mass times?',
      answer: 'Our weekend Masses are on Saturday Vigil at 6:00 PM, and Sunday at 7:00 AM, 9:00 AM (Yoruba), 11:00 AM (English), and 6:00 PM (Youth Mass). Weekday Masses are Monday to Friday at 6:30 AM (Morning Devotion & Mass) and 7:00 PM (Evening Mass). For more details, please visit our <a href="/mass-times" class="text-primary hover:underline font-medium">Mass Times page</a>.'
    },
    {
      id: 'confession-schedule',
      question: 'When is Confession available?',
      answer: 'The Sacrament of Reconciliation (Confession) is available every Saturday from 5:00 PM - 5:45 PM. Weekday confessions are by appointment only. Please contact the parish office to schedule.'
    },
    {
      id: 'become-catholic',
      question: 'How can I become Catholic or learn more about the faith?',
      answer: 'We welcome all who are interested in learning more about the Catholic faith! Our Rite of Christian Initiation of Adults (RCIA) program is designed for adults seeking Baptism, Confirmation, or First Communion, or for those already baptized in another Christian tradition wishing to enter into full communion with the Catholic Church. Please contact the parish office for information on upcoming RCIA sessions.'
    },
    {
      id: 'baptism-children',
      question: 'How do I arrange for my child\'s Baptism?',
      answer: 'Parents wishing to have their child baptized are required to attend a Baptismal Preparation Class. Please contact the parish office at least two months in advance to begin the process and schedule your class and the Baptism date.'
    },
    {
      id: 'join-parish',
      question: 'How do I register as a parishioner?',
      answer: 'We would love for you to officially join our parish family! You can register by filling out a registration form available at the parish office, or by downloading it from our website and submitting it via email or in person. Registering helps us to better serve you and keep you informed of parish activities.'
    },
    {
      id: 'online-giving',
      question: 'How can I make an offering or donate online?',
      answer: 'You can make secure online donations through our giving portal by clicking the "Give Online Now" button on our <a href="/giving" class="text-primary hover:underline font-medium">Giving page</a>. We also accept offertory contributions during Mass, checks mailed to the parish office, and planned giving arrangements. All contributions are deeply appreciated.'
    },
    {
      id: 'ministries',
      question: 'How can I get involved in a ministry?',
      answer: 'We encourage all parishioners to share their time and talents by joining one of our many vibrant ministries! Visit our <a href="/ministries" class="text-primary hover:underline font-medium">Ministries page</a> to explore the various opportunities available, from liturgical roles to community outreach, and find the perfect fit for your gifts. You can also contact the ministry coordinator directly.'
    },
    {
      id: 'events',
      question: 'Where can I find information about upcoming events?',
      answer: 'All our upcoming parish events, spiritual programs, and community gatherings are listed on our <a href="/events" class="text-primary hover:underline font-medium">Events page</a>. We also include key announcements in our weekly bulletin and parish newsletter.'
    },
    {
      id: 'bulletin',
      question: 'Where can I find the weekly bulletin and daily readings?',
      answer: 'Our weekly bulletin, containing parish news, announcements, and a message from our pastor, is available for download on our <a href="/bulletin" class="text-primary hover:underline font-medium">Bulletin page</a>. You can also find the Catholic Daily Readings there to prepare for Mass.'
    },
    {
      id: 'contact-parish',
      question: 'How do I contact the parish office?',
      answer: 'You can reach the parish office by phone at (123) 456-7890 or by email at info@omphchurch.org during office hours (Monday - Friday: 9:00 AM - 4:00 PM). Our full contact details and a contact form are available on our <a href="/contact" class="text-primary hover:underline font-medium">Contact Us page</a>.'
    },
  ];

  // Filter FAQs based on search term
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hero Section background image (using a relevant image)
  const heroBackgroundImage = 'https://uploads.weconnect.com/7c83855be69a3a5db4a9440f81f0abd6e8bdb39f/z334x9f8fgmx6d6sxnd4ewaxowl.png';


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
          Frequently Asked Questions
        </h1>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Introduction */}
        <section className="text-center max-w-5xl mx-auto mb-16 px-4">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            We've compiled answers to the most common questions about our parish, Mass times, Sacraments, ministries, and more. We hope this resource helps you find the information you need quickly and easily.
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full p-4 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg shadow-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="bg-gradient-to-br from-white to-light p-8 md:p-12 rounded-2xl shadow-xl border border-primary-light mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 text-center leading-tight">
            Common Questions
          </h2>
          <div className="space-y-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                  <button
                    className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-dark flex-grow pr-4">{faq.question}</h3>
                    {openFAQId === faq.id ? (
                      <ChevronUp size={28} className="text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown size={28} className="text-primary flex-shrink-0" />
                    )}
                  </button>
                  {openFAQId === faq.id && (
                    <div
                      className="p-6 pt-0 text-gray-700 text-lg leading-relaxed bg-gray-50 animate-fade-in-down"
                      dangerouslySetInnerHTML={{ __html: faq.answer }} // Render HTML content
                    />
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-600">
                <p className="text-xl font-semibold">No matching FAQs found.</p>
                <p className="mt-2">Try a different search term or explore the categories.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action: Still Have a Question? */}
        <section className="mt-16 bg-gradient-to-br from-primary/10 to-blue-100 p-8 md:p-12 rounded-2xl shadow-xl text-center border border-primary-light">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 leading-tight">
            Can't Find Your Answer?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            If your question wasn't covered in our FAQs, please don't hesitate to reach out to us directly. We are here to assist you.
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

export default FaqsPage;
