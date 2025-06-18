import React, { useState } from "react";
import { BookingProvider } from "./contexts/BookingContext";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import RoomsSection from "./components/RoomsSection";
import ShopSection from "./components/ShopSection";
import BookNowSection from "./components/BookNowSection";
import ContactSection from "./components/ContactSection";
import NewsSection from "./components/NewsSection";
import PagesSection from "./components/PagesSection";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HeroSection onPageChange={setCurrentPage} />;
      case "rooms":
        return <RoomsSection onPageChange={setCurrentPage} />;
      case "about":
        return <AboutSection />;
      case "shop":
        return <ShopSection onPageChange={setCurrentPage} />;
      case "pages":
        return <PagesSection />;
      case "news":
        return <NewsSection />;
      case "contact":
        return <ContactSection />;
      case "book":
        return <BookNowSection onPageChange={setCurrentPage} />;
      default:
        return <HeroSection onPageChange={setCurrentPage} />;
    }
  };

  return (
    <BookingProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="relative">{renderCurrentPage()}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">LuxuryStay</h3>
                <p className="text-gray-400">
                  Experience luxury and comfort like never before. Your perfect
                  stay awaits.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <button
                      onClick={() => setCurrentPage("home")}
                      className="hover:text-white"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCurrentPage("rooms")}
                      className="hover:text-white"
                    >
                      Rooms
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCurrentPage("about")}
                      className="hover:text-white"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCurrentPage("contact")}
                      className="hover:text-white"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Room Service</li>
                  <li>Spa & Wellness</li>
                  <li>Fine Dining</li>
                  <li>Event Hosting</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>123 Luxury Avenue</li>
                  <li>New York, NY 10001</li>
                  <li>+1 (555) 123-4567</li>
                  <li>info@luxurystay.com</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 LuxuryStay. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </BookingProvider>
  );
}

export default App;
