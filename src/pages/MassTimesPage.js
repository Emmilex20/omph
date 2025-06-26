import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, X } from 'lucide-react'; // Import necessary icons

// Reusable Schedule Details Modal Component
const ScheduleModal = ({ isOpen, onClose, title, image, details }) => {
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
            {image && <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg shadow-md mb-4" />}

            {details && details.length > 0 && (
              <div className="space-y-4 text-gray-700 text-base mb-6 w-full text-left">
                {details.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>
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


const MassTimesPage = () => {
  // State for the Schedule Modal
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [currentScheduleDetails, setCurrentScheduleDetails] = useState(null);

  const openScheduleModal = (schedule) => {
    setCurrentScheduleDetails(schedule);
    setIsScheduleModalOpen(true);
  };

  const closeScheduleModal = () => {
    setIsScheduleModalOpen(false);
    setTimeout(() => setCurrentScheduleDetails(null), 300);
  };

  const massSchedules = [
    {
      id: 'weekend-mass',
      title: 'Weekend Mass Schedule',
      summary: 'Saturday: 6:00 AM, Sunday: 6:30 AM, 8:30 AM, 10:30 AM (English), 6:00 PM (Evening Mass)',
      details: [
        'Our weekend Masses are the vibrant heart of our parish, offering diverse liturgical experiences to gather as a family of faith.',
        'Saturday (6:00 AM): A reflective anticipation of Sunday, perfect for those with busy weekend plans or preferring an evening service.',
        'Sunday 6:30 AM (Early Morning): A quiet, contemplative Mass for those who wish to start their Lord\'s Day in prayerful solitude.',
        'Sunday 8:30 AM : A spirited celebration of the Eucharist in Yoruba, embracing our rich cultural heritage with traditional hymns and readings.',
        'Sunday 10:30 AM (English Language Mass - Main): Our primary Sunday gathering, often featuring our parish choir, incense, and a solemn liturgy, fostering a strong sense of unity.',
        'Sunday 6:00 PM (Evening Mass): A dynamic and engaging Mass tailored for our youth and young adult community, with contemporary music and relevant homilies.'
      ],
      image: 'https://i0.wp.com/www.pottypadre.com/wp-content/uploads/2019/02/post-top-default.jpg?resize=592%2C323'
    },
    {
      id: 'weekday-mass',
      title: 'Weekday Mass Schedule',
      summary: 'Monday - Friday: 6:30 AM (Morning Devotion & Mass), 7:00 PM (Evening Mass)',
      details: [
        'Weekday Masses provide a consistent source of spiritual nourishment throughout your week, offering moments of peace and reflection amidst daily life.',
        '**Monday - Friday 6:30 AM (Morning Devotion & Mass):** Start your day by uniting with Christ in the Eucharist, preceded by a brief morning devotion.',
        '**Monday - Friday 7:00 PM (Evening Mass):** A serene close to your day, providing an opportunity for prayer and thanksgiving after work or school.',
        'Attending daily Mass is a powerful way to deepen your relationship with God and seek His grace for every challenge and blessing.'
      ],
      image: 'https://sclhbg.org/parish/wp-content/uploads/sites/2/2020/08/Weekday-Mass-Times-300x169.jpg'
    },
     {
      id: 'confession',
      title: 'Confession',
      summary: 'Saturday: 4:00 PM - 4:45 PM; Or by Appointment',
      details: [
        'The Sacrament of Reconciliation (Confession) is a beautiful opportunity to experience God\'s boundless mercy and forgiveness, bringing peace and healing to your soul.',
        'Regular Confession Times (Saturday 4:00 PM - 4:45 PM): Available on Saturday Evening. Please arrive promptly.',
        'By Appointment: If you are unable to make the regular time, please contact the parish office to schedule a private confession with one of our priests. We are here to serve you.'
      ],
      image: 'https://t4.ftcdn.net/jpg/03/99/40/37/360_F_399403754_FmDIpV0Y8Iw2Ey9YyUnaW3xH7hA7hXwn.jpg'
    }
  ];

  const otherDevotions = [
    {
      name: 'Holy Hour & Adoration',
      time: 'Every Thursday: 7:30 PM - 8:30 PM',
      location: 'Main Church Sanctuary',
      description: 'Spend an hour in silent prayer and adoration before the Blessed Sacrament.'
    },
    {
      name: 'Legion of Mary Prayer Meeting',
      time: 'Every Tuesday: 5:00 PM',
      location: 'Parish Hall Room 3',
      description: 'Join the Legion of Mary in praying the Rosary and spiritual discussions.'
    },
    {
        name: 'Divine Mercy Chaplet',
        time: 'Every Friday: 3:00 PM',
        location: 'Main Church Sanctuary',
        description: 'Gather to pray the Divine Mercy Chaplet, especially for the sick and dying.'
    }
  ];

  // Hero Section background image (using a powerful church interior)
  const heroBackgroundImage = 'https://cmsv2-assets.apptegy.net/uploads/11028/file/938312/2d9ac59c-24f0-4287-ac31-ecd822419845.jpeg';

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
          Mass & Confession Times
        </h1>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Introduction */}
        <section className="text-center max-w-5xl mx-auto mb-16 px-4">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            Join us for Holy Mass and other sacred devotions. The Eucharist is the source and summit of our Christian life, and we warmly invite you to participate in the spiritual life of our parish.
          </p>
        </section>

        {/* Mass & Confession Schedule Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {massSchedules.map((schedule) => (
            <div
              key={schedule.id}
              onClick={() => openScheduleModal(schedule)}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform
                         hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer
                         border border-gray-100 group flex flex-col justify-between"
            >
              <div className="w-full h-56 overflow-hidden relative">
                <img src={schedule.image} alt={schedule.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl md:text-3xl font-bold font-serif drop-shadow-md">{schedule.title}</h3>
                </div>
              </div>
              <div className="p-6 text-center flex-grow flex flex-col items-center">
                <p className="text-gray-700 leading-relaxed text-base mb-6 px-2">{schedule.summary}</p>
                <button
                  className="mt-auto bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold
                                   hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                                   shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Other Devotions Section */}
        <section className="bg-gradient-to-br from-light to-white p-8 md:p-12 rounded-2xl shadow-xl text-center border border-primary-light mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 leading-tight">Other Devotions & Prayer Opportunities</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            Beyond Mass and Confession, our parish offers various opportunities to deepen your prayer life and grow in faith. All are welcome to join these special devotions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {otherDevotions.map((devotion, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transform hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold text-dark mb-3 flex items-center space-x-3"><Calendar size={24} className="text-primary" /><span>{devotion.name}</span></h3>
                <p className="flex items-center space-x-2 text-gray-700 mb-2"><Clock size={20} className="text-accent" /><span>{devotion.time}</span></p>
                <p className="flex items-center space-x-2 text-gray-700 mb-4"><MapPin size={20} className="text-accent" /><span>{devotion.location}</span></p>
                <p className="text-gray-600 text-base leading-relaxed">{devotion.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action: Contact for Appointments */}
        <section className="bg-gradient-to-br from-primary/10 to-blue-100 p-8 md:p-12 rounded-2xl shadow-xl text-center border border-primary-light">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 leading-tight">
            Need a Special Appointment?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            If you require Sacramental assistance (e.g., Anointing of the Sick, special Confession time) or wish to speak with a priest, please do not hesitate to contact our parish office.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-white px-10 py-4 rounded-full text-xl font-bold
                       hover:bg-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl
                       focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            Contact the Parish Office
          </Link>
        </section>
      </div>

      {/* Render the Schedule Modal */}
      <ScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={closeScheduleModal}
        title={currentScheduleDetails?.title}
        image={currentScheduleDetails?.image}
        details={currentScheduleDetails?.details}
      />
    </div>
  );
};

export default MassTimesPage;
