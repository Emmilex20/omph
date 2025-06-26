import React, { useState } from 'react';
import { ShieldCheck, Mail, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Reusable Contact Modal Component (Copied from FaqsPage for self-containment if user creates new file)
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
          <h3 className="text-2xl font-bold text-dark mb-4">Have Questions About Privacy?</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            If you have any concerns or questions regarding our Privacy Policy, please don't hesitate to contact our parish office.
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


const PrivacyPolicyPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  // Hero Section background image (a relevant image)
  const heroBackgroundImage = 'https://t4.ftcdn.net/jpg/03/06/66/21/360_F_306662199_pYjkVvqhcYzv3Sc7PqFVIb9k9FKWffcL.jpg'; // Reusing a common church image

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
          Privacy Policy
        </h1>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Introduction */}
        <section className="text-center max-w-5xl mx-auto mb-16 px-4">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            Your privacy is of utmost importance to us. This Privacy Policy outlines how Our Mother of Perpetual Help Catholic Church collects, uses, maintains, and discloses information collected from users of our website.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <em>Last updated: June 26, 2025</em>
          </p>
        </section>

        {/* Policy Details */}
        <section className="bg-gradient-to-br from-white to-light p-8 md:p-12 rounded-2xl shadow-xl border border-primary-light mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 text-center leading-tight">
            Our Commitment to Your Privacy
          </h2>
          <div className="space-y-10 text-gray-700 text-lg leading-relaxed">

            <div>
              <h3 className="text-3xl font-semibold text-dark mb-4 flex items-center space-x-3">
                <ShieldCheck size={32} className="text-primary flex-shrink-0" />
                <span>Information We Collect</span>
              </h3>
              <p className="mb-4">
                We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, make a donation, or in connection with other activities, services, features, or resources we make available on our Site.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, physical address (for registration/donations).</li>
                <li><strong>Non-personal Identification Information:</strong> Browser name, type of computer, technical information about Users means of connection to our Site (such as the operating system and the Internet service providers utilized).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-dark mb-4 flex items-center space-x-3">
                <ShieldCheck size={32} className="text-primary flex-shrink-0" />
                <span>How We Use Collected Information</span>
              </h3>
              <p className="mb-4">
                Our Mother of Perpetual Help Catholic Church may collect and use Users' personal information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>**To improve customer service:** Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                <li>**To personalize user experience:** We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
                <li>**To process donations:** We may use the information Users provide about themselves when making a donation only to provide service to that donation.</li>
                <li>**To send periodic emails:** We may use the email address to send User information and updates pertaining to their registration or donation. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-dark mb-4 flex items-center space-x-3">
                <ShieldCheck size={32} className="text-primary flex-shrink-0" />
                <span>How We Protect Your Information</span>
              </h3>
              <p className="mb-4">
                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.
              </p>
              <p>
                Sensitive and private data exchange between the Site and its Users happens over an SSL secured communication channel and is encrypted and protected with digital signatures.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-dark mb-4 flex items-center space-x-3">
                <ShieldCheck size={32} className="text-primary flex-shrink-0" />
                <span>Sharing Your Personal Information</span>
              </h3>
              <p>
                We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-dark mb-4 flex items-center space-x-3">
                <ShieldCheck size={32} className="text-primary flex-shrink-0" />
                <span>Your Rights</span>
              </h3>
              <p className="mb-4">
                Depending on your location and applicable data protection laws, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>The right to access the personal data we hold about you.</li>
                <li>The right to request correction of inaccurate personal data.</li>
                <li>The right to request erasure of your personal data.</li>
                <li>The right to object to the processing of your personal data.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-dark mb-4 flex items-center space-x-3">
                <ShieldCheck size={32} className="text-primary flex-shrink-0" />
                <span>Changes to This Privacy Policy</span>
              </h3>
              <p>
                Our Mother of Perpetual Help Catholic Church has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
              </p>
            </div>

          </div>
        </section>

        {/* Call to Action: Contact Us for Questions */}
        <section className="mt-16 bg-gradient-to-br from-primary/10 to-blue-100 p-8 md:p-12 rounded-2xl shadow-xl text-center border border-primary-light">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 leading-tight">
            Questions or Concerns?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us.
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

export default PrivacyPolicyPage;
