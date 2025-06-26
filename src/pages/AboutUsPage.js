import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Handshake, Church, User, BookOpen, MapPin, Sparkles } from 'lucide-react'; // Added new icons

const AboutUsPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section: About Us */}
      <section className="relative bg-hero-community bg-cover bg-center h-80 md:h-96 flex items-center justify-center text-white rounded-lg shadow-xl mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-dark/50 z-0"></div>
        <h1 className="z-10 text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif leading-tight drop-shadow-2xl text-center">
          Our Story, Our Faith
        </h1>
      </section>

      {/* Introduction */}
      <section className="mb-16 text-center max-w-4xl mx-auto px-4">
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-serif">
          Welcome to Our Mother Of Perpetual Help Catholic Church, a spiritual home where hearts are nourished, faith is deepened, and lives are transformed. For over 70 years, we have been a beacon of Christ's light in the vibrant community of <strong>Amuwo, Lagos</strong>, guided by the timeless teachings of the Catholic Church.
        </p>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          We are a diverse and vibrant family of believers, united by our love for God and our commitment to serving one another. Whether you are a lifelong Catholic, exploring your faith, or simply seeking a welcoming community, we invite you to experience the grace and fellowship that defines our parish.
        </p>
      </section>

      {/* Welcome from Our Parish Priest (New Section - Left/Right Layout) */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-10 md:p-16 rounded-xl shadow-2xl mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary text-center mb-12">
          A Welcome from Our Parish Priest
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 flex-shrink-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElnlWiVqFALVDhMQyL22KQPlZmUkAd5G1VA&s" // Placeholder image for a priest
              alt="Rev. Fr. Fidelis Okpanachi"
              className="rounded-xl shadow-2xl w-full h-auto object-cover border-4 border-white transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 italic">
              "As your Parish Priest, I extend a heartfelt invitation to join our family at Our Mother Of Perpetual Help Catholic Church. Here, you will find a vibrant community dedicated to worshipping God, growing in faith, and serving our neighbours with love and compassion. May God bless you abundantly."
            </p>
            <p className="text-2xl font-bold text-primary mb-2">Rev. Fr. Fidelis Okpanachi</p>
            <p className="text-lg text-gray-600">Parish Priest</p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gradient-to-br from-white to-secondary p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
          <Leaf size={64} className="text-accent mx-auto mb-4 drop-shadow-lg" />
          <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
          <p className="text-gray-800 leading-relaxed">
            To proclaim the Gospel of Jesus Christ, celebrate the Sacraments, and foster a community of prayer, service, and love.
          </p>
        </div>
        <div className="bg-gradient-to-br from-white to-secondary p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
          <Handshake size={64} className="text-accent mx-auto mb-4 drop-shadow-lg" />
          <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
          <p className="text-gray-800 leading-relaxed">
            To be a dynamic and inclusive parish where all are welcomed, nourished by the Eucharist, and empowered to live as disciples of Christ.
          </p>
        </div>
        <div className="bg-gradient-to-br from-white to-secondary p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
          <Church size={64} className="text-accent mx-auto mb-4 drop-shadow-lg" />
          <h3 className="text-2xl font-bold text-primary mb-3">Our Values</h3>
          <p className="text-gray-800 leading-relaxed">
            Faith, Community, Service, Compassion, and Reverence for God and all creation.
          </p>
        </div>
      </section>

      {/* Our Rich History (Modified to Alternating Left/Right) */}
      <section className="bg-gray-50 p-10 md:p-16 rounded-xl shadow-2xl mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-12 text-center">Our Rich History</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
          <div className="lg:w-1/2">
            <img
              src="https://www.africaredemptorists.com/wp-content/uploads/2019/10/Nigeria1-1-644x483.jpg"
              alt="Historic Church Building"
              className="rounded-xl shadow-xl w-full h-auto object-cover border-4 border-white transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our Mother Of Perpetual Help Catholic Church was founded in <strong>1953</strong> by a dedicated group of pioneering families who envisioned a spiritual home for the growing Catholic population in <strong>Amuwo</strong>. Starting with humble beginnings in a temporary chapel, the community quickly flourished, driven by deep faith and communal spirit.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Through decades of growth and development, our parish has witnessed countless baptisms, marriages, and spiritual awakenings. We built our beautiful church sanctuary in 1970, followed by the parish hall and school facilities, all sustained by the unwavering faith and generosity of our parishioners.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we honor our past while eagerly embracing the future, continuing to serve as a vibrant center of Catholic life and a testament to God's enduring love in Amuwo.
            </p>
          </div>
        </div>

        {/* Second history paragraph if needed, demonstrating reverse layout */}
        
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
                <img
                    src="https://www.africaredemptorists.com/wp-content/uploads/2019/06/Nigeria-conference17-1-644x483.jpg"
                    alt="Community Gathering"
                    className="rounded-xl shadow-xl w-full h-auto object-cover border-4 border-white transform hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    The 2000s marked a period of renewed evangelization and outreach, with the establishment of various ministries focused on youth, social justice, and evangelization. Our parish has continually adapted to the needs of our evolving community, always striving to be a welcoming home for all.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    We look forward to many more years of serving God and our community, building upon the strong foundation laid by those who came before us.
                </p>
            </div>
        </div>
      </section>

      {/* What We Believe (New Section) */}
      <section className="bg-primary text-white py-12 md:py-16 rounded-xl shadow-2xl mb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-12">What We Believe</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Our faith is rooted in the rich tradition of the Catholic Church, centered on the life, death, and resurrection of Jesus Christ. We believe in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-primary-dark rounded-lg shadow-inner flex flex-col items-center">
              <Sparkles size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">The Holy Eucharist</h3>
              <p className="text-gray-200 text-center">
                The source and summit of our Christian life, truly the Body and Blood of Christ.
              </p>
            </div>
            <div className="p-6 bg-primary-dark rounded-lg shadow-inner flex flex-col items-center">
              <BookOpen size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Sacred Scripture & Tradition</h3>
              <p className="text-gray-200 text-center">
                The inspired Word of God, alongside the living Tradition of the Church.
              </p>
            </div>
            <div className="p-6 bg-primary-dark rounded-lg shadow-inner flex flex-col items-center">
              <Handshake size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Community & Service</h3>
              <p className="text-gray-200 text-center">
                Living out our faith through fellowship, charity, and social justice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parish Leadership */}
      <section className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-12">Our Parish Leadership</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Our parish is blessed with dedicated clergy and a committed team of lay leaders who guide our spiritual and community life with grace and devotion.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Leader 1 (Adjusted to be more specific to Lagos) */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElnlWiVqFALVDhMQyL22KQPlZmUkAd5G1VA&s" alt="Fr. Fidelis Okpanachi" className="rounded-full w-32 h-32 mx-auto object-cover mb-4 shadow-md border-2 border-primary" />
            <h4 className="text-xl font-bold text-dark">Rev. Fr. Fidelis Okpanachi</h4>
            <p className="text-primary text-md mb-2">Parish Priest</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Father Fidelis brings years of pastoral experience and spiritual guidance to our community, overseeing our liturgical and administrative functions.
            </p>
          </div>
          {/* Example Leader 2 (Generic placeholder for now) */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <img src="https://placehold.co/150x150/C5CAE9/000000?text=Deacon+Mark" alt="Deacon Mark Smith" className="rounded-full w-32 h-32 mx-auto object-cover mb-4 shadow-md border-2 border-primary" />
            <h4 className="text-xl font-bold text-dark">Deacon Mark Smith</h4>
            <p className="text-primary text-md mb-2">Permanent Deacon</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Deacon Mark assists the clergy in liturgical duties and is deeply involved in our parish's outreach programs.
            </p>
          </div>
          {/* Example Leader 3 (Generic placeholder for now) */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <img src="https://placehold.co/150x150/C5CAE9/000000?text=Sarah+Brown" alt="Sarah Brown" className="rounded-full w-32 h-32 mx-auto object-cover mb-4 shadow-md border-2 border-primary" />
            <h4 className="text-xl font-bold text-dark">Sarah Brown</h4>
            <p className="text-primary text-md mb-2">Parish Administrator</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sarah manages the daily operations of our parish office, ensuring a smooth and organized environment for our community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Location & Diocese (New Section) */}
      <section className="bg-secondary p-10 md:p-16 rounded-xl shadow-2xl mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-12">
          Our Home in Amuwo
        </h2>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12"> {/* Reverse layout here */}
          <div className="lg:w-1/2 flex-shrink-0">
            {/* Example Google Maps iframe (replace with actual map for Lekki) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3116188083177!2d3.3142351!3d6.4821617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8934ac1c14f9%3A0x46fc151d78b05690!2sOur%20Mother%20Of%20Perpertual%20Help%20Catholic%20Church%20Amuwo%20Odofin!5e0!3m2!1sen!2sng!4v1750903751057!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-xl border-4 border-white"
              title="Lekki Map"
            ></iframe>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-dark mb-4 flex items-center justify-center lg:justify-start">
              <MapPin size={32} className="mr-3 text-accent" />Located in the Heart of Amuwo
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our Mother Of Perpetual Help Catholic Church is proudly situated in the vibrant and growing community of <strong>Amuwo, Lagos, Nigeria</strong>. We are a parish of the <strong>Catholic Archdiocese of Lagos</strong>, serving the spiritual needs of families and individuals across our region.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our address is F8J7+VM9, Maria Rd, Amuwo Odofin Estate, Lagos 102102, Lagos. We invite you to visit us and become a part of our thriving parish family.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials/Quotes */}
      <section className="bg-primary text-white py-12 md:py-16 rounded-xl shadow-2xl mb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-12">Voices from Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-primary-dark rounded-lg shadow-inner transform hover:scale-105 transition-transform duration-300">
              <p className="italic text-lg mb-4">
                "Our Mother Of Perpetual Help has truly become our second home. The welcoming spirit and deep faith here have transformed our family life in Lekki."
              </p>
              <p className="font-semibold">- The Eze Family</p> {/* More Nigerian sounding */}
            </div>
            <div className="p-6 bg-primary-dark rounded-lg shadow-inner transform hover:scale-105 transition-transform duration-300">
              <p className="italic text-lg mb-4">
                "The homilies are always inspiring, and the community service programs have allowed me to live out my faith in tangible ways right here in Lagos."
              </p>
              <p className="font-semibold">- Chioma Okoro</p> {/* More Nigerian sounding */}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community (New Section - Call to Action) */}
      <section className="bg-gradient-to-r from-secondary to-blue-100 p-10 md:p-16 rounded-xl shadow-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-8">Join Our Vibrant Community!</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10">
          Whether you're new to Amuwo, returning to the Church, or simply curious about Catholicism, we warmly invite you to become a part of Our Mother Of Perpetual Help Catholic Church. We are a family of faith, hope, and love.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/contact" // Assuming you have a Contact Us page
            className="inline-flex items-center bg-primary text-white px-10 py-4 rounded-full text-lg md:text-xl font-bold shadow-lg hover:bg-dark transition-colors duration-300 transform hover:-translate-y-1"
          >
            Contact Us <User size={24} className="ml-3" />
          </Link>
          <Link
            to="/mass-times" // Assuming you have a Mass Times page
            className="inline-flex items-center bg-transparent text-primary border-2 border-primary px-10 py-4 rounded-full text-lg md:text-xl font-bold shadow-lg hover:bg-primary hover:text-white transition-colors duration-300 transform hover:-translate-y-1"
          >
            Mass Times <Church size={24} className="ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
