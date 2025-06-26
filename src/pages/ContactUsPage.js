import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, X, CheckCircle, AlertTriangle } from 'lucide-react'; // Added CheckCircle and AlertTriangle for success/error icons

// Reusable Submission Success/Error Modal Component
const SubmissionSuccessModal = ({ isOpen, onClose, message, type }) => { // Added 'type' prop
  const modalClasses = `fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50
                        transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;
  const contentClasses = `bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center relative
                          transform transition-all duration-300 ease-out
                          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`;

  if (!isOpen) { // Simplified condition as pointer-events-none handles clickability
    return null;
  }

  const iconComponent = type === 'success' ? (
    <CheckCircle size={64} className="text-green-500 mb-4" />
  ) : (
    <AlertTriangle size={64} className="text-red-500 mb-4" />
  );
  
  const titleText = type === 'success' ? 'Message Sent!' : 'Submission Failed!';
  const buttonText = type === 'success' ? 'Got It!' : 'Close';

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
          {iconComponent}
          <h3 className="text-2xl font-bold text-dark mb-3">{titleText}</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{message}</p>
          <button
            onClick={onClose}
            className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold
                       hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};


const ContactUsPage = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // State for form submission message & modal
  const [submissionMessageText, setSubmissionMessageText] = useState('');
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [submissionType, setSubmissionType] = useState('success'); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent actual form submission

    // Formspree endpoint (REPLACE 'YOUR_FORMSPREE_FORM_ID' with your actual Formspree form ID)
    const formspreeUrl = "https://formspree.io/f/xovwyawb"; // Example Formspree ID

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Important for Formspree to return JSON responses
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setSubmissionMessageText('Thank you for your message! We will get back to you soon.');
        setSubmissionType('success');
        // Clear form fields on success
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.errors ? errorData.errors.map(err => err.message).join(', ') : 'Unknown error';
        setSubmissionMessageText(`Failed to send message: ${errorMessage}. Please try again.`);
        setSubmissionType('error');
        console.error('Formspree submission error:', errorData);
      }
    } catch (error) {
      setSubmissionMessageText('An error occurred. Please check your internet connection and try again.');
      setSubmissionType('error');
      console.error('Network or fetch error:', error);
    } finally {
      setIsSubmissionModalOpen(true); // Always open modal to show feedback
    }
  };

  const closeSubmissionModal = () => {
    setIsSubmissionModalOpen(false);
    setSubmissionMessageText(''); // Clear the message when modal closes
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-hero-contact bg-cover bg-center h-[50vh] flex items-center justify-center text-white shadow-xl mb-16 rounded-b-3xl"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-primary/40 rounded-b-3xl"></div>
        <div className="absolute inset-0 bg-black opacity-30 rounded-b-3xl"></div>
        <h1 className="z-10 text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif text-center drop-shadow-lg tracking-wide">
          Connect With Us
        </h1>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Contact Info & Map */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 bg-gradient-to-br from-white to-light p-8 md:p-12 rounded-2xl shadow-xl border border-primary-light">
          {/* Contact Details */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6 border-b-2 border-primary-light pb-3">
              Parish Office & Contact Information
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p className="flex items-start space-x-4">
                <MapPin size={32} className="text-primary flex-shrink-0" />
                <span>
                  <strong>Address:</strong> F8J7+VM9, Maria Rd, Amuwo Odofin Estate, Lagos 102102, Lagos
                </span>
              </p>
              <p className="flex items-start space-x-4">
                <Phone size={32} className="text-primary flex-shrink-0" />
                <span>
                  <strong>Phone:</strong> <a href="tel:(123) 456-7890" className="hover:underline">(123) 456-7890</a>
                </span>
              </p>
              <p className="flex items-start space-x-4">
                <Mail size={32} className="text-primary flex-shrink-0" />
                <span className="min-w-0 break-words">
                  <strong>Email:</strong> <a href="mailto:info@omphchurch.org" className="hover:underline">info@omphchurch.org</a>
                </span>
              </p>
              <p className="flex items-start space-x-4">
                <Clock size={32} className="text-primary flex-shrink-0" />
                <span>
                  <strong>Office Hours:</strong> Monday - Friday: 9:00 AM - 4:00 PM
                </span>
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-2xl font-semibold text-primary mb-4">Emergency Contact</h3>
              <p className="text-gray-700 text-lg">
                For Sacramental emergencies (Anointing of the Sick, etc.) outside office hours, please call: <a href="tel:(123) 987-6543" className="text-dark font-bold hover:underline">(123) 987-6543</a>
              </p>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary p-8 pb-4">Find Us on the Map</h2>
            <div className="relative w-full" style={{ paddingTop: '75%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3116188083177!2d3.3142351!3d6.4821617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8934ac1c14f9%3A0x46fc151d78b05690!2sOur%20Mother%20Of%20Perpertual%20Help%20Catholic%20Church%20Amuwo%20Odofin!5e0!3m2!1sen!2sng!4v1750903751057!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Church Location"
                className="absolute top-0 left-0"
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 p-4 text-center">
              *Map shows a placeholder location for Our Mother Of Perpetual Help Catholic Church.*
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-gradient-to-br from-light to-white p-8 md:p-12 rounded-2xl shadow-xl border border-primary-light">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-8 text-center leading-tight">Send Us a Message</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center mb-8">
            Have a question, prayer request, or feedback? Please use the form below, and we will get back to you as soon as possible.
          </p>
          <form className="max-w-xl mx-auto space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-800 text-lg font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name" // Added name attribute for Formspree
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 shadow-sm"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-800 text-lg font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email" // Added name attribute for Formspree
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 shadow-sm"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-800 text-lg font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject" // Added name attribute for Formspree
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 shadow-sm"
                placeholder="e.g., Prayer Request, Event Inquiry"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 text-lg font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message" // Added name attribute for Formspree
                rows="6"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 resize-y shadow-sm"
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-primary text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>

      {/* Render the Submission Success/Error Modal */}
      <SubmissionSuccessModal
        isOpen={isSubmissionModalOpen}
        onClose={closeSubmissionModal}
        message={submissionMessageText}
        type={submissionType} // Pass the type to the modal
      />
    </div>
  );
};

export default ContactUsPage;
