import React, { useState } from 'react';
import { MapPin, Clock, X } from 'lucide-react'; // Import X for the close button

// Reusable InfoModal Component for both Mass Schedule and Event Details
const InfoModal = ({ isOpen, onClose, title, image, description, details, time, location }) => {
  const modalClasses = `fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50
                        transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;
  const contentClasses = `bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto
                          transform transition-all duration-300 ease-out
                          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`;

  // Ensure modal is removed from DOM when not open to allow smooth transitions
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
          <div>
            <h3 className="text-4xl font-bold font-serif text-primary mb-6 border-b-2 border-primary-light pb-3">
              {title}
            </h3>
            {image && <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg shadow-md mb-4" />}
            {description && <p className="text-gray-800 text-lg leading-relaxed mb-4">{description}</p>}

            {(time || location) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-md mb-4">
                {time && <p className="flex items-center space-x-2"><Clock size={20} /><span>{time}</span></p>}
                {location && <p className="flex items-center space-x-2"><MapPin size={20} /><span>{location}</span></p>}
              </div>
            )}

            {details && details.length > 0 && (
              <div className="space-y-4 text-gray-700 text-base">
                {details.map((detail, index) => (
                  <p key={index} className="leading-relaxed">{detail}</p>
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


const EventsPage = () => {
  // State for Mass Schedule Modal
  const [isMassModalOpen, setIsMassModalOpen] = useState(false);
  const [currentMassDetails, setCurrentMassDetails] = useState(null);

  // State for Upcoming Events Modal
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [currentEventDetails, setCurrentEventDetails] = useState(null);

  const massSchedules = [
    {
      id: 'weekend',
      title: 'Weekend Masses',
      summary: 'Saturday: 6:00 AM, Sunday: 8:00 AM, 10:00 AM (Family Mass), 12:00 PM (Solemn Mass)',
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

  const upcomingEvents = [
    {
      id: 1,
      date: 'JUL 20',
      title: 'Annual Parish Picnic',
      time: '1:00 PM - 5:00 PM',
      location: 'Parish Grounds & Pavilion',
      description: 'Join us for a fun-filled day with food, games, and fellowship for all ages. RSVP by July 15th!',
      image: 'https://d3ksmo962grohy.cloudfront.net/images/stories/drag-and-drop/Parish_Picnics_2025_resized-1.jpg?1748871616',
      details: [
        'Get ready for our most anticipated family event of the year! The Annual Parish Picnic is a fantastic opportunity for parishioners of all ages to gather, share a meal, and enjoy spirited camaraderie.',
        'Activities will include: BBQ lunch (hot dogs, hamburgers, vegetarian options), bouncy castles for kids, face painting, classic picnic games (sack race, tug-of-war), and a lively music playlist. Don\'t forget to bring your own blankets and lawn chairs!',
        'We encourage everyone to sign up early to help us with planning. Look out for the RSVP link in the weekly bulletin or on the parish website homepage. Volunteers for setup, serving, and cleanup are also highly appreciated!'
      ]
    },
    {
      id: 2,
      date: 'AUG 05',
      title: 'Evening of Adoration & Rosary',
      time: '7:00 PM - 8:30 PM',
      location: 'Main Church Sanctuary',
      description: 'Spend a sacred evening in prayer before the Blessed Sacrament and recite the Holy Rosary.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOMIFONTUChl-p_tqsDOTjznVW3ueHPFOhA&s',
      details: [
        'Immerse yourself in divine presence during our Evening of Adoration and Rosary. This peaceful gathering offers a beautiful opportunity to spend time with our Lord in the Blessed Sacrament.',
        'The evening will begin with a brief exposition of the Blessed Sacrament, followed by periods of silent adoration, guided reflections, and communal recitation of the Holy Rosary.',
        'All are welcome to join, whether you can stay for the entire duration or just for a portion. It\'s a perfect way to deepen your spiritual life and offer your prayers for our parish and the world.'
      ]
    },
    {
      id: 3,
      date: 'SEP 10',
      title: 'New Catechism Classes Begin',
      time: 'Various Times (check schedule)',
      location: 'Parish Education Center',
      description: 'Registration is open for all K-8 students. First class for new students!',
      image: 'https://johnxxiii.ch/wp-content/uploads/2018/08/catechismchildren.jpg',
      details: [
        'Exciting news for our young parishioners! Our New Catechism Classes for Kindergarten through 8th grade are set to begin on September 10th.',
        'This year\'s curriculum promises engaging lessons, interactive activities, and opportunities for children to grow in their faith and understanding of Catholic teachings. Our dedicated catechists are eager to welcome new and returning students.',
        'Parents are encouraged to complete registration online via the parish website or at the parish office before September 1st to ensure placement. A parent orientation session will be held on September 5th at 7:00 PM in the Parish Hall to cover class details and expectations.'
      ]
    },
    {
      id: 4,
      date: 'OCT 01',
      title: 'Fall Harvest Festival',
      time: '10:00 AM - 4:00 PM',
      location: 'Church Courtyard',
      description: 'Enjoy crafts, local vendors, family activities, and delicious seasonal treats.',
      image: 'https://media.istockphoto.com/id/155577419/photo/harvest-festival-altar-at-church-in-germany.jpg?s=612x612&w=0&k=20&c=pMRCexkEbPm8ylja4TCmpkWvTD3teL3G130eu5CA9gM=',
      details: [
        'Celebrate the beauty of autumn at our annual Fall Harvest Festival! This beloved community event brings together parishioners and neighbors for a day of fun and festivity.',
        'Explore a wide array of local craft vendors, enjoy delicious autumn-themed food and beverages, participate in family-friendly games and activities (including a pumpkin decorating station!), and listen to live music throughout the day.',
        'This festival is a wonderful way to give thanks for the blessings of the season and connect with our parish family. All proceeds will go towards supporting our parish\'s outreach programs. Don\'t miss out!'
      ]
    },
  ];

  // Function to open Mass/Confession Modal
  const openMassModal = (schedule) => {
    setCurrentMassDetails(schedule);
    setIsMassModalOpen(true);
  };

  // Function to close Mass/Confession Modal
  const closeMassModal = () => {
    setIsMassModalOpen(false);
    setTimeout(() => setCurrentMassDetails(null), 300); // Clear content after animation
  };

  // Function to open Event Modal
  const openEventModal = (event) => {
    setCurrentEventDetails(event);
    setIsEventModalOpen(true);
  };

  // Function to close Event Modal
  const closeEventModal = () => {
    setIsEventModalOpen(false);
    setTimeout(() => setCurrentEventDetails(null), 300); // Clear content after animation
  };

  // IMPORTANT: Replace "YOUR_GOOGLE_CALENDAR_EMBED_URL_HERE" with the 'src' attribute value from your parish's Google Calendar embed code.
  // You can get this from your Google Calendar settings: Settings and sharing -> Integrate calendar -> Embed calendar.
  const googleCalendarEmbedCode = `
    <iframe src="https://calendar.google.com/calendar/embed?src=en.christian%23holiday%40group.v.calendar.google.com&ctz=UTC" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
  `;

  // Hero Section background image (using an image that complements events)
  const heroBackgroundImage = 'https://images.unsplash.com/photo-1529156069947-f418b76e2794?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // A festive gathering or community image

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen text-gray-800">
      {/* Hero Section: Events */}
      <section
        className="relative bg-center bg-cover h-[50vh] flex items-center justify-center text-white shadow-xl mb-16 rounded-b-3xl"
        style={{ backgroundImage: `url('${heroBackgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-primary/40 rounded-b-3xl"></div>
        <div className="absolute inset-0 bg-black opacity-30 rounded-b-3xl"></div>
        <h1 className="z-10 text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif text-center drop-shadow-lg tracking-wide">
          Parish Life & Events
        </h1>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Introduction */}
        <section className="text-center max-w-5xl mx-auto mb-16 px-4">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            Stay connected with our vibrant parish community! Here you'll find our regular Mass and Confession schedules, along with exciting upcoming events designed to foster faith, fellowship, and service.
          </p>
        </section>

        {/* Mass Schedule */}
        <section className="bg-gradient-to-r from-light to-white p-10 rounded-2xl shadow-xl mb-16 text-center border border-primary-light">
          <h2 className="text-4xl font-bold font-serif text-primary mb-8">Mass & Confession Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {massSchedules.map((scheduleItem) => (
              <div
                key={scheduleItem.id}
                onClick={() => openMassModal(scheduleItem)}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer
                           hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform
                           border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-dark mb-3 border-b pb-2 border-accent/30">{scheduleItem.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{scheduleItem.summary}</p>
                </div>
                <button className="mt-4 self-start text-primary text-md font-semibold hover:underline">
                  View Details &gt;
                </button>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg text-gray-600 italic">
            *Please check the weekly bulletin for any schedule changes or additional liturgical celebrations.*
          </p>
        </section>

        {/* Upcoming Events List */}
        <section>
          <h2 className="text-4xl font-bold font-serif text-primary mb-12 text-center">Our Upcoming Events</h2>
          <div className="space-y-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => openEventModal(event)}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row
                           hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 cursor-pointer
                           border border-gray-100"
              >
                <div className="lg:w-1/3 flex-shrink-0">
                  <img src={event.image} alt={event.title} className="w-full h-64 object-cover lg:h-full rounded-l-2xl lg:rounded-r-none" />
                </div>
                <div className="lg:w-2/3 p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-accent text-primary p-3 rounded-xl font-extrabold text-center min-w-[70px] flex flex-col items-center">
                      <span className="block text-xl md:text-2xl leading-none">{event.date.split(' ')[0]}</span>
                      <span className="block text-3xl md:text-4xl leading-none">{event.date.split(' ')[1]}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-dark font-serif">{event.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">{event.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-md">
                    <p className="flex items-center space-x-2"><Clock size={20} className="text-primary" /><span>{event.time}</span></p>
                    <p className="flex items-center space-x-2"><MapPin size={20} className="text-primary" /><span>{event.location}</span></p>
                  </div>
                  <button className="mt-6 self-start bg-primary text-white px-8 py-3 rounded-full text-lg font-bold
                                     hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                                     shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light">
                    View Full Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calendar View */}
        <section className="mt-20 bg-gradient-to-l from-light to-white p-10 rounded-2xl shadow-xl text-center border border-primary-light">
          <h2 className="text-4xl font-bold font-serif text-primary mb-8">Full Parish Calendar</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            For a comprehensive view of all parish activities, meetings, and liturgical events, please refer to our full online calendar. Click on an event to see more details.
          </p>
          {/* Embedded Google Calendar */}
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg border border-gray-200" style={{ paddingTop: '75%' }}>
            <div
              className="absolute inset-0 w-full h-full"
              dangerouslySetInnerHTML={{ __html: googleCalendarEmbedCode }}
            />
          </div>
          {/* End Embedded Google Calendar */}
          <a
            href="https://calendar.google.com/calendar/embed?src=en.christian%23holiday%40group.v.calendar.google.com&ctz=UTC" // Link to open calendar in new tab
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center bg-primary text-white px-10 py-4 rounded-full text-xl font-bold
                       hover:bg-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl
                       focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            Open Full Calendar
          </a>
        </section>
      </div>

      {/* Render InfoModals */}
      <InfoModal
        isOpen={isMassModalOpen}
        onClose={closeMassModal}
        title={currentMassDetails?.title}
        image={currentMassDetails?.image}
        description={currentMassDetails?.summary} // Use summary as main description in modal
        details={currentMassDetails?.details}
      />

      <InfoModal
        isOpen={isEventModalOpen}
        onClose={closeEventModal}
        title={currentEventDetails?.title}
        image={currentEventDetails?.image}
        description={currentEventDetails?.description}
        details={currentEventDetails?.details}
        time={currentEventDetails?.time}
        location={currentEventDetails?.location}
      />
    </div>
  );
};

export default EventsPage;
