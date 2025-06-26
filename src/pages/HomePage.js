import React from 'react';
import { Link } from 'react-router-dom';
import { Church, Users, Calendar, DollarSign, HeartHandshake, Lightbulb, MessageSquareQuote, BookOpenText, MapPin, Phone, Mail, Clock } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section 1: Welcome & Call to Action (Enhanced) */}
      <section className="relative bg-hero-mass bg-cover bg-center h-[700px] md:h-[800px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-dark/50 z-0"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif leading-tight mb-6 drop-shadow-2xl animate-fade-in-up">
            Welcome Home to Our Mother of Perpetual Help Catholic Church
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg animate-fade-in-up delay-200">
            A vibrant community rooted in faith, hope, and love. Come, experience the warmth of God's embrace and grow in your spiritual journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-8">
            <Link
              to="/events"
              className="bg-accent text-primary px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl animate-fade-in-up delay-400"
            >
              View Mass Schedule
            </Link>
            <Link
              to="/about"
              className="bg-white text-primary px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl animate-fade-in-up delay-600"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Our Core Values/Pillars (Enhanced Grid) */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-16 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-accent">
            Our Guiding Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 group">
              <Church size={72} className="text-primary mx-auto mb-6 group-hover:text-accent transition-colors duration-300" />
              <h3 className="text-3xl font-semibold text-dark mb-4">Worship & Sacraments</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Experience the profound beauty of the Mass and the grace of the Sacraments, the source and summit of our faith.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 group">
              <Users size={72} className="text-primary mx-auto mb-6 group-hover:text-accent transition-colors duration-300" />
              <h3 className="text-3xl font-semibold text-dark mb-4">Community & Fellowship</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Join a welcoming family where lasting friendships are formed and faith is lived out together.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 group">
              <HeartHandshake size={72} className="text-primary mx-auto mb-6 group-hover:text-accent transition-colors duration-300" />
              <h3 className="text-3xl font-semibold text-dark mb-4">Service & Outreach</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Answer the call to serve those in need, spreading Christ's love through compassionate action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 3: Pastor's Welcome Message (Left-Right Layout) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElnlWiVqFALVDhMQyL22KQPlZmUkAd5G1VA&s"
              alt="Pastor delivering sermon"
              className="rounded-xl shadow-2xl w-full h-auto object-cover border-4 border-primary/20 transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-8 leading-tight">
              A Message from Our Pastor
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              "Dear Brothers and Sisters in Christ, it is with immense joy that I welcome you to Our Mother of Perpetual Help Catholic Church. Whether you are a lifelong parishioner, new to our community, or simply exploring the Catholic faith, we are delighted to have you. Our parish is a place of prayer, learning, and service, where we strive to live out the Gospel message daily. May God bless you and your families."
            </p>
            <p className="text-xl font-semibold text-dark italic mb-6">- Rev. Fr. Fidelis Okpanachi, Parish Priest</p>
            <Link
              to="/clergy"
              className="inline-flex items-center bg-accent text-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-yellow-400 transition-colors duration-300 shadow-md"
            >
              Meet Our Clergy <Lightbulb size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Latest News & Announcements (Enhanced with more detail) */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-16 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-accent">
            Latest News & Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* News Item 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <img src="https://media.istockphoto.com/id/1381609462/photo/fun-happy-diverse-young-group-of-generation-z-friends-outdoors-laughing-and-hanging-out.jpg?s=612x612&w=0&k=20&c=dDaVAQtdzGEOTwppLEJZuENDGhG3ge4ihI6E7uy95HY=" alt="Youth Group" className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">Youth Group Summer Retreat</h3>
                <p className="text-sm text-gray-600 mb-4 flex items-center"><Calendar size={16} className="mr-2 text-primary" /> June 24, 2025 | <Users size={16} className="ml-3 mr-2 text-primary" />Youth Ministry</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Registration for our annual Youth Summer Retreat is now open! An unforgettable week of faith, fun, and fellowship awaits. Sign up today!
                </p>
                <Link to="/events" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors duration-300">
                  Read More <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <img src="https://www.shutterstock.com/image-vector/colorful-christian-cross-human-hands-600nw-1814154263.jpg" alt="Parish Outreach" className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">Community Food Drive Success!</h3>
                <p className="text-sm text-gray-600 mb-4 flex items-center"><Calendar size={16} className="mr-2 text-primary" /> June 20, 2025 | <HeartHandshake size={16} className="ml-3 mr-2 text-primary" />Social Justice</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Thanks to your incredible generosity, our recent food drive collected over 500 lbs of donations for local families in need.
                </p>
                <Link to="/ministries" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors duration-300">
                  See Impact <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <img src="https://stfinbarburbank.org/wp-content/uploads/2020/12/Screen-Shot-2020-12-30-at-1.51.03-PM-1024x511.jpg" alt="Mass Schedule" className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">New Weekday Mass Time</h3>
                <p className="text-sm text-gray-600 mb-4 flex items-center"><Calendar size={16} className="mr-2 text-primary" /> June 18, 2025 | <Church size={16} className="ml-3 mr-2 text-primary" />Parish Office</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Beginning July 1st, we will offer an additional weekday Mass at 6:00 PM to accommodate commuters.
                </p>
                <Link to="/events" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors duration-300">
                  Full Schedule <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link
              to="/news" // Assuming you'll create a dedicated /news page
              className="bg-primary text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-dark transition-all duration-300 transform hover:-translate-y-1"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* New Section 5: Testimonials/Quotes (Carousel-like, but static for now) */}
      <section className="py-24 bg-secondary text-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-16 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            Voices of Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-xl shadow-2xl flex flex-col items-center justify-center">
              <MessageSquareQuote size={64} className="text-accent mb-6" />
              <p className="text-xl italic text-gray-800 mb-6 leading-relaxed">
                "Coming to this parish feels like coming home. The sermons are inspiring, the community is incredibly supportive, and the liturgies are truly beautiful. It's a place where my faith truly flourishes."
              </p>
              <p className="text-lg font-bold text-dark">- Maria S., Parishioner since 2010</p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-2xl flex flex-col items-center justify-center">
              <MessageSquareQuote size={64} className="text-accent mb-6" />
              <p className="text-xl italic text-gray-800 mb-6 leading-relaxed">
                "My children love the catechism classes here. The teachers are so dedicated, and they make learning about our faith fun and engaging. We feel truly blessed to be a part of this parish family."
              </p>
              <p className="text-lg font-bold text-dark">- David & Sarah L., Parents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Featured Ministry Spotlight (Left-Right Layout, enhanced) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-16"> {/* Changed to flex-row-reverse */}
          <div className="lg:w-1/2">
            <img src="https://www.queenofpeaceparishep.org/uploads/6/0/6/1/6061176/jae70k8l5gccl57ii4vegslci4l_orig.jpg" alt="Featured Ministry" className="rounded-xl shadow-2xl w-full h-auto object-cover border-4 border-primary/20 transform hover:scale-[1.02] transition-transform duration-500" />
          </div>
          <div className="lg:w-1/2 text-center lg:text-right"> {/* Text alignment changed */}
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-8 leading-tight">
              Spotlight on Our Liturgical Ministry
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our Liturgical Ministry plays a vital role in creating a prayerful and engaging atmosphere during our Masses. From lectors and Eucharistic ministers to altar servers and sacristans, their dedication helps us all encounter Christ more deeply and ensures the beauty of our sacred celebrations.
            </p>
            <Link
              to="/ministries"
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full text-lg font-bold shadow-md hover:bg-dark transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore All Ministries <BookOpenText size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* New Section 7: Quick Links / Resources */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-16 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-accent">
            Quick Links & Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/sacraments" className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
              <Church size={60} className="text-primary mx-auto mb-4 group-hover:text-accent transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-dark group-hover:text-primary">Sacraments</h3>
            </Link>
            <Link to="/giving" className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
              <DollarSign size={60} className="text-primary mx-auto mb-4 group-hover:text-accent transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-dark group-hover:text-primary">Online Giving</h3>
            </Link>
            <Link to="/contact" className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
              <Phone size={60} className="text-primary mx-auto mb-4 group-hover:text-accent transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-dark group-hover:text-primary">Contact Us</h3>
            </Link>
            <Link to="/bulletin" className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
              <BookOpenText size={60} className="text-primary mx-auto mb-4 group-hover:text-accent transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-dark group-hover:text-primary">Weekly Bulletin</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Call to Action - Get Involved/Give (Enhanced) */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8 leading-tight">
            Join Our Mission
          </h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Your support, whether through volunteering your time, sharing your talents, or offering financial contributions, empowers us to continue our vital work for God's glory and the good of our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-8">
            <Link
              to="/ministries"
              className="bg-accent text-primary px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Get Involved
            </Link>
            <Link
              to="/giving"
              className="bg-white text-primary px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Make a Gift
            </Link>
          </div>
        </div>
      </section>

      {/* New Section 9: Contact Information / Visit Us */}
      <section className="py-24 bg-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-16 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-accent">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left bg-primary/20 p-10 rounded-xl shadow-inner">
              <h3 className="text-3xl font-semibold mb-6">Our Location & Contact</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <MapPin size={24} className="mr-4 mt-1 text-accent flex-shrink-0" />
                  <span>123 Divine Path, Cityville, State 12345</span>
                </li>
                <li className="flex items-start">
                  <Phone size={24} className="mr-4 mt-1 text-accent flex-shrink-0" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-start">
                  <Mail size={24} className="mr-4 mt-1 text-accent flex-shrink-0" />
                  <span>info@ourchurch.org</span>
                </li>
                <li className="flex items-start">
                  <Clock size={24} className="mr-4 mt-1 text-accent flex-shrink-0" />
                  <span>Office Hours: Mon-Fri, 9:00 AM - 4:00 PM</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center bg-accent text-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-yellow-400 transition-colors duration-300 shadow-md"
              >
                Get Directions <MapPin size={20} className="ml-2" />
              </Link>
            </div>
            <div className="h-96 w-full rounded-xl shadow-2xl overflow-hidden">
              {/* Placeholder for Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3116188083177!2d3.3142351!3d6.4821617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8934ac1c14f9%3A0x46fc151d78b05690!2sOur%20Mother%20Of%20Perpertual%20Help%20Catholic%20Church%20Amuwo%20Odofin!5e0!3m2!1sen!2sng!4v1750903751057!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location Map"
              ></iframe>
              {/* Replace the src with your actual church's Google Maps embed URL */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
