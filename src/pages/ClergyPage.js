import React, { useState } from 'react';
import { Mail, Phone, X } from 'lucide-react'; // Added X for modal close button

// Reusable Member Details Modal Component
const MemberDetailsModal = ({ isOpen, onClose, member }) => {
  // Base classes for the modal overlay: fixed, full screen, dark background, centered content
  // Transition classes ensure smooth appearance/disappearance
  const modalClasses = `fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50
                        transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;
  
  // Classes for the modal content box: white background, rounded corners, shadow, responsive width
  // max-h-[90vh] and overflow-y-auto ensure content is scrollable on smaller screens if too long
  // Transform classes create a subtle zoom-in/out effect during transition
  const contentClasses = `bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto
                          transform transition-all duration-300 ease-out
                          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`;

  // Optimization: If modal is not open and fully faded out, don't render anything
  if (!isOpen && contentClasses.includes('opacity-0')) {
    return null;
  }

  return (
    <div className={modalClasses} onClick={onClose}>
      <div className={contentClasses} onClick={e => e.stopPropagation()}>
        {/* Close button: absolute positioning, styled for accessibility and hover effects */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <X size={24} />
        </button>
        {member && (
          // Content layout: flex-col for mobile (stacks vertically), md:flex-row for medium screens and up (side-by-side)
          // items-center/start ensures vertical alignment within flex containers
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Member image: responsive sizing with w-48/h-64 for mobile, md:w-56/md:h-72 for larger screens */}
            <div className="flex-shrink-0 w-48 h-64 md:w-56 md:h-72 rounded-lg overflow-hidden shadow-lg">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
            </div>
            {/* Text content: text-center for mobile, md:text-left for larger screens */}
            <div className="text-center md:text-left flex-grow">
              <h3 className="text-4xl font-bold font-serif text-primary mb-2">{member.name}</h3>
              <p className="text-primary text-xl font-semibold mb-4">{member.title}</p>
              
              {/* Full biography: standard text styling with line height */}
              <div className="space-y-4 text-gray-700 text-base leading-relaxed mb-6">
                {member.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Contact links: flex-col for mobile (stacks), sm:flex-row for small screens and up (side-by-side) */}
              {/* justify-center/md:justify-start ensures alignment. Added w-full to this container */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 text-primary w-full">
                <a href={`mailto:${member.email}`} className="flex items-center justify-center space-x-2 hover:text-accent transition-colors duration-300 text-base sm:text-lg w-full">
                  <Mail size={20} />
                  {/* Added min-w-0 and break-all for better text wrapping on small screens */}
                  <span className="min-w-0 break-all">{member.email}</span>
                </a>
                <a href={`tel:${member.phone}`} className="flex items-center justify-center space-x-2 hover:text-accent transition-colors duration-300 text-base sm:text-lg w-full">
                  <Phone size={20} />
                  {/* Added min-w-0 and break-all for better text wrapping on small screens */}
                  <span className="min-w-0 break-all">{member.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
        {/* Main close button at the bottom of the modal: full width on mobile, auto width on larger screens */}
        <button
          onClick={onClose}
          className="mt-10 bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold
                     hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                     shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light w-full md:w-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
};


const ClergyPage = () => {
  // State for Member Details Modal
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [currentMemberDetails, setCurrentMemberDetails] = useState(null);

  const openMemberModal = (member) => {
    setCurrentMemberDetails(member);
    setIsMemberModalOpen(true);
  };

  const closeModal = () => {
    setIsMemberModalOpen(false);
    setTimeout(() => setCurrentMemberDetails(null), 300); // Clear content after animation
  };

  const clergyMembers = [
    {
      name: 'Rev. Fr. Fidelis Okpanachi',
      title: 'Parish Priest',
      bio: 'Fr. Fidelis has served as our beloved Parish Priest since 2023. His deep spirituality, inspiring homilies, and compassionate leadership have greatly enriched our parish family.',
      fullBio: [
        'Fr. Fidelis Okpanachi has been a guiding light for our parish community since his appointment as Fidelis Okpanachi in 2023. Ordained in 1995, he brings over two decades of pastoral experience and a profound love for the Eucharist to our church.',
        'His homilies are known for their spiritual depth, practical wisdom, and ability to connect ancient scripture with modern life, inspiring many to a closer walk with Christ. Fr. Michael is deeply committed to fostering a vibrant and inclusive parish family, where everyone feels welcomed and nourished in their faith journey.',
        'Beyond the pulpit, he is actively involved in community outreach and tirelessly works to address the needs of the poor and vulnerable. He enjoys reading theological works, spending time in quiet prayer, and engaging in lively discussions with parishioners after Mass.'
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElnlWiVqFALVDhMQyL22KQPlZmUkAd5G1VA&s', // Example professional photo
      email: 'frmichael@ourmotherofperpetualhelp.org',
      phone: '(123) 456-7891'
    },
    {
      name: 'Rev. Fr. David Chen',
      title: 'Parochial Vicar',
      bio: 'Fr. David joined Our Mother of Perpetual Help in 2022. He brings a vibrant energy to our ministries, particularly with our youth and young adult programs.',
      fullBio: [
        'Fr. David Chen joined our parish as Parochial Vicar in 2022, bringing with him a fresh perspective and boundless energy. He was ordained in 2020 and quickly became a beloved figure, especially among our younger parishioners.',
        'He is passionate about evangelization and utilizes modern approaches to make faith accessible and relevant to young people. Fr. David actively leads our Youth Ministry and Young Adult programs, organizing retreats, social gatherings, and faith-sharing groups.',
        'His engaging teaching style and approachable demeanor encourage many to deepen their understanding of Catholicism. In his free time, Fr. David enjoys playing basketball, hiking, and exploring new coffee shops.'
      ],
      image: 'https://images.unsplash.com/photo-1574360341108-a92c4530514e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example professional photo
      email: 'frdavid@ourmotherofperpetualhelp.org',
      phone: '(123) 456-7892'
    },
    {
      name: 'Deacon Robert Davis',
      title: 'Permanent Deacon',
      bio: 'Deacon Robert has been a pillar of our community for over 15 years. He provides invaluable support in liturgical celebrations, pastoral care, and various outreach programs.',
      fullBio: [
        'Deacon Robert Davis has been an invaluable servant of our parish for over 15 years since his ordination as a Permanent Deacon. His unwavering commitment to pastoral care and tireless dedication to the community are truly inspiring.',
        'He assists in liturgical celebrations, preaches homilies, baptizes, witnesses marriages, and presides at funerals and burial services. Beyond the altar, Deacon Robert is particularly dedicated to our outreach programs, regularly visiting the sick, homebound, and incarcerated, bringing them comfort and the Sacraments.',
        'His gentle spirit and deep faith serve as a beacon of hope and compassion to all he encounters. Deacon Robert is married to his beloved wife, Mary, and together they have three children and five grandchildren.'
      ],
      image: 'https://images.unsplash.com/photo-1627909062908-051f04494a2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example professional photo
      email: 'deaconrobert@ourmotherofperpetualhelp.org',
      phone: '(123) 456-7893'
    },
  ];

  const staffMembers = [
    {
      name: 'Sarah Brown',
      title: 'Parish Administrator',
      bio: 'Sarah manages the daily operations of the parish office, ensuring everything runs smoothly. Her efficiency and dedication are key to our parish\'s success.',
      fullBio: [
        'Sarah Brown is the backbone of our parish office, diligently managing all administrative operations since 2019. Her exceptional organizational skills and unwavering dedication ensure that the day-to-day functions of the parish run seamlessly.',
        'From managing schedules and coordinating events to handling communications and financial records, Sarah\'s efficiency is vital to our parish\'s success. She is often the first point of contact for parishioners and visitors, providing a welcoming and helpful presence.',
        'Sarah is a lifelong Catholic and a devoted member of our community. In her free time, she enjoys gardening and spending time with her family.'
      ],
      image: 'https://placehold.co/300x400/A7B1FF/1A237E?text=Sarah+Brown', // Placeholder with text
      email: 'sarah.brown@ourmotherofperpetualhelp.org',
      phone: '(123) 456-7890'
    },
    {
      name: 'Maria Rodriguez',
      title: 'Director of Faith Formation',
      bio: 'Maria oversees all our religious education programs for children, youth, and adults. She is passionate about sharing the richness of our Catholic faith.',
      fullBio: [
        'Maria Rodriguez is the passionate leader of our Faith Formation Ministry, overseeing all religious education programs for children, youth, and adults. With a Master\'s degree in Theology, she brings both academic rigor and a deep personal faith to her role.',
        'Maria is dedicated to nurturing spiritual growth and a comprehensive understanding of Catholic doctrine. She leads our CCD program, RCIA, adult Bible studies, and various workshops, ensuring that parishioners of all ages have opportunities to learn and grow.',
        'Her commitment to catechesis is truly inspiring, and she strives to create engaging and transformative learning experiences. Maria enjoys hiking, cooking, and exploring different spiritual traditions.'
      ],
      image: 'https://placehold.co/300x400/A7B1FF/1A237E?text=Maria+R', // Placeholder with text
      email: 'maria.r@ourmotherofperpetualhelp.org',
      phone: '(123) 456-7894'
    },
    {
      name: 'Mark Johnson',
      title: 'Music Director',
      bio: 'Mark leads our vibrant Music Ministry, enhancing our liturgical celebrations with inspiring hymns and sacred music. He directs all choirs and ensembles.',
      fullBio: [
        'Mark Johnson is the talented director of our Music Ministry, a role he has passionately held since 2015. With a background in sacred music and choral direction, Mark orchestrates the hymns, chants, and musical arrangements that elevate our liturgical celebrations.',
        'He directs our adult choir, youth choir, and various instrumental ensembles, fostering a spirit of joyful worship through song. Mark is always looking for new voices and talents to join the ministry, believing that music is a powerful form of prayer.',
        'Beyond his musical talents, Mark is a kind and dedicated member of our staff. In his spare time, he enjoys composing, attending classical concerts, and spending time with his family.'
      ],
      image: 'https://placehold.co/300x400/A7B1FF/1A237E?text=Mark+J', // Placeholder with text
      email: 'mark.j@ourmotherofperpetualhelp.org',
      phone: '(123) 456-7895'
    },
  ];

  // Hero Section background image (using an image that complements events)
  const heroBackgroundImage = 'https://images.unsplash.com/photo-1510444390610-85f29f03221c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

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
          Our Clergy & Staff
        </h1>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Clergy Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 text-center leading-tight">Our Spiritual Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {clergyMembers.map((member, index) => (
              <div
                key={index}
                onClick={() => openMemberModal(member)} // Open modal on card click
                className="bg-white rounded-xl shadow-lg overflow-hidden transform
                           hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer
                           border border-gray-100 group"
              >
                <div className="w-full h-80 overflow-hidden relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white text-3xl font-bold font-serif drop-shadow-md">{member.name}</h3>
                  </div>
                </div>
                <div className="p-6 text-center flex flex-col items-center">
                  <p className="text-primary text-xl font-semibold mb-4">{member.title}</p>
                  <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">{member.bio}</p> {/* Use line-clamp for truncated bio */}
                  <div className="flex justify-center space-x-6 text-primary">
                    <a href={`mailto:${member.email}`} onClick={e => e.stopPropagation()} className="flex items-center space-x-2 hover:text-accent transition-colors duration-300 text-base">
                      <Mail size={20} />
                      <span className="hidden sm:inline">Email</span>
                    </a>
                    <a href={`tel:${member.phone}`} onClick={e => e.stopPropagation()} className="flex items-center space-x-2 hover:text-accent transition-colors duration-300 text-base">
                      <Phone size={20} />
                      <span className="hidden sm:inline">Call</span>
                    </a>
                  </div>
                  <button className="mt-6 bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold
                                     hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                                     shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Staff Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 text-center leading-tight">Our Dedicated Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {staffMembers.map((member, index) => (
              <div
                key={index}
                onClick={() => openMemberModal(member)} // Open modal on card click
                className="bg-white rounded-xl shadow-lg overflow-hidden transform
                           hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer
                           border border-gray-100 group"
              >
                <div className="w-full h-80 overflow-hidden relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white text-3xl font-bold font-serif drop-shadow-md">{member.name}</h3>
                  </div>
                </div>
                <div className="p-6 text-center flex flex-col items-center">
                  <p className="text-primary text-xl font-semibold mb-4">{member.title}</p>
                  <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">{member.bio}</p> {/* Use line-clamp for truncated bio */}
                  <div className="flex justify-center space-x-6 text-primary">
                    <a href={`mailto:${member.email}`} onClick={e => e.stopPropagation()} className="flex items-center space-x-2 hover:text-accent transition-colors duration-300 text-base">
                      <Mail size={20} />
                      <span className="hidden sm:inline">Email</span>
                    </a>
                    <a href={`tel:${member.phone}`} onClick={e => e.stopPropagation()} className="flex items-center space-x-2 hover:text-accent transition-colors duration-300 text-base">
                      <Phone size={20} />
                      <span className="hidden sm:inline">Call</span>
                    </a>
                  </div>
                  <button className="mt-6 bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold
                                     hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                                     shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Render Member Details Modal */}
      <MemberDetailsModal
        isOpen={isMemberModalOpen}
        onClose={closeModal}
        member={currentMemberDetails}
      />
    </div>
  );
};

export default ClergyPage;
