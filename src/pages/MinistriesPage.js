import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Music, HeartHandshake, Home, Leaf, DollarSign, Lightbulb, X } from 'lucide-react';

// NEW Reusable Ministry Details Modal Component
const MinistryDetailsModal = ({ isOpen, onClose, ministry }) => {
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
        {ministry && (
          <div>
            <h3 className="text-4xl font-bold font-serif text-primary mb-6 border-b-2 border-primary-light pb-3">
              {ministry.name}
            </h3>
            <div className="mb-6">
              <img src={ministry.image} alt={ministry.name} className="w-full h-64 object-cover rounded-lg shadow-md mb-4" />
              <p className="text-gray-800 text-lg leading-relaxed">{ministry.description}</p>
            </div>

            {/* Display full details if available */}
            {ministry.fullDetails && ministry.fullDetails.length > 0 && (
              <div className="space-y-4 text-gray-700 text-base">
                {ministry.fullDetails.map((detail, index) => (
                  <p key={index} className="leading-relaxed">{detail}</p>
                ))}
              </div>
            )}
            {!ministry.fullDetails && (
              <p className="text-gray-600 italic">More details for this ministry will be added soon. Please contact the parish office for further information.</p>
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


const MinistriesPage = () => {
  // State for Ministry Details Modal
  const [isMinistryDetailsModalOpen, setIsMinistryDetailsModalOpen] = useState(false);
  const [currentMinistryDetails, setCurrentMinistryDetails] = useState(null); // Holds the full ministry object

  // Functions for Ministry Details Modal
  const openMinistryDetailsModal = (ministry) => {
    setCurrentMinistryDetails(ministry);
    setIsMinistryDetailsModalOpen(true);
  };

  const closeMinistryDetailsModal = () => {
    setIsMinistryDetailsModalOpen(false);
    setTimeout(() => setCurrentMinistryDetails(null), 300); // Clear content after animation
  };

  const ministries = [
    {
      name: 'Liturgical Ministries',
      description: 'Lectors, Eucharistic Ministers, Altar Servers, Sacristans – helping us celebrate the Mass reverently and beautifully.',
      icon: BookOpen,
      image: 'https://lh4.googleusercontent.com/proxy/1TAdERW0Y0GLt1L2DP-LPfehTpUD9gqUTjNZ6VLrpFjksJ4Qb_PedkTqhyl6v8bV4t0XRC-KUVipbn9IyyaDSmgZdRw_jAUcyOQvHxQcAZPGGoaLJpA', // Updated image URL
      fullDetails: [
        "Liturgical Ministries are at the heart of our worship. Volunteers serve in various roles to ensure our Masses and other liturgical celebrations are conducted with dignity and grace.",
        "Roles include: **Lectors** (proclaiming the Word of God), **Eucharistic Ministers** (assisting in distributing Holy Communion), **Altar Servers** (assisting the priest at the altar), and **Sacristans** (preparing the sacred vessels and vestments).",
        "These ministries offer a profound way to participate actively in the Mass and serve Christ directly."
      ]
    },
    {
      name: 'Music Ministry',
      description: 'Choirs, cantors, and instrumentalists enhancing our worship through sacred music and song.',
      icon: Music,
      image: 'https://stmarysba.archtoronto.org/siteassets/media/images/panoramas/music-ministry.jpg', // Updated image URL
      fullDetails: [
        "Our Music Ministry elevates our prayer and worship experience through beautiful sacred music. From traditional hymns to contemporary praise, music plays a vital role in our liturgy.",
        "Opportunities include: Parish Choir, Youth Choir, Cantors, Instrumentalists (organists, pianists, guitarists, etc.).",
        "No prior experience is needed for some roles, just a willingness to offer your voice or talent in praise of God."
      ]
    },
    {
      name: 'Faith Formation',
      description: 'Catechesis for children, youth, and adults, including RCIA, Bible studies, and ongoing spiritual enrichment.',
      icon: Lightbulb,
      image: 'https://staugch.org/x/cdn/?https://storage.googleapis.com/wzukusers/user-30485594/images/5a9074fab0f2dTWMZ1f2/Faith-Formation_d400.jpg', // Updated image URL
      fullDetails: [
        "The Faith Formation Ministry is dedicated to nurturing spiritual growth and a deeper understanding of our Catholic faith for all ages.",
        "Programs offered: **Religious Education (CCD)** for children and youth, **Rite of Christian Initiation of Adults (RCIA)** for those interested in becoming Catholic, **Adult Faith Formation** sessions on various topics, and **Bible Study groups**.",
        "We believe that faith is a lifelong journey, and our programs are designed to support every step of that journey."
      ]
    },
    {
      name: 'Youth Ministry',
      description: 'Programs and events for teens to grow in faith, fellowship, and service, building strong Catholic foundations.',
      icon: Users,
      image: 'https://uploads.weconnect.com/fd337eb1a31e4bcfc4ed0df13b6df52fa01b44e0/y4nkl2vvnmezz3ie2d9eucz0cnl.jpg', // Updated image URL
      fullDetails: [
        "Our Youth Ministry creates a vibrant and engaging environment where teenagers can deepen their relationship with Christ and the Church.",
        "Activities include: weekly youth group meetings, retreats, service projects, social events, and opportunities for leadership development.",
        "We aim to foster a strong sense of community, equip youth with the tools to live their faith, and prepare them for future roles within the Church and society."
      ]
    },
    {
      name: 'Social Justice & Outreach',
      description: 'Serving the poor and vulnerable, advocating for justice, and providing compassionate community support based on Catholic social teaching.',
      icon: HeartHandshake,
      image: 'https://uploads.weconnect.com/932b3a76edb10d12e6230b6181db16539432f6c5/lk7en8gjyuvce61u8pw9dq3pmcl.png', // Updated image URL
      fullDetails: [
        "Inspired by Catholic Social Teaching, this ministry reaches out to those in need within our parish and wider community.",
        "Our work includes: coordinating food drives, supporting local charities, visiting the sick and homebound, and advocating for human dignity and justice.",
        "We strive to live out the Gospel call to serve our brothers and sisters, especially the marginalized and forgotten."
      ]
    },
    {
      name: 'Parish Life & Fellowship',
      description: 'Creating opportunities for parishioners of all ages to connect, socialize, and build a stronger, more vibrant community.',
      icon: Home,
      image: 'https://i0.wp.com/festaconline.com.ng/wp-content/uploads/2017/10/Priestly-Ordination-at-Our-Mother-of-Perpetual-Help-Catholic-Church-Amuwo-Odofin-2.jpg?fit=700%2C378&ssl=1', // Updated image URL
      fullDetails: [
        "This ministry focuses on fostering a welcoming and inclusive environment where parishioners can build relationships and experience Christian fellowship.",
        "Activities include: organizing parish potlucks, social gatherings, family events, new member welcomes, and hospitality during Sunday Masses.",
        "We believe that a strong community is built on genuine connections and shared experiences."
      ]
    },
    {
      name: 'Bereavement Ministry',
      description: 'Providing compassionate comfort and spiritual support to those grieving the loss of a loved one.',
      icon: Leaf,
      image: 'https://www.sfxlg.org/vimages/shared/vnews/stories/599b8fe02b5b5/1_BereavementImage2.jpg', // Updated image URL
      fullDetails: [
        "The Bereavement Ministry offers support and solace to parishioners navigating the difficult journey of grief after the loss of a loved one.",
        "Our volunteers provide: compassionate listening, prayer support, resources for grief counseling, and follow-up contact.",
        "We aim to be a comforting presence, reminding those who mourn that they are not alone and that the Church walks with them in their sorrow."
      ]
    },
    {
      name: 'Stewardship & Development',
      description: 'Encouraging the generous sharing of time, talent, and treasure to support our parish\'s mission and growth.',
      icon: DollarSign,
      image: 'https://images.squarespace-cdn.com/content/v1/5f775b52d7c2ac52985f3b36/1626904777842-YO43RA2D74YN55EO8O16/NKCC+website+header+%282%29.png', // Updated image URL
      fullDetails: [
        "The Stewardship & Development Ministry educates and inspires parishioners to embrace a lifestyle of grateful giving – of their time, unique talents, and financial resources.",
        "We facilitate various initiatives to sustain and grow our parish programs, facilities, and outreach efforts.",
        "Every gift, no matter how small, contributes to the vitality of our parish and its ability to serve God's people."
      ]
    },
  ];


  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen text-gray-800">
      {/* Hero Section: Ministries */}
      <section
        className="relative bg-hero-ministry bg-center bg-cover h-[50vh] flex items-center justify-center text-white shadow-xl mb-16"      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-primary/40 rounded-b-3xl"></div>
        <div className="absolute inset-0 bg-black opacity-30 rounded-b-3xl"></div>
        <h1 className="z-10 text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif text-center drop-shadow-lg tracking-wide">
          Serve, Grow, Connect
        </h1>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Introduction */}
        <section className="text-center max-w-5xl mx-auto mb-16 px-4">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            Our parish thrives because of the selfless dedication of our volunteers. Explore the many ways you can share your gifts and talents to serve God and build up our vibrant community. There's a ministry for everyone!
          </p>
        </section>

        {/* Ministries Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform
                         hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group
                         border border-gray-100"
            >
              <div className="w-full h-56 md:h-64 overflow-hidden relative">
                <img
                  src={ministry.image}
                  alt={ministry.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white text-3xl font-bold font-serif drop-shadow-md">{ministry.name}</h3>
                </div>
              </div>
              <div className="p-6 text-center flex flex-col items-center">
                <div className="bg-primary-light p-4 rounded-full shadow-md mb-4 -mt-12 z-10">
                  <ministry.icon size={40} className="text-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed text-base mb-6 px-2">{ministry.description}</p>
                {/* Button to open Ministry Details Modal */}
                <button
                  onClick={() => openMinistryDetailsModal(ministry)}
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

        {/* Call to Action: Get Involved */}
        <section className="mt-16 bg-gradient-to-br from-white to-light p-8 md:p-12 rounded-2xl shadow-xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-primary mb-10 leading-tight">
            Ready to Share Your Gifts?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            Whether you have a little time or a lot, your unique gifts and talents are invaluable to our parish. Connect with us to find the perfect ministry that aligns with your passions and helps build God's Kingdom.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center bg-primary text-white px-10 py-4 rounded-full text-xl font-bold
                       hover:bg-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl
                       focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            Contact the Parish Office
          </Link>
        </section>
      </div>

      {/* Render the NEW Ministry Details Modal */}
      <MinistryDetailsModal
        isOpen={isMinistryDetailsModalOpen}
        onClose={closeMinistryDetailsModal}
        ministry={currentMinistryDetails}
      />
    </div>
  );
};

export default MinistriesPage;
