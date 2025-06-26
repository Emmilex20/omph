// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or any other modern font
        serif: ['Merriweather', 'serif'], // For headings/special text
      },
      colors: {
        primary: '#1A237E', // Dark Blue
        secondary: '#C5CAE9', // Light Blue/Indigo
        accent: '#FFD700', // Gold/Yellow for highlights
        dark: '#212121', // Dark Gray
        light: '#F5F5F5', // Off-white
        'primary-dark': '#151A68', // A darker shade of primary for backgrounds
      },
      backgroundImage: {
        'hero-mass': "url('https://lh5.googleusercontent.com/p/AF1QipOwB6XoDwyyYbBzWk6MON2Rzu5FuREkqC1Letpp')",
        'hero-community': "url('https://i.ytimg.com/vi/QuREzwu4Jes/maxresdefault.jpg')",
        'hero-ministry': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiSJnJeR68VpSDR3bQp7UdYyON6UYy3_EAa6B-YHvkdyBU1-DaI6HUDxBrzcfjfNW6Aw&usqp=CAU')",
        'hero-sacraments': "url('https://cdn.catholic.com/wp-content/uploads/sacrament-1200x400.jpg')",
        'hero-events': "url('https://cornerstone-ccf.org/wp-content/uploads/elementor/thumbs/Upcoming-Events-Church-Service-Still--pyckdfs6lepmal4bidcgjpcceradls7c9jlj2cat4a.jpg')",
        'hero-giving': "url('https://stlawrence.org/wp-content/uploads/2020/07/online-giving.jpg')",
        'hero-contact': "url('https://acspromoters.com/wp-content/uploads/2024/07/about-us-header-pagess-aboutss-CONTACT-USW.png')",
        'hero-news': "url('https://3.files.edl.io/43e2/21/05/26/014438-d995b516-d286-4bf9-9728-585aaf66fcd6.jpg')",
        'hero-bulletin': "url('https://www.simplycatholic.com/wp-content/uploads/2019/01/church-3412895_1920.jpg')", 
      }
    },
  },
  plugins: [],
}