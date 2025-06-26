import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, X } from 'lucide-react'; // Added X for modal close button

// NEW Reusable Submission Success Modal Component
const SubmissionSuccessModal = ({ isOpen, onClose, message }) => {
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
          <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 className="text-2xl font-bold text-dark mb-3">Message Sent!</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{message}</p>
          <button
            onClick={onClose}
            className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold
                       hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactUsPage = () => {
  // State for form submission message (no longer directly rendered, but used by modal)
  const [submissionMessageText, setSubmissionMessageText] = useState('');
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent actual form submission
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just show a success message via modal.
    console.log('Form submitted!');

    // Get form data (for demo purposes)
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    console.log({ name, email, subject, message });

    setSubmissionMessageText('Thank you for your message! We will get back to you soon.');
    setIsSubmissionModalOpen(true); // Open the modal

    // Optionally clear form fields after a short delay or successful submission
    e.target.reset(); // Resets the form fields
  };

  const closeSubmissionModal = () => {
    setIsSubmissionModalOpen(false);
    setSubmissionMessageText(''); // Clear the message when modal closes
  };

  // Using the provided image URL for the hero section
  const heroBackgroundImage = 'https://images.unsplash.com/photo-1510444390610-85f29f03221c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-white shadow-xl mb-16 rounded-b-3xl"
        style={{ backgroundImage: `url('${heroBackgroundImage}')` }}
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
              <p className="flex items-center space-x-4">
                <MapPin size={32} className="text-primary flex-shrink-0" />
                <span>
                  <strong>Address:</strong> 123 Divine Avenue, Faith City, GA 30303
                </span>
              </p>
              <p className="flex items-center space-x-4">
                <Phone size={32} className="text-primary flex-shrink-0" />
                <span>
                  <strong>Phone:</strong> <a href="tel:(123) 456-7890" className="hover:underline">(123) 456-7890</a>
                </span>
              </p>
              <p className="flex items-center space-x-4">
                <Mail size={32} className="text-primary flex-shrink-0" />
                <span className="break-words"> {/* Added break-words for responsiveness */}
                  <strong>Email:</strong> <a href="mailto:info@omphchurch.org" className="hover:underline">info@omphchurch.org</a>
                </span>
              </p>
              <p className="flex items-center space-x-4">
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
            <div className="relative w-full" style={{ paddingTop: '75%' }}> {/* Maintain aspect ratio */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.220199920038!2d-122.4194156!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858087f9c8f1e5%3A0x6b4c1a5d0b4e2f9d!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Church Location"
                className="absolute top-0 left-0" // Make iframe fill the parent div
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 p-4 text-center">
              *Map shows a placeholder location (Golden Gate Bridge). Replace with your church's actual coordinates.*
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
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 shadow-sm"
                placeholder="Enter your full name"
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
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 shadow-sm"
                placeholder="your.email@example.com"
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
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 shadow-sm"
                placeholder="e.g., Prayer Request, Event Inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 text-lg font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 resize-y shadow-sm"
                placeholder="Write your message here..."
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

      {/* Render the Submission Success Modal */}
      <SubmissionSuccessModal
        isOpen={isSubmissionModalOpen}
        onClose={closeSubmissionModal}
        message={submissionMessageText}
      />
    </div>
  );
};

export default ContactUsPage;
