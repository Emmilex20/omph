import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bird, Hand, Flame, BookOpen, Gift, Church, X } from 'lucide-react';

// Data for sacrament requirements to be displayed in the requirements modal
const sacramentRequirements = {
  baptism: {
    title: "Infant Baptism Requirements",
    details: [
      "Parents must be registered and active members of Our Mother Of Perpetual Help Catholic Church.",
      "At least one parent must be a baptized Catholic.",
      "A Baptism Preparation Class is required for both parents and godparents (sponsors).",
      "Godparents (sponsors) must be confirmed Catholics, at least 16 years old, and practicing their faith.",
      "Copies of the child's birth certificate are needed for parish records.",
      "Copy of parents' Catholic marriage certificate (if applicable, for canonical purposes)."
    ]
  },
  rcia: {
    title: "RCIA (Rite of Christian Initiation of Adults) Program Details",
    details: [
      "For adults (18+) who are unbaptized and wish to become Catholic.",
      "For baptized non-Catholics (e.g., Protestants, Orthodox) who wish to enter into full communion with the Catholic Church.",
      "For baptized Catholics who have not yet received the Sacraments of Confirmation and/or Eucharist.",
      "Weekly inquiry sessions and ongoing formation, typically from September to the Easter Vigil.",
      "A journey of faith, spiritual growth, and a deeper understanding of Catholic teachings and traditions.",
      "Involves various rites and scrutinies celebrated publicly within the parish community."
    ]
  }
};

