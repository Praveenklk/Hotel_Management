import React, { useState } from "react";
import { Calendar, Users, Search, MapPin, Star } from "lucide-react";
import { useBooking } from "../contexts/BookingContext";
import RoomGallery from "./Home/HomeGallery";
import HomeSection from "./Home/HomeAnimated";

const HeroSection = ({ onPageChange }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const { setCurrentBooking } = useBooking();

  const handleAvailabilityCheck = () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }

    setCurrentBooking({
      checkIn,
      checkOut,
      guests,
    });

    onPageChange("rooms");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Experience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 ">
                Luxury
              </span>
              Like Never Before
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Discover world-class accommodations with exceptional service and
              breathtaking views
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-gray-300">• 2,847 reviews</span>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Check Availability
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {/* Check-in Date */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <Calendar className="inline h-4 w-4 mr-2" />
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={today}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Check-out Date */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <Calendar className="inline h-4 w-4 mr-2" />
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || today}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <Users className="inline h-4 w-4 mr-2" />
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-transparent">
                  Search
                </label>
                <button
                  onClick={handleAvailabilityCheck}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Search className="h-5 w-5" />
                  <span>Search Rooms</span>
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Prime Location
              </h3>
              <p className="text-gray-200">
                Located in the heart of the city with easy access to attractions
              </p>
            </div>

            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Star className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                5-Star Service
              </h3>
              <p className="text-gray-200">
                Award-winning hospitality with personalized attention
              </p>
            </div>

            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Luxury Amenities
              </h3>
              <p className="text-gray-200">
                Spa, fitness center, rooftop pool, and fine dining
              </p>
            </div>
          </div>
        </div>
      </div>
      <HomeSection />
      <RoomGallery />
      
    </>
  );
};

export default HeroSection;
