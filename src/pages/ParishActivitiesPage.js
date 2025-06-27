import React from 'react';
import { Church, CalendarDays, Clock, Users } from 'lucide-react';

const ParishActivitiesPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-white shadow-xl mb-16 rounded-b-3xl"
        style={{ backgroundImage: `url('https://i.pinimg.com/736x/e7/32/9f/e7329f1f4835afb318ebaa887e1d2948.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-primary/40 rounded-b-3xl"></div>
        <div className="absolute inset-0 bg-black opacity-30 rounded-b-3xl"></div>
        <h1 className="z-10 text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif text-center drop-shadow-lg tracking-wide">
          Parish Activities
        </h1>
      </section>

      <div className="container mx-auto py-12 px-4">
        {/* Mass Schedules Section */}
        <section className="mb-20 bg-gradient-to-br from-white to-light p-8 md:p-12 rounded-2xl shadow-xl border border-primary-light">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 text-center leading-tight">
            Mass Schedules
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Sunday Mass Schedules */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <Church size={64} className="text-accent mb-6" />
              <h3 className="text-3xl font-bold text-dark mb-4">Sunday Mass Schedules</h3>
              <div className="space-y-4 text-lg text-gray-700 w-full max-w-md">
                <div className="text-left">
                  <p className="font-semibold text-primary text-xl mb-2">Main Church</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>6:30 am</li>
                    <li>8:30 am (Youth)</li>
                    <li>10:30 am (Latin)</li>
                    <li>5:00 pm (Holy Hour with Vespers)</li>
                    <li>6:00 pm (Evening mass)</li>
                  </ul>
                </div>
                <div className="text-left pt-4 border-t border-gray-200">
                  <p className="font-semibold text-primary text-xl mb-2">Mass Center</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>7:00 am </li>
                    <li>9:00 am </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Other Days Mass Schedules */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <CalendarDays size={64} className="text-accent mb-6" />
              <h3 className="text-3xl font-bold text-dark mb-4">Other Days Mass Schedules</h3>
              <div className="space-y-4 text-lg text-gray-700 w-full max-w-md">
                <div className="text-left">
                  <p className="font-semibold text-primary text-xl mb-2">Weekdays</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Morning: 6:30 am</li>
                    <li>Afternoon: 12:30 pm</li>
                    <li>Evening: 6:30 pm</li>
                  </ul>
                </div>
                <div className="text-left pt-4 border-t border-gray-200">
                  <p className="font-semibold text-primary text-xl mb-2">Saturdays</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Morning: 6:30 am</li>
                    <li>Evening: 6:30 pm</li>
                  </ul>
                </div>
                <div className="text-left pt-4 border-t border-gray-200">
                  <p className="font-semibold text-primary text-xl mb-2">Public Holidays</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Morning: 6:30 am</li>
                    <li>Evening: 6:30 pm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2023 Passion Play Image Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 text-center leading-tight">
            2023 Passion Play
          </h2>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <img
              src="catholic act 1.jpg" // Using the uploaded image
              alt="2023 Passion Play"
              className="w-full h-auto object-cover max-h-[600px]"
            />
            {/* Placeholder for carousel indicators if needed later */}
            <div className="flex justify-center p-4">
              {/* <div className="w-3 h-3 rounded-full bg-gray-300 mx-1"></div> */}
            </div>
          </div>
        </section>

        {/* Other Parish Activities & Schedules Section */}
        <section className="mb-20 bg-gradient-to-br from-white to-light p-8 md:p-12 rounded-2xl shadow-xl border border-primary-light">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 text-center leading-tight">
            Other Parish Activities & Schedules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-lg text-gray-700">
            {/* Left Column Activities */}
            <div>
              <p className="font-semibold text-primary text-xl mb-2">Infant Baptism</p>
              <p className="mb-4">1<sup>st</sup> and 3<sup>rd</sup> Saturday of the Month - 8:00 am</p>

              <p className="font-semibold text-primary text-xl mb-2">Compulsory Pre-Baptism Instruction for Parents and God-Parents</p>
              <p className="mb-4">On Sunday before the Baptism - 4:00 pm</p>

              <p className="font-semibold text-primary text-xl mb-2">Confessions</p>
              <p className="mb-4">Tuesday - Thursday after each Mass<br />Saturday: 5:00 pm to 6:00 pm<br /><span className="text-red-600">Penitents are to be seated on or before 5:30 pm</span></p>

              <p className="font-semibold text-primary text-xl mb-2">Holy Hours with Vespers</p>
              <p className="mb-4">Sundays - 5:00 pm</p>

              <p className="font-semibold text-primary text-xl mb-2">Life in the Spirit Seminar</p>
              <p className="mb-4">Every Sunday - 2:00 pm<br />Seminar is compulsory for PPC, PFC and Leaders of all societies in the parish.</p>
              
              <p className="font-semibold text-primary text-xl mb-2">Communion to the Sick and Aged</p>
              <p className="mb-4">Every 1<sup>st</sup> Friday of the Month</p>

              <p className="font-semibold text-primary text-xl mb-2">Christian Wake keep/ Requiem / Funeral Mass</p>
              <p className="mb-4">Book at Parish office with any of the Priests</p>
            </div>

            {/* Right Column Activities */}
            <div>
              <p className="font-semibold text-primary text-xl mb-2">Pre-Marriage Course</p>
              <p className="mb-4">Sunday - 10:00 am - 12:00 Noon<br />Marriage is arranged with the Priest: 6 Months' notice is required before the wedding.</p>

              <p className="font-semibold text-primary text-xl mb-2">Wedding Mass <span className="text-red-600">(No wedding during Advent & Lent.)</span></p>
              <p className="mb-4">Saturdays only - 10:00 am or 12 Noon</p>

              <p className="font-semibold text-primary text-xl mb-2">Catechism Classes</p>
              <p className="mb-4">Saturdays: 4:00 pm - 6:00 pm</p>
              
              <p className="font-semibold text-primary text-xl mb-2">Catechism Class (Adults & Convert)</p>
              <p className="mb-4">Sundays: 4:00 pm - 6:00 pm</p>

              <p className="font-semibold text-primary text-xl mb-2">Exposition of the Blessed Sacrament</p>
              <p className="mb-4">1<sup>st</sup> Fridays - Immediately after morning & afternoon masses</p>

              <p className="font-semibold text-primary text-xl mb-2">Impact Praise</p>
              <p className="mb-4">1<sup>st</sup> Fridays - beginning with evening mass by 6:00 pm</p>

              <p className="font-semibold text-primary text-xl mb-2">Small Christian Society (SCC)</p>
              <p className="mb-4">Every Wednesday - 6:00 pm</p>

              <p className="font-semibold text-primary text-xl mb-2">Know your SCC!</p>
              <p className="mb-4">
                {/* You might want to add content or a link here later */}
              </p>
            </div>
          </div>
        </section>

        {/* Holy Family Parish Feast Day Image Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 text-center leading-tight">
            Our Mother of Perpetual Help Parish Feast Day
          </h2>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <img
              src="catholic act 2.jpg" // Using the uploaded image
              alt="OMPH Parish Feast Day"
              className="w-full h-auto object-cover max-h-[600px]"
            />
            {/* Placeholder for carousel indicators if needed later */}
            <div className="flex justify-center p-4">
              {/* <div className="w-3 h-3 rounded-full bg-gray-300 mx-1"></div> */}
            </div>
          </div>
        </section>

        {/* Parish Office Hours Section */}
        <section className="bg-gradient-to-br from-white to-light p-8 md:p-12 rounded-2xl shadow-xl border border-primary-light">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-10 text-center leading-tight">
            Parish Office Hours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg text-gray-700">
            {/* Rev. Fathers' Office Hours */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-dark mb-4 flex items-center">
                <Users size={32} className="mr-3 text-primary" />Rev. Fathers' Office Hours
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-primary text-xl mb-1">Rev. Fr. Fidelis Okpanachi (Parish Priest)</p>
                  <p>Tuesday & Friday 10:00 am - 1:00 pm</p>
                </div>
                <div>
                  <p className="font-semibold text-primary text-xl mb-1">Rev. Fr. Stephen Okoli (Associate Priest)</p>
                  <p>Monday & Wednesday 10:00 am - 1:00 pm</p>
                </div>
              </div>
            </div>

            {/* Parish Office / Secretaries / Catechist */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-dark mb-4 flex items-center">
                <Clock size={32} className="mr-3 text-primary" />Parish Office / Secretaries / Catechist
              </h3>
              <p className="mb-4">Mondays - Fridays: 9:00 am - 4:00 pm</p>
              <p className="mb-4">Sundays: 9:00 am - 12:00 Noon</p>
              <p className="text-red-600 font-semibold">Office closed on Thursdays & Saturdays</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ParishActivitiesPage;
