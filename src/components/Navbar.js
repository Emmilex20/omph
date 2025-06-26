import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Info,
  Cross, // For Sacraments
  Users, // For Ministries
  Calendar, // For Events/Calendar
  BookOpen, // For Clergy & Staff
  Mail,
  DollarSign,
  Menu,
  X,
  ChevronDown, // New icon for dropdown
  ChevronUp,   // New icon for dropdown
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null); // State to manage which dropdown is open

  // New structure for navigation links, including nested links for dropdowns
  const navLinks = [
    { name: 'Home', path: '/', icon: Home, type: 'link' },
    { name: 'About Us', path: '/about', icon: Info, type: 'link' },
    { name: 'Sacraments', path: '/sacraments', icon: Cross, type: 'link' },
    {
      name: 'Parish Life',
      icon: Users, // Using Users icon for Parish Life dropdown
      type: 'dropdown',
      subLinks: [
        { name: 'Ministries', path: '/ministries', icon: Users },
        { name: 'Calendar & Events', path: '/events', icon: Calendar }, // Combined/renamed
        { name: 'Clergy & Staff', path: '/clergy', icon: BookOpen },
      ],
    },
    { name: 'Online Giving', path: '/giving', icon: DollarSign, type: 'link' },
    { name: 'Contact Us', path: '/contact', icon: Mail, type: 'link' },
  ];

  const handleDropdownToggle = (name) => {
    setIsDropdownOpen(isDropdownOpen === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(null); // Close any open dropdowns when closing mobile menu
  };

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Church Name */}
        <Link to="/" className="flex items-center space-x-4 text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6fHDuGgbZUhg6ChDznixSq_80pIjXfeoDSg&s"
            alt="Church Logo"
            className="h-14 w-14 rounded-full object-cover shadow-lg border-2 border-white" // Larger, more prominent logo
          />
          {/* Main Name Span: Removed whitespace-nowrap and added <br /> */}
          <span className="font-bold font-serif text-lg md:text-xl lg:text-2xl leading-tight tracking-wide">
            Our Mother of Perpetual Help <br className="hidden md:block" />Catholic Church
          </span>
          
        </Link>
        {/* Desktop Navigation */}
        {/* Increased space-x for more separation between navigation items */}
        <div className="hidden lg:flex items-center space-x-8"> {/* Increased space-x from 6 to 8 */}
          {navLinks.map((link) => (
            link.type === 'link' ? (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center space-x-2 text-white hover:text-accent transition-colors duration-300 transform hover:scale-105 group"
              >
                <link.icon size={20} className="group-hover:rotate-6 transition-transform" />
                <span className="font-semibold text-lg">{link.name}</span>
              </Link>
            ) : (
              // Dropdown parent link
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => handleDropdownToggle(link.name)}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                <button
                  className="flex items-center space-x-2 text-white hover:text-accent transition-colors duration-300 transform hover:scale-105 focus:outline-none"
                >
                  <link.icon size={20} className="group-hover:rotate-6 transition-transform" />
                  <span className="font-semibold text-lg">{link.name}</span>
                  {isDropdownOpen === link.name ? (
                    <ChevronUp size={16} className="ml-1 transition-transform duration-200" />
                  ) : (
                    <ChevronDown size={16} className="ml-1 transition-transform duration-200" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen === link.name && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-out"
                    onMouseEnter={() => setIsDropdownOpen(link.name)} // Keep open if hovering submenu
                    onMouseLeave={() => setIsDropdownOpen(null)} // Close if leaving submenu
                  >
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className="flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
                        onClick={() => setIsDropdownOpen(null)} // Close dropdown on click
                      >
                        <subLink.icon size={18} />
                        <span>{subLink.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary pb-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              link.type === 'link' ? (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center space-x-3 text-white text-lg font-semibold hover:text-accent transition-colors duration-300"
                  onClick={closeMobileMenu} // Close menu on click
                >
                  <link.icon size={24} />
                  <span>{link.name}</span>
                </Link>
              ) : (
                // Mobile Dropdown
                <div key={link.name} className="w-full text-center">
                  <button
                    onClick={() => handleDropdownToggle(link.name)}
                    className="flex items-center justify-center space-x-3 text-white text-lg font-semibold hover:text-accent transition-colors duration-300 w-full py-2 focus:outline-none"
                  >
                    <link.icon size={24} />
                    <span>{link.name}</span>
                    {isDropdownOpen === link.name ? (
                      <ChevronUp size={20} className="ml-2 transition-transform duration-200" />
                    ) : (
                      <ChevronDown size={20} className="ml-2 transition-transform duration-200" />
                    )}
                  </button>
                  {isDropdownOpen === link.name && (
                    <div className="flex flex-col items-center bg-primary-dark py-2 space-y-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="flex items-center space-x-3 text-white text-base hover:text-accent transition-colors duration-300 w-full justify-center py-1"
                          onClick={closeMobileMenu} // Close mobile menu and dropdown on click
                        >
                          <subLink.icon size={20} />
                          <span>{subLink.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