// Reusable Requirements Modal Component (existing)
const RequirementsModal = ({ isOpen, onClose, title, requirements }) => {
  const modalClasses = `fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50
                        transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;
  const contentClasses = `bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative
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
        <h3 className="text-3xl font-bold font-serif text-primary mb-6 border-b-2 border-primary-light pb-3">
          {title}
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg md:text-base">
          {requirements.map((item, index) => (
            <li key={index} className="leading-relaxed">{item}</li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-8 bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold
                     hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                     shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
        >
          Close
        </button>
      </div>
    </div>
  );
};


// NEW Reusable Sacrament Details Modal Component
const SacramentDetailsModal = ({ isOpen, onClose, sacrament }) => {
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
        {sacrament && (
          <div>
            <h3 className="text-4xl font-bold font-serif text-primary mb-6 border-b-2 border-primary-light pb-3">
              {sacrament.name}
            </h3>
            <div className="mb-6">
              <img src={sacrament.image} alt={sacrament.name} className="w-full h-64 object-cover rounded-lg shadow-md mb-4" />
              <p className="text-gray-800 text-lg leading-relaxed">{sacrament.description}</p>
            </div>

            {/* Display full details if available */}
            {sacrament.fullDetails && sacrament.fullDetails.length > 0 && (
              <div className="space-y-4 text-gray-700 text-base">
                {sacrament.fullDetails.map((detail, index) => (
                  <p key={index} className="leading-relaxed">{detail}</p>
                ))}
              </div>
            )}
            {!sacrament.fullDetails && (
              <p className="text-gray-600 italic">More details for this sacrament will be added soon. Please contact the parish office for further information.</p>
            )}

            <button
              onClick={onClose}
              className="mt-8 bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold
                         hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                         shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


const SacramentsPage = () => {
  // State for Requirements Modal
  const [isRequirementsModalOpen, setIsRequirementsModalOpen] = useState(false);
  const [requirementsModalContent, setRequirementsModalContent] = useState({ title: '', details: [] });

  // State for Sacrament Details Modal
  const [isSacramentDetailsModalOpen, setIsSacramentDetailsModalOpen] = useState(false);
  const [currentSacramentDetails, setCurrentSacramentDetails] = useState(null); // Holds the full sacrament object

  // Functions for Requirements Modal
  const openRequirementsModal = (type) => {
    setRequirementsModalContent(sacramentRequirements[type]);
    setIsRequirementsModalOpen(true);
  };

  const closeRequirementsModal = () => {
    setIsRequirementsModalOpen(false);
    setTimeout(() => setRequirementsModalContent({ title: '', details: [] }), 300);
  };

  // Functions for Sacrament Details Modal
  const openSacramentDetailsModal = (sacrament) => {
    setCurrentSacramentDetails(sacrament);
    setIsSacramentDetailsModalOpen(true);
  };

  const closeSacramentDetailsModal = () => {
    setIsSacramentDetailsModalOpen(false);
    setTimeout(() => setCurrentSacramentDetails(null), 300);
  };


  const sacraments = [
    {
      name: 'Baptism',
      icon: Bird,
      description: 'The first sacrament of initiation, freeing us from original sin and making us children of God, reborn in Christ.',
      image: 'https://parracatholic.org/wp-content/uploads/2023/11/celebrate-becoming-a-catholic-child-baptism-shutterstock-2314171987-A-scaled.jpg',
      fullDetails: [
        "Baptism is the gateway to all other sacraments. It is the basis of the whole Christian life, the entry into life in the Spirit, and the door which gives access to the other sacraments.",
        "Through Baptism, we are freed from sin and reborn as sons and daughters of God; we become members of Christ, are incorporated into the Church and made sharers in her mission.",
        "For infants, parents and godparents undertake the responsibility to bring up the child in the Catholic faith.",
        "The rite involves the pouring of water over the head while invoking the Holy Trinity, anointing with chrism, and vesting in a white garment."
      ]
    },
    {
      name: 'Confirmation',
      icon: Flame,
      description: 'Strengthens us with the Holy Spirit, empowering us to be true witnesses of Christ and spread the faith.',
      image: 'https://www.expatcatholicparish.org/images/static/07/confirmation%20dove.png',
      fullDetails: [
        "Confirmation perfects Baptismal grace; it is the sacrament which gives the Holy Spirit in order to root us more deeply in the divine filiation, incorporate us more firmly into Christ, strengthen our bond with the Church, associate us more closely with her mission, and help us bear witness to the Christian faith in word accompanied by deeds.",
        "The Confirmation candidate is anointed with sacred chrism on the forehead while the bishop lays on hands and pronounces the words: 'Be sealed with the Gift of the Holy Spirit.'"
      ]
    },
    {
      name: 'Eucharist',
      icon: Hand,
      description: 'The Body and Blood of Christ, the true presence of our Lord, the source and summit of Christian life.',
      image: 'https://uploads.weconnect.com/e3b076492b5111d10941b8a743e45490f930e92a/vnnrii1yht4rq57f62139jn4frl.jpg',
      fullDetails: [
        "The Holy Eucharist completes Christian initiation. Those who have been raised to the dignity of the royal priesthood by Baptism and configured more deeply to Christ by Confirmation participate with the whole community in the Lord's own sacrifice by means of the Eucharist.",
        "At the Last Supper, on the night he was betrayed, our Savior instituted the Eucharistic sacrifice of his Body and Blood. This he did in order to perpetuate the sacrifice of the Cross throughout the ages until he should come again, and so to entrust to his beloved Church a memorial of his death and resurrection.",
        "Receiving the Eucharist is receiving Christ Himself, strengthening our union with Him and His Church."
      ]
    },
    {
      name: 'Penance',
      icon: BookOpen,
      description: 'Confession of sins to a priest, receiving God\'s boundless forgiveness and healing grace.',
      image: 'https://bustedhalo.com/wp-content/uploads/2011/11/priest-31.jpg',
      fullDetails: [
        "The Sacrament of Penance and Reconciliation (Confession) is the sacrament of spiritual healing. It is the means by which Catholics may confess sins committed after Baptism and have them absolved by God through the administration of a priest.",
        "It involves five steps: examination of conscience, sorrow for sin, confession of sins, firm purpose of amendment, and penance."
      ]
    },
    {
      name: 'Anointing of the Sick',
      icon: Gift,
      description: 'Offers spiritual strength, peace, and healing comfort to those who are gravely ill or elderly.',
      image: 'https://www.stlouisparish.org/wp-content/uploads/2024/09/Anointing-of-the-Sick_hands.webp',
      fullDetails: [
        "The Anointing of the Sick is a sacrament of healing, administered to those who are suffering from grave illness, approaching surgery, or old age.",
        "It provides spiritual strength, peace, and courage to overcome the difficulties inherent in the condition of grave illness or the frailty of old age.",
        "The priest anoints the forehead and hands of the sick person with oil blessed by the bishop."
      ]
    },
    {
      name: 'Holy Orders',
      icon: Church,
      description: 'Ordination of bishops, priests, and deacons, dedicating them to serve the Church in Christ\'s name.',
      image: 'https://lh6.googleusercontent.com/proxy/l84X_bUdrqOJt2pdGTE9rBlY6ZY0ywhGIP5pJbL_5Eo0JQqgPfHgXLBo5YlHcduxB2cSfeUwozMEnurKf6VZtfXTvEyl5Uuv47in7xDbbPV_aMocFd_P4kxfDULHFMsft2lSimVX', // Consider replacing with a higher quality, relevant image
      fullDetails: [
        "Holy Orders is the sacrament through which the mission entrusted by Christ to his apostles continues to be exercised in the Church until the end of time: thus it is the sacrament of apostolic ministry. It includes three degrees: episcopate (bishops), presbyterate (priests), and diaconate (deacons).",
        "Through ordination, sacred power is conferred upon those who receive this sacrament, enabling them to serve the People of God in the person of Christ the Head."
      ]
    },
    {
      name: 'Matrimony',
      icon: Hand,
      description: 'A lifelong covenant between a man and a woman, reflecting Christ\'s unwavering love for the Church.',
      image: 'https://mcgrathblog.nd.edu/hubfs/Imported_Blog_Media/OMalley-Marriage-1-crop.jpg',
      fullDetails: [
        "The Sacrament of Matrimony establishes a covenant by which a man and a woman form with each other an intimate communion of life and love, which is ordered to the good of the spouses and the procreation and education of offspring.",
        "Christ the Lord raised marriage between the baptized to the dignity of a sacrament. This sacrament signifies the union of Christ and the Church.",
        "It is a lifelong, faithful, and fruitful union, binding in love and commitment."
      ]
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen text-gray-800">
      {/* Hero Section: Sacraments */}
      <section
        className="relative bg-center bg-cover h-[50vh] flex items-center justify-center text-white shadow-xl mb-16"
        style={{ backgroundImage: `url('https://cdn.catholic.com/wp-content/uploads/sacrament-1200x400.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-primary/40 rounded-b-3xl"></div>
        <div className="absolute inset-0 bg-black opacity-30 rounded-b-3xl"></div>
        <h1 className="z-10 text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif text-center drop-shadow-lg tracking-wide">
          The Seven Sacraments
        </h1>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Introduction */}
        <section className="text-center max-w-5xl mx-auto mb-16 px-4">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            The Sacraments are outward signs instituted by Christ to give grace. They are the living encounters
            with Christ in His Church, foundational to our Catholic faith, marking significant moments
            in our spiritual journey and connecting us deeply with God's divine life.
          </p>
        </section>

        {/* Sacraments Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sacraments.map((sacrament, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform
                         hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group
                         border border-gray-100"
            >
              <div className="w-full h-56 md:h-64 overflow-hidden relative">
                <img
                  src={sacrament.image}
                  alt={sacrament.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white text-3xl font-bold font-serif drop-shadow-md">{sacrament.name}</h3>
                </div>
              </div>
              <div className="p-6 text-center flex flex-col items-center">
                <div className="bg-primary-light p-4 rounded-full shadow-md mb-4 -mt-12 z-10">
                  <sacrament.icon size={40} className="text-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed text-base mb-6 px-2">{sacrament.description}</p>
                {/* Updated button to open SacramentDetailsModal */}
                <button
                  onClick={() => openSacramentDetailsModal(sacrament)}
                  className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold
                                   hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                                   shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Preparing for Sacraments */}
        <section className="mt-16 bg-gradient-to-br from-white to-light p-8 md:p-12 rounded-2xl shadow-xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-primary mb-10 leading-tight">
            Preparing for Your Sacramental Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            If you or a loved one are discerning or preparing to receive a Sacrament, our parish offers comprehensive and loving preparation programs. We are here to guide you through this profound and sacred journey with faith and support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-8 rounded-xl shadow-lg text-left border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300">
              <h4 className="text-2xl font-bold text-dark mb-3">Infant Baptism</h4>
              <p className="text-gray-700 mb-5 text-base leading-relaxed">
                Parents wishing to have their child baptized are required to attend a preparation class to understand the beauty and responsibility of this Sacrament.
              </p>
              <button
                onClick={() => openRequirementsModal('baptism')}
                className="inline-flex items-center text-primary hover:text-accent font-semibold text-lg
                                            transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-primary-light"
              >
                View Requirements
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-left border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300">
              <h4 className="text-2xl font-bold text-dark mb-3">RCIA (Becoming Catholic)</h4>
              <p className="text-gray-700 mb-5 text-base leading-relaxed">
                The Rite of Christian Initiation of Adults is for those seeking to join the Catholic Church through Baptism, Confirmation, and Eucharist.
              </p>
              <button
                onClick={() => openRequirementsModal('rcia')}
                className="inline-flex items-center text-primary hover:text-accent font-semibold text-lg
                                            transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-primary-light"
              >
                Explore RCIA
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center bg-primary text-white px-10 py-4 rounded-full text-xl font-bold
                       hover:bg-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl
                       focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            Contact Us for Preparation
          </Link>
        </section>
      </div>

      {/* Render the Requirements Modal (existing) */}
      <RequirementsModal
        isOpen={isRequirementsModalOpen}
        onClose={closeRequirementsModal}
        title={requirementsModalContent.title}
        requirements={requirementsModalContent.details}
      />

      {/* Render the NEW Sacrament Details Modal */}
      <SacramentDetailsModal
        isOpen={isSacramentDetailsModalOpen}
        onClose={closeSacramentDetailsModal}
        sacrament={currentSacramentDetails}
      />
    </div>
  );
};

export default SacramentsPage;
