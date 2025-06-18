import React, { useState } from "react";
import { Menu, X, Hotel } from "lucide-react";
import logo from "../Assets/logo.png";

const Navigation = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "rooms", label: "Rooms" },
    { id: "about", label: "About" },
    { id: "shop", label: "Shop" },
    { id: "pages", label: "Pages" },
    { id: "news", label: "News" },
    { id: "contact", label: "Contact" },
    { id: "book", label: "Book Now", isButton: true },
  ];

  const handleNavClick = (pageId) => {
    onPageChange(pageId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer transform hover:scale-105 transition-transform duration-200"
            onClick={() => handleNavClick("home")}
          >
            {/* <Hotel className="h-8 w-8 text-blue-600" /> */}
            <span className="text-2xl h-45 text-center w-12 font-bold text-gray-800">
              <img src={logo} alt="" />
            </span>
            <p className="bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent  text-2xl">Beauroi</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                  item.isButton
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                    : currentPage === item.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  item.isButton
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : currentPage === item.id
                    ? "text-blue-600 bg-blue-100"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
