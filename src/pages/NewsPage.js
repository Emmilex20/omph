import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Tag, Search, Newspaper, Mail } from 'lucide-react';

const NewsPage = () => {
  // Placeholder data for news articles
  const newsArticles = [
    {
      id: 1,
      date: 'June 24, 2025',
      category: 'Youth Ministry',
      title: 'Youth Group Summer Retreat: Registration Now Open!',
      summary: 'Get ready for an unforgettable week of faith, fun, and fellowship! Our annual Youth Summer Retreat is just around the corner, and registration is officially open for all high school students...',
      imageUrl: 'https://images.unsplash.com/photo-1621243171120-d380f2d84d16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'youth-retreat-registration-open'
    },
    {
      id: 2,
      date: 'June 20, 2025',
      category: 'Community Outreach',
      title: 'Over 500 Lbs Collected in Successful Food Drive',
      summary: 'Thanks to the incredible generosity of our parishioners and community members, our recent food drive collected over 500 pounds of non-perishable food items...',
      imageUrl: 'https://plus.unsplash.com/photos/base/img/unsplash-base-photos-faces.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'food-drive-success'
    },
    {
      id: 3,
      date: 'June 18, 2025',
      category: 'Liturgy & Worship',
      title: 'New Weekday Mass Time Starting July 1st',
      summary: 'To better serve our commuting parishioners, we are excited to announce an additional weekday Mass time starting July 1st. Join us for an evening Mass at 6:00 PM, Monday through Friday...',
      imageUrl: 'https://images.unsplash.com/photo-1542840502-0ee85cd7ed0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'new-weekday-mass-time'
    },
    {
      id: 4,
      date: 'June 15, 2025',
      category: 'Parish Life',
      title: 'Volunteers Needed for Annual Parish Picnic',
      summary: 'Our Annual Parish Picnic is just around the corner, and we need your help to make it a success! We are looking for volunteers for various roles including setup, food service, games, and cleanup...',
      imageUrl: 'https://images.unsplash.com/photo-1620857943015-816d252f2f76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'volunteers-for-picnic'
    },
    {
      id: 5,
      date: 'June 10, 2025',
      category: 'Education',
      title: 'Summer Bible Study Registration Open',
      summary: 'Deepen your faith this summer with our new Bible Study series on the Gospel of Mark. Sessions will be held weekly on Tuesday evenings, starting July 5th...',
      imageUrl: 'https://images.unsplash.com/photo-1522881454199-ac1e7b6d1326?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'summer-bible-study'
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

  const recentPosts = newsArticles.slice(0, 3); // Get top 3 recent posts

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section: News & Updates */}
      <section className="relative bg-hero-news bg-cover bg-center h-80 md:h-96 flex items-center justify-center text-white rounded-lg shadow-xl mb-12 overflow-hidden">
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
          {newsArticles.map((article) => (
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
                <Link
                  to={`/news/${article.slug}`} // Example link to a detailed news page
                  className="inline-flex items-center self-start bg-primary text-white px-6 py-3 rounded-full text-md font-semibold shadow-md hover:bg-dark transition-colors duration-300 transform hover:-translate-y-0.5"
                >
                  Read More
                  <Newspaper size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}

          {/* Pagination Placeholder (Optional) */}
          <div className="flex justify-center mt-12">
            <button className="bg-light text-primary border border-primary px-5 py-2 rounded-lg mx-2 hover:bg-primary hover:text-white transition-colors duration-300">
              Previous
            </button>
            <button className="bg-primary text-white px-5 py-2 rounded-lg mx-2">
              1
            </button>
            <button className="bg-light text-primary border border-primary px-5 py-2 rounded-lg mx-2 hover:bg-primary hover:text-white transition-colors duration-300">
              2
            </button>
            <button className="bg-light text-primary border border-primary px-5 py-2 rounded-lg mx-2 hover:bg-primary hover:text-white transition-colors duration-300">
              Next
            </button>
          </div>
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
                  <Link to={`/news?category=${category.toLowerCase().replace(/\s/g, '-')}`} className="block text-lg text-gray-700 hover:text-primary transition-colors duration-200">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Widget */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center"><Newspaper size={20} className="mr-2 text-primary" />Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link to={`/news/${post.slug}`} className="block">
                    <h4 className="text-md font-semibold text-dark hover:text-primary transition-colors duration-200 leading-tight">{post.title}</h4>
                    <p className="text-sm text-gray-500 flex items-center mt-1"><CalendarDays size={14} className="mr-1.5" />{post.date}</p>
                  </Link>
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
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full p-3 rounded-md border border-white/50 bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-accent text-primary px-8 py-3 rounded-full text-lg font-bold shadow-md hover:bg-yellow-400 transition-colors duration-300 w-full"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
