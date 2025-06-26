import React, { useState } from 'react';
import { Banknote, CreditCard, X, ExternalLink } from 'lucide-react'; // Added X and ExternalLink for modal

// Reusable Modal Component for Giving and Stewardship Details
const GivingDetailsModal = ({ isOpen, onClose, title, description, details, givingOptions, ctaText, ctaUrl }) => {
  const modalClasses = `fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50
                        transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;
  const contentClasses = `bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto
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
        {title && (
          <div className="flex flex-col items-center text-center">
            <h3 className="text-4xl font-bold font-serif text-primary mb-6 border-b-2 border-primary-light pb-3 w-full">
              {title}
            </h3>
            {description && <p className="text-gray-800 text-lg leading-relaxed mb-6">{description}</p>}

            {/* Conditional rendering based on whether givingOptions or general details are present */}
            {givingOptions && givingOptions.length > 0 ? (
              <div className="space-y-6 text-gray-700 text-base mb-6 w-full text-left">
                {givingOptions.map((option, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-semibold text-dark text-lg mb-1">{option.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                    <p className="font-mono text-sm text-blue-700 bg-blue-50 p-2 rounded-md break-all">
                      {option.accountInfo}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              details && details.length > 0 && (
                <div className="space-y-4 text-gray-700 text-base mb-6 w-full text-left">
                  {details.map((item, index) => (
                    typeof item === 'string' ? (
                      <p key={index} className="leading-relaxed">{item}</p>
                    ) : ( // Assume it's a list item if not string
                      <li key={index} className="leading-relaxed list-disc list-inside">{item.text}</li>
                    )
                  ))}
                </div>
              )
            )}

            {ctaText && ctaUrl && (
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold
                           hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                           shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light
                           inline-flex items-center space-x-2"
              >
                <span>{ctaText}</span>
                <ExternalLink size={20} />
              </a>
            )}
            <button
              onClick={onClose}
              className="mt-8 bg-gray-300 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold
                         hover:bg-gray-400 transform hover:-translate-y-1 transition-all duration-300
                         shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


const GivingPage = () => {
  // State for Online Giving Modal
  const [isOnlineGivingModalOpen, setIsOnlineGivingModalOpen] = useState(false);
  const [onlineGivingModalContent, setOnlineGivingModalContent] = useState(null);

  // State for Stewardship Modal
  const [isStewardshipModalOpen, setIsStewardshipModalOpen] = useState(false);
  const [stewardshipModalContent, setStewardshipModalContent] = useState(null);

  // Content for Online Giving Modal
  const onlineGivingDetails = {
    title: 'Secure Online Giving Options',
    description: 'Please select from the giving options below. Your generosity supports various vital ministries and operations of our parish. For direct bank transfers, please use the account details provided below for the specific fund.',
    givingOptions: [ // New property to hold structured giving options
        {
            name: 'General Offertory',
            description: 'Supports the daily operations, maintenance, and general ministries of the parish.',
            accountInfo: 'Bank Name: GTBank, Account Name: OMPH Catholic Church, Account No: 0012345678, Branch: Victoria Island'
        },
        {
            name: 'Building & Maintenance Fund',
            description: 'Dedicated to the upkeep, repairs, and future development of our church facilities.',
            accountInfo: 'Bank Name: Zenith Bank, Account Name: OMPH Church Building Fund, Account No: 9876543210, Branch: Lekki'
        },
        {
            name: 'Youth Ministry Programs',
            description: 'Funds activities, retreats, and resources for our vibrant youth ministry.',
            accountInfo: 'Bank Name: Access Bank, Account Name: OMPH Youth Connect, Account No: 1122334455, Branch: Ikoyi'
        },
        {
            name: 'Social Justice & Outreach',
            description: 'Supports our initiatives to serve the poor, vulnerable, and advocate for justice in the community.',
            accountInfo: 'Bank Name: First Bank, Account Name: OMPH Charity Fund, Account No: 5544332211, Branch: Marina'
        },
        {
            name: 'Special Collections',
            description: 'For specific annual collections (e.g., Peter\'s Pence, Catholic Relief Services). Details announced weekly.',
            accountInfo: 'Please refer to the weekly bulletin or contact the parish office for current special collection details and temporary account numbers.'
        }
    ],
    ctaText: 'Go to Secure Online Portal',
    ctaUrl: 'https://yourparishonlinegivinglink.org' // REPLACE THIS WITH YOUR ACTUAL NIGERIAN ONLINE GIVING PORTAL LINK (e.g., Paystack, Flutterwave link)
  };

  // Content for Stewardship Modal (remains the same structure as before)
  const stewardshipDetails = {
    title: 'Understanding Christian Stewardship',
    description: '"As each one has received a gift, use it to serve one another as good stewards of God\'s varied grace." (1 Peter 4:10)',
    details: [
      "Stewardship is a way of life, recognizing that all we have and all we are—our time, talents, and treasure—are gifts from God.",
      "It is a call to be responsible caretakers of these gifts, using them wisely and generously for the glory of God and the building of His Kingdom.",
      "", // Empty string for a paragraph break
      "Time: Dedicating moments for prayer, Mass, and spiritual growth.",
      "Talent: Discerning and using your unique abilities to serve the Church and community, whether through ministry, volunteering, or simply being a good neighbor.",
      "Treasure: Sharing a portion of your financial resources, given in gratitude, to support the needs and mission of the Church.",
      "", // Empty string for a paragraph break
      "Embracing stewardship is about living a life of gratitude and generous response to God's abundant blessings. We invite you to explore how you can deepen your commitment to stewardship within our parish."
    ],
    ctaText: 'Explore Ministry Opportunities',
    ctaUrl: '/ministries' // Links to the Ministries page
  };


  // Functions to manage Online Giving Modal
  const openOnlineGivingModal = () => {
    setOnlineGivingModalContent(onlineGivingDetails);
    setIsOnlineGivingModalOpen(true);
  };

  const closeOnlineGivingModal = () => {
    setIsOnlineGivingModalOpen(false);
    setTimeout(() => setOnlineGivingModalContent(null), 300);
  };

  // Functions to manage Stewardship Modal
  const openStewardshipModal = () => {
    setStewardshipModalContent(stewardshipDetails);
    setIsStewardshipModalOpen(true);
  };

  const closeStewardshipModal = () => {
    setIsStewardshipModalOpen(false);
    setTimeout(() => setStewardshipModalContent(null), 300);
  };


  // Hero Section background image (explicitly set as per request)
  const heroBackgroundImage = 'https://images.unsplash.com/photo-1510444390610-85f29f03221c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Keeping the image as requested

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
          Online Giving & Stewardship
        </h1>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Introduction */}
        <section className="text-center max-w-5xl mx-auto mb-16 px-4">
          <p className="text-2xl font-serif italic text-gray-700 leading-relaxed mb-6">
            "God loves a cheerful giver." (2 Corinthians 9:7)
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            Your generous contributions are vital to our parish's mission and ministries. They allow us to continue providing spiritual nourishment, educational programs, and essential outreach services to our community. Thank you for your prayerful consideration and unwavering support.
          </p>
        </section>

        {/* Giving Options */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 bg-gradient-to-br from-white to-light p-8 md:p-12 rounded-2xl shadow-xl border border-primary-light">
          {/* Online Giving Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center border border-gray-100 transform hover:scale-[1.01] hover:shadow-2xl transition-all duration-300">
            <CreditCard size={64} className="text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-dark mb-4">Online Giving (Recommended)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Make a secure, one-time or recurring donation directly through our trusted online portal. It's easy, convenient, and allows for consistent support.
            </p>
            <button
              onClick={openOnlineGivingModal} // This button now opens the modal with account details
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold
                         hover:bg-dark transition-all duration-300 transform hover:-translate-y-1
                         shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
            >
              Give Online Now
            </button>
          </div>
          {/* Other Ways to Give Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center border border-gray-100 transform hover:scale-[1.01] hover:shadow-2xl transition-all duration-300">
            <Banknote size={64} className="text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-dark mb-4">Other Ways to Give</h3>
            <ul className="text-gray-700 text-left space-y-3 mb-6 list-disc list-inside">
              <li><strong>Offertory Collection:</strong> During Mass each weekend.</li>
              <li><strong>Mail a Check:</strong> Send to Parish Office at 123 Divine Ave, Faith City, GA 30303.</li>
              <li><strong>Stock or Planned Giving:</strong> Contact the Parish Administrator for details.</li>
            </ul>
            <a
              href="/contact" // Link to the Contact Us page
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold
                         hover:bg-dark transition-all duration-300 transform hover:-translate-y-1
                         shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
            >
              Contact Us About Giving
            </a>
          </div>
        </section>

        {/* Stewardship Message */}
        <section className="mt-16 bg-gradient-to-br from-light to-white p-8 md:p-12 rounded-2xl shadow-xl text-center border border-primary-light">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-8 leading-tight">What is Stewardship?</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-6 leading-relaxed">
            Stewardship is more than just financial giving; it's recognizing that all we have—our time, talents, and treasure—are gifts from God. As good stewards, we are called to use these gifts wisely and generously for the glory of God and the benefit of others.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We invite you to prayerfully consider how you can share your unique gifts to strengthen our parish and spread the Gospel message.
          </p>
          <button
            onClick={openStewardshipModal}
            className="mt-8 bg-primary text-white px-8 py-4 rounded-full text-lg font-bold
                       hover:bg-dark transition-all duration-300 transform hover:-translate-y-1
                       shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            Learn More About Stewardship
          </button>
        </section>
      </div>

      {/* Render Modals */}
      <GivingDetailsModal
        isOpen={isOnlineGivingModalOpen}
        onClose={closeOnlineGivingModal}
        title={onlineGivingModalContent?.title}
        description={onlineGivingModalContent?.description}
        givingOptions={onlineGivingModalContent?.givingOptions} // Pass givingOptions here
        ctaText={onlineGivingModalContent?.ctaText}
        ctaUrl={onlineGivingModalContent?.ctaUrl}
      />

      <GivingDetailsModal
        isOpen={isStewardshipModalOpen}
        onClose={closeStewardshipModal}
        title={stewardshipModalContent?.title}
        description={stewardshipModalContent?.description}
        details={stewardshipModalContent?.details} // Pass general details here
        ctaText={stewardshipModalContent?.ctaText}
        ctaUrl={stewardshipModalContent?.ctaUrl}
      />
    </div>
  );
};

export default GivingPage;
