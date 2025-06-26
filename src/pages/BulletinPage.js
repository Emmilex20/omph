import { Link } from 'react-router-dom';
import { FileText, Download, BookOpen, ScrollText, ExternalLink, Info } from 'lucide-react'; // Added ExternalLink icon

const BulletinPage = () => {
  // Removed dailyReadings, loadingReadings, readingsError states as they are no longer needed for fetching
  // We'll keep the error display structure, but trigger it manually if needed for information.

  // Mock data for weekly bulletins
  const currentBulletin = {
    title: 'Weekly Bulletin - June 23, 2025', // Adjust this date as needed
    date: 'June 23, 2025',
    pdfUrl: 'https://www.orlchurches.org/wp-content/uploads/2023/12/2023-12-17_TheFourthSundayofAdvent_Bulletin.pdf' // Example PDF
  };

  const archivedBulletins = [
    {
      title: 'Weekly Bulletin - June 16, 2025',
      date: 'June 16, 2025',
      pdfUrl: 'https://www.st-joseph-church.org/uploads/1/0/5/2/105260813/september_24_2023_bulletin.pdf'
    },
    {
      title: 'Weekly Bulletin - June 9, 2025',
      date: 'June 9, 2025',
      pdfUrl: 'https://stcatherinech.org/wp-content/uploads/2023/10/October-22-2023-Bulletin.pdf'
    },
    {
      title: 'Weekly Bulletin - June 2, 2025',
      date: 'June 2, 2025',
      pdfUrl: 'https://sacredheartwinchester.org/wp-content/uploads/2023/10/20231008-Sacred-Heart-Parish-Bulletin.pdf'
    },
    {
      title: 'Weekly Bulletin - May 26, 2025',
      date: 'May 26, 2025',
      pdfUrl: 'https://stcharlesli.org/wp-content/uploads/2023/10/ST-CHARLES-BOROMEO-10-15-2023-WEBSITE.pdf'
    },
  ];

  // No useEffect or fetch call needed anymore for readings

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section: Bulletin & Daily Readings */}
      <section className="relative bg-hero-bulletin bg-cover bg-center h-80 md:h-96 flex items-center justify-center text-white rounded-lg shadow-xl mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-dark/50 z-0"></div>
        <h1 className="z-10 text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif leading-tight drop-shadow-2xl text-center">
          Weekly Bulletin & Daily Readings
        </h1>
      </section>

      {/* Main Content: Bulletin & Readings in a Two-Column Layout */}
      <section className="flex flex-col lg:flex-row gap-10">
        {/* Left Column: Weekly Bulletin */}
        <div className="lg:w-1/2 space-y-10">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6 flex items-center">
              <FileText size={36} className="mr-3 text-accent" />Current Weekly Bulletin
            </h2>
            <div className="border border-secondary rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 shadow-md">
              <div className="md:w-1/3 flex-shrink-0">
                <img
                  src="https://images.booksense.com/images/136/176/9781586176136.jpg"
                  alt="Bulletin Cover"
                  className="w-full h-auto rounded-md shadow-lg"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="2xl font-bold text-dark mb-2">{currentBulletin.title}</h3>
                <p className="text-gray-600 text-lg mb-4">Published: {currentBulletin.date}</p>
                <a
                  href={currentBulletin.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full text-lg font-bold shadow-md hover:bg-dark transition-colors duration-300 transform hover:-translate-y-0.5"
                >
                  Download Latest <Download size={20} className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Archived Bulletins */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6 flex items-center">
              <BookOpen size={36} className="mr-3 text-accent" />Archived Bulletins
            </h2>
            <ul className="space-y-4">
              {archivedBulletins.map((bulletin, index) => (
                <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex-grow mb-2 sm:mb-0">
                    <h3 className="xl font-semibold text-dark">{bulletin.title}</h3>
                    <p className="text-gray-600 text-sm">{bulletin.date}</p>
                  </div>
                  <a
                    href={bulletin.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-accent font-medium text-md"
                  >
                    View / Download <Download size={16} className="ml-1.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Daily Readings - Now with Direct Links */}
        <div className="lg:w-1/2 space-y-10">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6 flex items-center">
              <ScrollText size={36} className="mr-3 text-accent" />Catholic Daily Readings
            </h2>

            <div className="text-center py-10 text-gray-700 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <Info size={48} className="mx-auto mb-4 text-blue-600" />
                <p className="text-xl font-semibold mb-4">
                    Access Today's Daily Readings
                </p>
                <p className="text-lg mb-6">
                    For the most accurate and up-to-date daily Catholic readings, please visit one of the official external sources below:
                </p>
                <div className="flex flex-col space-y-4">
                    <a
                        href="https://www.nigeriacatholicnetwork.com/readings/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-full text-lg font-bold shadow-md hover:bg-dark transition-colors duration-300 transform hover:-translate-y-0.5"
                    >
                        Nigeria Catholic Network <ExternalLink size={20} className="ml-2" />
                    </a>
                    <a
                        href="https://bible.usccb.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-3 rounded-full text-lg font-bold border border-primary shadow-md hover:bg-primary hover:text-white transition-colors duration-300 transform hover:-translate-y-0.5"
                    >
                        USCCB (Official US Readings) <ExternalLink size={20} className="ml-2" />
                    </a>
                </div>
                <p className="mt-6 text-sm text-gray-500">
                    These links will open in a new tab.
                </p>
            </div>

            {/* Removed the loading, error, and displayed readings sections */}

            {/* The reflections section remains */}
          </div>

          {/* Section: Reflections (Placeholder) */}
          <div className="bg-secondary text-primary p-8 rounded-xl shadow-lg text-center">
            <BookOpen size={48} className="mx-auto mb-6 text-primary" />
            <h3 className="2xl font-bold mb-4">Daily Reflections</h3>
            <p className="mb-6 text-lg">
              Complement your daily readings with inspiring reflections from our clergy.
            </p>
            <Link
              to="/sermons"
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full text-lg font-bold shadow-md hover:bg-dark transition-colors duration-300"
            >
              View All Sermons <BookOpen size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulletinPage;
