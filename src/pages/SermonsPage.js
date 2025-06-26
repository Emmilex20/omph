import React, { useState } from 'react';
import { PlayCircle, Mic, CalendarDays, X, ExternalLink, Podcast } from 'lucide-react'; // Added Podcast and ExternalLink for the new modal

// Reusable Sermon Details Modal Component
const SermonDetailsModal = ({ isOpen, onClose, sermon }) => {
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
        {sermon && (
          <div className="flex flex-col items-center text-center">
            <h3 className="text-4xl font-bold font-serif text-primary mb-4">{sermon.title}</h3>
            <p className="text-dark text-xl font-semibold mb-2 flex items-center space-x-2">
              <Mic size={20} className="text-accent" />
              <span>{sermon.preacher}</span>
            </p>
            <p className="text-gray-600 text-lg mb-6 flex items-center space-x-2">
              <CalendarDays size={20} className="text-accent" />
              <span>{sermon.date}</span>
            </p>

            <img src={sermon.imageUrl} alt={sermon.title} className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />

            <div className="space-y-4 text-gray-700 text-base leading-relaxed mb-8 w-full text-left">
              {sermon.fullDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {sermon.audioUrl && (
              <a
                href={sermon.audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold
                           hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                           shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-light mb-6"
              >
                <PlayCircle size={24} />
                <span>Listen Now</span>
              </a>
            )}
            {!sermon.audioUrl && (
              <p className="text-gray-500 italic mb-6">Audio coming soon!</p>
            )}

            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold
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

// NEW Podcast Subscription Modal Component
const PodcastSubscriptionModal = ({ isOpen, onClose, platforms }) => {
  const modalClasses = `fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50
                        transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;
  const contentClasses = `bg-white rounded-xl shadow-2xl p-8 max-w-xl w-full relative max-h-[90vh] overflow-y-auto
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
        <div className="flex flex-col items-center text-center">
          <Podcast size={64} className="text-primary mx-auto mb-6" />
          <h3 className="text-4xl font-bold font-serif text-dark mb-4">Subscribe to Our Podcast</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Choose your preferred platform to listen to our weekly homilies and spiritual reflections on the go!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-light p-4 rounded-lg shadow-md
                           hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300
                           text-dark font-semibold text-lg"
              >
                {/* You might use specific icons here if you import them, e.g., <SpotifyIcon /> */}
                <ExternalLink size={20} />
                <span>{platform.name}</span>
              </a>
            ))}
          </div>

          <button
            onClick={onClose}
            className="mt-10 bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold
                       hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


const SermonsPage = () => {
  // State for Sermon Details Modal
  const [isSermonModalOpen, setIsSermonModalOpen] = useState(false);
  const [currentSermonDetails, setCurrentSermonDetails] = useState(null);

  // State for Podcast Subscription Modal
  const [isPodcastModalOpen, setIsPodcastModalOpen] = useState(false);

  const openSermonModal = (sermon) => {
    setCurrentSermonDetails(sermon);
    setIsSermonModalOpen(true);
  };

  const closeSermonModal = () => {
    setIsSermonModalOpen(false);
    setTimeout(() => setCurrentSermonDetails(null), 300); // Clear content after animation
  };

  const openPodcastModal = () => {
    setIsPodcastModalOpen(true);
  };

  const closePodcastModal = () => {
    setIsPodcastModalOpen(false);
  };

  const sermons = [
    {
      id: 1,
      title: 'The Unwavering Power of Faith',
      preacher: 'Rev. Fr. Michael O\'Connell',
      date: 'June 23, 2024',
      summary: 'A powerful homily on trusting in God\'s plan even amidst trials, drawing inspiration from the life of Abraham.',
      fullDescription: [
        'In this inspiring homily, Fr. Michael delves deep into the essence of faith as an unwavering trust in God\'s divine providence. He reminds us that true faith is not the absence of doubt, but the courage to press forward despite uncertainties, holding steadfast to the promise of God.',
        'Drawing parallels from the biblical narrative of Abraham, who journeyed into the unknown solely on God\'s command, Fr. Michael illustrates how our spiritual lives can mirror this journey of trust. He encourages listeners to surrender their anxieties and fears, embracing a faith that transcends human understanding and worldly limitations.',
        'The homily challenges us to move beyond intellectual assent to a living, dynamic faith that actively shapes our decisions, comforts us in sorrow, and empowers us to overcome obstacles. It is a call to a deeper relationship with God, built on absolute reliance on His love and wisdom.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1549294271810-6c9213587637?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audioUrl: '#' // Placeholder
    },
    {
      id: 2,
      title: 'Embracing the Spirit of Generosity',
      preacher: 'Rev. Fr. David Chen',
      date: 'June 16, 2024',
      summary: 'Fr. David explores the joy found in giving, not just financially, but of our time and talents, as an act of worship.',
      fullDescription: [
        'Fr. David\'s homily on generosity goes beyond the conventional understanding of financial giving, expanding it to encompass a holistic stewardship of all God\'s gifts – our time, talents, and treasure.',
        'He illuminates how acts of generosity are not merely duties, but opportunities for profound joy and spiritual growth. By sharing our resources, whether it\'s dedicating time to serve a ministry, utilizing our unique talents for the common good, or contributing financially to the Church\'s mission, we are participating in God\'s own giving nature.',
        'The sermon emphasizes that true worship extends beyond the liturgy to how we live our lives daily, reflecting God\'s boundless love through our willingness to share with others. It\'s a call to cultivate a generous heart that finds fulfillment in selfless service.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1547486445-562b8c54c379?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audioUrl: '#' // Placeholder
    },
    {
      id: 3,
      title: 'The Transformative Power of Reconciliation',
      preacher: 'Deacon Robert Davis',
      date: 'June 9, 2024',
      summary: 'Deacon Robert reflects on the healing and freedom found in the Sacrament of Confession.',
      fullDescription: [
        'Deacon Robert offers a heartfelt reflection on the Sacrament of Reconciliation, emphasizing its immense power to heal and liberate. He gently guides us to understand confession not as a burden, but as a profound encounter with God\'s infinite mercy and boundless love.',
        'He articulates how confessing our sins opens the door to spiritual renewal, allowing us to shed the weight of guilt and shame, and to embrace the freedom that comes with divine forgiveness. The homily encourages a regular practice of this sacrament as a means of ongoing conversion and growth in holiness.',
        'Deacon Robert beautifully portrays the compassionate heart of Christ, ever ready to welcome us back, offering peace and strength to continue our journey of faith with renewed vigor. It is a powerful reminder of the grace available to us through this sacred encounter.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1555546255-08e063f9d501?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audioUrl: '#' // Placeholder
    },
    {
      id: 4,
      title: 'Finding Joy in Suffering',
      preacher: 'Rev. Fr. Michael O\'Connell',
      date: 'June 2, 2024',
      summary: 'A challenging yet comforting message on how Christian faith transforms our experience of suffering into a path to grace.',
      fullDescription: [
        'Fr. Michael delivers a profound and comforting message on a challenging topic: finding joy amidst suffering. He acknowledges the natural human aversion to pain and hardship but invites listeners to consider how Christian faith can transform our experience of suffering.',
        'Drawing from the teachings of Christ and the lives of the saints, he explains that suffering, when united with the Cross of Christ, can become a profound source of grace, purification, and spiritual growth. It is through these trials that our faith is tested, refined, and ultimately deepened, leading us to a more profound reliance on God\'s strength.',
        'The homily is a beacon of hope, reminding us that we are never alone in our struggles and that God can bring good even from our greatest tribulations, ultimately leading to a joy that transcends worldly happiness.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1594901384795-bc6547614e7a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audioUrl: '#'
    },
    {
      id: 5,
      title: 'The Eucharist: Our Spiritual Food',
      preacher: 'Rev. Fr. David Chen',
      date: 'May 26, 2024',
      summary: 'A reflection on the Eucharist as the true spiritual nourishment for our journey of faith.',
      fullDescription: [
        'In this deeply Eucharistic homily, Fr. David explores the profound mystery of the Eucharist as the true spiritual food for our journey of faith. He emphasizes that the Eucharist is not merely a symbol, but the real presence of Christ, offering us His very Body and Blood as nourishment for our souls.',
        'He explains how regular reception of the Eucharist strengthens us to live out our Christian calling, empowers us to resist sin, and deepens our communion with God and with one another as the Body of Christ.',
        'Fr. David encourages a renewed reverence and appreciation for this most Blessed Sacrament, inviting us to come to the altar with open hearts, ready to receive the grace that sustains us in our daily lives and prepares us for eternal life.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1547486445-562b8c54c379?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audioUrl: '#'
    },
  ];

  // Data for podcast platforms to display in the modal
  const podcastPlatforms = [
    { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/us/podcast/your-parish-podcast-link/id123456789' },
    { name: 'Spotify', url: 'https://open.spotify.com/show/yourpodcastlink' },
    { name: 'Google Podcasts', url: 'https://podcasts.google.com/?feed=yourpodcastfeed' },
    { name: 'Anchor FM', url: 'https://anchor.fm/your-parish-podcast' },
  ];

  // Hero Section background image (a peaceful church interior or spiritual scene)
  const heroBackgroundImage = 'https://t3.ftcdn.net/jpg/04/20/31/66/360_F_420316645_0yIidBMDgNVb10xpaPxqB217NYX8auIR.jpg';


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
          Inspiring Sermons
        </h1>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Introduction */}
        <section className="text-center max-w-5xl mx-auto mb-16 px-4">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            Here you can find a collection of homilies and sermons delivered by our clergy. We pray that these messages inspire, challenge, and deepen your understanding of God's Word.
          </p>
        </section>

        {/* Sermons Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {sermons.map((sermon) => (
            <div
              key={sermon.id}
              onClick={() => openSermonModal(sermon)}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform
                         hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer
                         border border-gray-100 group flex flex-col justify-between"
            >
              <div className="w-full h-56 overflow-hidden relative">
                <img
                  src={sermon.imageUrl}
                  alt={sermon.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl font-bold font-serif drop-shadow-md leading-tight">{sermon.title}</h3>
                </div>
              </div>
              <div className="p-6 text-center flex-grow flex flex-col items-center">
                <p className="text-dark text-lg font-semibold mb-2">{sermon.preacher}</p>
                <p className="text-gray-600 text-sm mb-4">{sermon.date}</p>
                <p className="text-gray-700 leading-relaxed text-base mb-6 px-2 line-clamp-3">{sermon.summary}</p>
                <button
                  className="mt-auto bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold
                                   hover:bg-dark transform hover:-translate-y-1 transition-all duration-300
                                   shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                >
                  Read / Listen More
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action: Podcast/Further Resources */}
        <section className="mt-16 bg-gradient-to-br from-light to-white p-8 md:p-12 rounded-2xl shadow-xl text-center border border-primary-light">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 leading-tight">
            Dive Deeper into the Word
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            Want to listen on the go? Subscribe to our parish podcast on your favorite platform for weekly homilies and spiritual reflections.
          </p>
          <button
            onClick={openPodcastModal} // Changed from <a> to <button> and added onClick
            className="inline-flex items-center space-x-3 bg-primary text-white px-10 py-4 rounded-full text-xl font-bold
                       hover:bg-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl
                       focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            <PlayCircle size={24} />
            <span>Subscribe to Podcast</span>
          </button>
        </section>
      </div>

      {/* Render Sermon Details Modal */}
      <SermonDetailsModal
        isOpen={isSermonModalOpen}
        onClose={closeSermonModal}
        sermon={currentSermonDetails}
      />

      {/* Render Podcast Subscription Modal */}
      <PodcastSubscriptionModal
        isOpen={isPodcastModalOpen}
        onClose={closePodcastModal}
        platforms={podcastPlatforms}
      />
    </div>
  );
};

export default SermonsPage;
