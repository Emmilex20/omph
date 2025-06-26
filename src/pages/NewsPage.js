import React, { useState } from 'react';
import { CalendarDays, Tag, Search, Newspaper, Mail, X, Info, CheckCircle, AlertTriangle } from 'lucide-react'; // Added Info, CheckCircle, AlertTriangle for custom alert

// NEW News Article Details Modal Component
const NewsDetailsModal = ({ isOpen, onClose, article }) => {
  const modalClasses = `fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50
                        transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;
  const contentClasses = `bg-white rounded-xl shadow-2xl p-8 max-w-3xl w-full relative max-h-[90vh] overflow-y-auto
                          transform transition-all duration-300 ease-out
                          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`;

  if (!isOpen || !article) {
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
          <h3 className="text-4xl font-bold font-serif text-primary mb-4">{article.title}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
            <span className="flex items-center"><CalendarDays size={18} className="mr-2 text-accent" />{article.date}</span>
            <span className="flex items-center"><Tag size={18} className="mr-2 text-accent" />{article.category}</span>
          </div>

          <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8 w-full text-left">
            {article.fullContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <button
            onClick={onClose}
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold
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

// NEW Newsletter Signup Modal Component
const NewsletterSignupModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); // 'success' or 'error'

  const modalClasses = `fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50
                        transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;
  const contentClasses = `bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center relative
                          transform transition-all duration-300 ease-out
                          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`;

  if (!isOpen) {
    return null;
  }

  const handleSubscribe = async (event) => {
    event.preventDefault();

    // Formspree endpoint (replace xyzjlgwb with your actual Formspree form ID)
    const formspreeUrl = "https://formspree.io/f/xovwyawb";

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        setAlertMessage('Thank you for subscribing to our newsletter!');
        setAlertType('success');
        setShowAlert(true);
        setEmail(''); // Clear the email input field
      } else {
        const errorData = await response.json();
        setAlertMessage(`Failed to subscribe: ${errorData.error || 'Unknown error'}`);
        setAlertType('error');
        setShowAlert(true);
        console.error('Formspree submission error:', errorData);
      }
    } catch (error) {
      setAlertMessage('An error occurred during subscription. Please try again.');
      setAlertType('error');
      setShowAlert(true);
      console.error('Network or fetch error:', error);
    }
    // Auto-hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage('');
    }, 5000);
  };

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
          <h3 className="text-2xl font-bold text-dark mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Enter your email to receive our weekly parish news, event updates, and spiritual reflections.
          </p>
          <form className="space-y-4 w-full" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-full text-lg font-bold shadow-md hover:bg-dark transition-colors duration-300 w-full"
            >
              Subscribe Now
            </button>
          </form>
          
          {/* Custom Alert Message */}
          {showAlert && (
            <div className={`mt-4 p-4 rounded-lg flex items-center space-x-3
                            ${alertType === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
              {alertType === 'success' ? <CheckCircle size={24} className="flex-shrink-0" /> : <AlertTriangle size={24} className="flex-shrink-0" />}
              <p className="text-sm flex-grow">{alertMessage}</p>
              <button onClick={() => setShowAlert(false)} className="text-gray-500 hover:text-gray-800 focus:outline-none">
                <X size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


const NewsPage = () => {
  // State for News Details Modal
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [currentNewsArticle, setCurrentNewsArticle] = useState(null);

  // State for Newsletter Signup Modal
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  // State for Pagination and Filtering
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(3); // Number of articles per page
  const [selectedCategory, setSelectedCategory] = useState('All News');
  const [searchTerm, setSearchTerm] = useState('');


  const openNewsModal = (article) => {
    setCurrentNewsArticle(article);
    setIsNewsModalOpen(true);
  };

  const closeNewsModal = () => {
    setIsNewsModalOpen(false);
    setTimeout(() => setCurrentNewsArticle(null), 300);
  };

  const openNewsletterModal = () => {
    setIsNewsletterModalOpen(true);
  };

  const closeNewsletterModal = () => {
    setIsNewsletterModalOpen(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };


  // Placeholder data for news articles (unchanged, as per instructions)
  const newsArticles = [
    {
      id: 1,
      date: 'June 24, 2025',
      category: 'Youth Ministry',
      title: 'Youth Group Summer Retreat: Registration Now Open!',
      summary: 'Get ready for an unforgettable week of faith, fun, and fellowship! Our annual Youth Summer Retreat is just around the corner, and registration is officially open for all high school students...',
      fullContent: [
        'The highly anticipated annual Youth Summer Retreat is set to be an extraordinary week of spiritual growth, exhilarating activities, and profound fellowship for all high school students. This year, we are focusing on the theme "Rooted in Faith, Ready for the World," designed to empower our young people to live out their Catholic faith with confidence and joy in their daily lives.',
        'Activities will include daily Mass, inspiring talks from dynamic speakers, small group discussions, outdoor adventures like hiking and team-building challenges, bonfire reflections, and ample time for personal prayer and discernment. Our dedicated team of youth leaders and chaperones are committed to creating a safe, fun, and faith-filled environment for every participant.',
        'Registration is now officially open! Spaces are limited and fill up quickly, so we encourage early sign-ups to secure a spot. All details regarding dates, fees, required forms, and a packing list can be found by clicking "Read More" or contacting our Youth Ministry Coordinator. Don\'t miss out on this incredible opportunity to grow closer to Christ and build lasting memories!'
      ],
      imageUrl: 'https://i.ytimg.com/vi/jSYvVq4RG40/maxresdefault.jpg',
      slug: 'youth-retreat-registration-open'
    },
    {
      id: 2,
      date: 'June 20, 2025',
      category: 'Community Outreach',
      title: 'Over 500 Lbs Collected in Successful Food Drive',
      summary: 'Thanks to the incredible generosity of our parishioners and community members, our recent food drive collected over 500 pounds of non-perishable food items...',
      fullContent: [
        'Our hearts are overflowing with gratitude for the overwhelming success of our recent Parish Food Drive! Thanks to the incredible generosity of our parishioners, local businesses, and community members, we collected a staggering 500+ pounds of non-perishable food items.',
        'These donations will directly benefit families in need within our local community, distributed through partnership with St. Vincent de Paul Society and local food banks. Your compassionate response ensures that our brothers and sisters facing food insecurity will have access to nutritious meals.',
        'This initiative truly embodies our parish\'s commitment to living out the Gospel call to serve the poor and vulnerable. We extend a heartfelt thank you to everyone who donated, volunteered their time to sort and pack, and helped spread the word. Your collective efforts make a tangible difference in the lives of many!'
      ],
      imageUrl: 'https://thumbs.dreamstime.com/b/donations-box-canned-food-wooden-table-background-pasta-goods-dry-non-perishable-pea-cooking-oil-rice-noodles-178053017.jpg',
      slug: 'food-drive-success'
    },
    {
      id: 3,
      date: 'June 18, 2025',
      category: 'Liturgy & Worship',
      title: 'New Weekday Mass Time Starting July 1st',
      summary: 'To better serve our commuting parishioners, we are excited to announce an additional weekday Mass time starting July 1st. Join us for an evening Mass at 6:00 PM, Monday through Friday...',
      fullContent: [
        'Beginning July 1st, Our Mother of Perpetual Help Catholic Church will be adding a new weekday Mass time to better accommodate the schedules of our busy parishioners, especially those commuting or seeking an evening opportunity for worship.',
        'The new Mass will be held Monday through Friday at 6:00 PM in the main church. This addition aims to provide more flexibility for individuals and families to participate in the Eucharist and receive spiritual nourishment during the week.',
        'We understand the challenges of modern schedules and hope this new time will make it easier for more members of our community to engage with the sacred liturgy. We look forward to welcoming you to this new Mass time and growing together in faith.'
      ],
      imageUrl: 'https://dailytvmass.com/wp-content/uploads/2021/01/TV-Mass-NEW-Photo2020-cropped-e1611933959267.jpg',
      slug: 'new-weekday-mass-time'
    },
    {
      id: 4,
      date: 'June 15, 2025',
      category: 'Parish Life',
      title: 'Volunteers Needed for Annual Parish Picnic',
      summary: 'Our Annual Parish Picnic is just around the corner, and we need your help to make it a success! We are looking for volunteers for various roles including setup, food service, games, and cleanup...',
      fullContent: [
        'The Annual Parish Picnic is fast approaching, and we\'re calling on our wonderful parishioners to help us make it the best one yet! This beloved event brings our entire church family together for a day of fun, food, and fellowship, and it truly wouldn\'t be possible without the generous spirit of our volunteers.',
        'We have a variety of roles available, suitable for different skills and time commitments, including:',
        '- **Setup & Decoration:** Helping to arrange tables, chairs, and festive decorations in the morning.',
        '- **Food Service:** Assisting with grilling, serving, and managing food lines.',
        '- **Games & Activities:** Supervising children\'s games and coordinating family activities.',
        '- **Cleanup Crew:** Helping to pack up and ensure the grounds are tidy after the event.',
        'Even an hour or two of your time can make a huge difference. If you\'re interested in volunteering, please sign up at the back of the church or contact the parish office by [Date, e.g., July 10th]. Your help ensures a joyful and seamless experience for everyone!'
      ],
      imageUrl: 'https://www.hurstpierpoint-pc.gov.uk/wp-content/uploads/2021/11/Volunetters-Needed.jpg',
      slug: 'volunteers-for-picnic'
    },
    {
      id: 5,
      date: 'June 10, 2025',
      category: 'Education',
      title: 'Summer Bible Study Registration Open',
      summary: 'Deepen your faith this summer with our new Bible Study series on the Gospel of Mark. Sessions will be held weekly on Tuesday evenings, starting July 5th...',
      fullContent: [
        'This summer, embark on a journey of spiritual discovery with our new Bible Study series, focusing on the profound Gospel of Mark. This study is open to all parishioners – whether you are new to Bible study or a seasoned scripture scholar – and promises to be an enriching experience for everyone looking to deepen their understanding of God\'s Word.',
        'The sessions will be held weekly on Tuesday evenings, from 7:00 PM to 8:30 PM, starting July 5th, in the Parish Hall. Each session will include guided reading, insightful commentary, and open discussion, fostering a collaborative learning environment.',
        'No prior experience is necessary, just an open heart and a desire to learn. Materials will be provided, but participants are encouraged to bring their own Bibles. To register or for more information, please contact the Religious Education Office. We look forward to exploring the Gospel of Mark with you!'
      ],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmsAV1aKO4rLBEns0iTNbDveKdOzyzMdXQ&s',
      slug: 'summer-bible-study'
    },
    { // Adding more articles for pagination demo
      id: 6,
      date: 'May 30, 2025',
      category: 'Parish Life',
      title: 'Annual Feast Day Celebration Set for July 20th',
      summary: 'Mark your calendars! Our annual parish feast day celebration in honor of Our Mother of Perpetual Help is scheduled for July 20th...',
      fullContent: ['Details about the Feast Day celebration including special Mass, activities, and potluck.'],
      imageUrl: 'https://www.shutterstock.com/image-vector/ascension-day-jesus-christ-design-600nw-2145958111.jpg',
      slug: 'feast-day-celebration'
    },
    {
      id: 7,
      date: 'May 25, 2025',
      category: 'Sacraments',
      title: 'Confirmation Prep Classes Begin Soon',
      summary: 'If you or your child are preparing for the Sacrament of Confirmation, classes will begin on August 1st...',
      fullContent: ['Information about confirmation classes.'],
      imageUrl: 'https://i.pinimg.com/736x/fc/62/0d/fc620db45e7d8a6da06c902e7073d317.jpg',
      slug: 'confirmation-prep'
    },
    {
      id: 8,
      date: 'May 20, 2025',
      category: 'Social Justice',
      title: 'Support Our Refugee Resettlement Program',
      summary: 'Our parish is actively supporting a local family seeking refuge. Learn how you can help...',
      fullContent: ['Details on how to support the refugee program.'],
      imageUrl: 'https://www.scmmedicalmissions.org/wp-content/uploads/2021/10/Refugee-Resettlement-1-1170x670.jpg',
      slug: 'refugee-program'
    },
  ];

  const categories = [
    'All News',
    'Parish Life',
    'Community Outreach',
    'Liturgy & Worship',
    'Youth Ministry',
    'Education',
    'Sacraments',
    'Social Justice'
  ];

  // Filter articles based on selected category and search term
  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All News' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.fullContent.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Get current articles for pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Calculate total pages
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Hero Section background image (a relevant image)
  const heroBackgroundImage = 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SKD-bqAkQjhvrjayf/videoblocks-news-intro-graphic-animation-with-lines-and-world-map-abstract-background-elegant-and-luxury-dynamic-style-for-news-and-business-template_rfzodfktb_thumbnail-1080_09.png'; // Retaining this hero image


  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section: News & Updates */}
      <section
        className="relative bg-cover bg-center h-80 md:h-96 flex items-center justify-center text-white rounded-lg shadow-xl mb-12 overflow-hidden"
        style={{ backgroundImage: `url('${heroBackgroundImage}')` }} // Using inline style
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-dark/50 z-0"></div>
        <h1 className="z-10 text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif leading-tight drop-shadow-2xl">
          Parish News & Updates
        </h1>
        <p className="z-10 absolute bottom-8 text-lg md:text-xl font-light text-center px-4 drop-shadow-lg">
          Stay informed about what's happening in our vibrant community.
        </p>
      </section>

      {/* Main Content: News Grid & Sidebar */}
      <section className="flex flex-col lg:flex-row gap-10">
        {/* Left Column: News Articles */}
        <div className="lg:w-3/4 space-y-10">
          {currentArticles.length > 0 ? (
            currentArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row group">
                <div className="md:w-1/3 flex-shrink-0">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-56 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-2/3 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center"><CalendarDays size={16} className="mr-2 text-primary" />{article.date}</span>
                      <span className="flex items-center"><Tag size={16} className="mr-2 text-primary" />{article.category}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {article.summary}
                    </p>
                  </div>
                  {/* Changed from Link to button to open modal */}
                  <button
                    onClick={() => openNewsModal(article)}
                    className="inline-flex items-center self-start bg-primary text-white px-6 py-3 rounded-full text-md font-semibold shadow-md hover:bg-dark transition-colors duration-300 transform hover:-translate-y-0.5"
                  >
                    Read More
                    <Newspaper size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-600 bg-white rounded-xl shadow-lg p-8">
              <Info size={48} className="mx-auto mb-4 text-primary" />
              <p className="text-xl font-semibold">No news articles found for the selected criteria.</p>
              <p className="mt-2">Try adjusting your search or category filter.</p>
            </div>
          )}


          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-5 py-2 rounded-lg mx-2 transition-colors duration-300 ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-light text-primary border border-primary hover:bg-primary hover:text-white'}`}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`px-5 py-2 rounded-lg mx-2 ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-light text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-300'}`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-5 py-2 rounded-lg mx-2 transition-colors duration-300 ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-light text-primary border border-primary hover:bg-primary hover:text-white'}`}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:w-1/4 space-y-8">
          {/* Search Widget */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center"><Search size={20} className="mr-2 text-primary" />Search</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                className="w-full p-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-accent">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Categories Widget */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center"><Tag size={20} className="mr-2 text-primary" />Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleCategoryChange(category)}
                    className={`block text-lg w-full text-left py-1 px-3 rounded-md transition-colors duration-200
                                ${selectedCategory === category ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Widget */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center"><Newspaper size={20} className="mr-2 text-primary" />Recent Posts</h3>
            <ul className="space-y-4">
              {/* Define recentPosts within the component scope to avoid 'not defined' error */}
              {/* This will show the 3 most recent articles, filtered by category/search if active */}
              {newsArticles.slice(0, 3) // Get the initial 3 recent posts
                .filter(post =>
                   (selectedCategory === 'All News' || post.category === selectedCategory) &&
                   (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.summary.toLowerCase().includes(searchTerm.toLowerCase()))
                )
                .map((post) => (
                  <li key={post.id}>
                    <button onClick={() => openNewsModal(post)} className="block text-left w-full">
                      <h4 className="text-md font-semibold text-dark hover:text-primary transition-colors duration-200 leading-tight">{post.title}</h4>
                      <p className="text-sm text-gray-500 flex items-center mt-1"><CalendarDays size={14} className="mr-1.5" />{post.date}</p>
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Newsletter Signup Widget */}
          <div className="bg-primary text-white p-8 rounded-xl shadow-lg text-center">
            <Mail size={48} className="mx-auto mb-6 text-accent" />
            <h3 className="text-2xl font-bold mb-4">Stay Connected!</h3>
            <p className="mb-6 text-lg">
              Sign up for our parish newsletter to receive the latest news, event updates, and spiritual reflections directly in your inbox.
            </p>
            {/* Changed from form to button to open modal */}
            <button
              onClick={openNewsletterModal}
              className="bg-accent text-primary px-8 py-3 rounded-full text-lg font-bold shadow-md hover:bg-yellow-400 transition-colors duration-300 w-full"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Render Modals */}
      <NewsDetailsModal
        isOpen={isNewsModalOpen}
        onClose={closeNewsModal}
        article={currentNewsArticle}
      />
      {/* Using the NewsletterSignupModal component here */}
      <NewsletterSignupModal
        isOpen={isNewsletterModalOpen}
        onClose={closeNewsletterModal}
      />
    </div>
  );
};

export default NewsPage;
