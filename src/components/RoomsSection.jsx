import React from "react";
import { Wifi, Car, Coffee, Utensils, Tv, Wind } from "lucide-react";
import { useBooking } from "../contexts/BookingContext";

const RoomsSection = ({ onPageChange }) => {
  const { currentBooking, setCurrentBooking } = useBooking();

  const rooms = [
    {
      id: "deluxe-single",
      name: "Deluxe Single Room",
      type: "single",
      price: 150,
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Perfect for solo travelers seeking comfort and style",
      size: "25 sqm",
      bed: "1 Queen Bed",
      capacity: 1,
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Mini Bar",
        "Room Service",
        "Smart TV",
      ],
    },
    {
      id: "superior-double",
      name: "Superior Double Room",
      type: "double",
      price: 220,
      image:
        "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Spacious room ideal for couples with modern amenities",
      size: "35 sqm",
      bed: "1 King Bed",
      capacity: 2,
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Mini Bar",
        "Room Service",
        "Smart TV",
        "Balcony",
      ],
    },
    {
      id: "family-suite",
      name: "Family Suite",
      type: "family",
      price: 350,
      image:
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Luxurious suite perfect for families with separate living area",
      size: "60 sqm",
      bed: "1 King + 2 Twin Beds",
      capacity: 4,
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Mini Bar",
        "Room Service",
        "Smart TV",
        "Living Area",
        "Kitchenette",
      ],
    },
    {
      id: "presidential-suite",
      name: "Presidential Suite",
      type: "presidential",
      price: 800,
      image:
        "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Ultimate luxury with panoramic city views and premium amenities",
      size: "120 sqm",
      bed: "1 King Bed + Sofa Bed",
      capacity: 4,
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Mini Bar",
        "Room Service",
        "Smart TV",
        "Living Area",
        "Kitchenette",
        "Butler Service",
        "Jacuzzi",
      ],
    },
    {
      id: "desert-villa",
      name: "Desert Villa",
      type: "villa",
      price: 600,
      image:
        "https://images.pexels.com/photos/1488327/pexels-photo-1488327.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Private villa with desert views and exclusive amenities",
      size: "80 sqm",
      bed: "2 King Beds",
      capacity: 6,
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Private Pool",
        "Room Service",
        "Smart TV",
        "Private Garden",
        "BBQ Area",
      ],
    },
    {
      id: "penthouse",
      name: "Penthouse Suite",
      type: "penthouse",
      price: 1200,
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Exclusive penthouse with private terrace and city skyline views",
      size: "150 sqm",
      bed: "2 King Beds + Living Area",
      capacity: 6,
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Private Terrace",
        "Room Service",
        "Smart TV",
        "Full Kitchen",
        "Wine Cellar",
        "Butler Service",
      ],
    },
  ];

  const amenityIcons = {
    "Free WiFi": Wifi,
    "Air Conditioning": Wind,
    "Mini Bar": Coffee,
    "Room Service": Utensils,
    "Smart TV": Tv,
    "Private Pool": Car,
  };

  const handleBookRoom = (room) => {
    if (!currentBooking?.checkIn || !currentBooking?.checkOut) {
      alert(
        "Please select check-in and check-out dates first from the home page"
      );
      onPageChange("home");
      return;
    }

    const nights = Math.ceil(
      (new Date(currentBooking.checkOut) - new Date(currentBooking.checkIn)) /
        (1000 * 60 * 60 * 24)
    );
    const totalPrice = room.price * nights;

    setCurrentBooking({
      ...currentBooking,
      roomId: room.id,
      roomName: room.name,
      roomType: room.type,
      price: room.price,
      totalPrice,
      nights,
    });

    onPageChange("book");
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Luxury Rooms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated selection of rooms and suites,
            each designed to provide the ultimate in comfort and luxury.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Room Image */}
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-800">
                    ${room.price}/night
                  </span>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-4">{room.description}</p>

                {/* Room Info */}
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span>{room.size}</span>
                  <span>{room.bed}</span>
                  <span>Up to {room.capacity} guests</span>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Amenities
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.slice(0, 6).map((amenity, idx) => {
                      const IconComponent = amenityIcons[amenity] || Coffee;
                      return (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <IconComponent className="h-4 w-4 text-blue-600" />
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                  {room.amenities.length > 6 && (
                    <span className="text-sm text-blue-600 mt-2 inline-block">
                      +{room.amenities.length - 6} more amenities
                    </span>
                  )}
                </div>

                {/* Book Button */}
                <button
                  onClick={() => handleBookRoom(room)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                >
                  Book Now - ${room.price}/night
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Special Offers</h3>
          <p className="text-blue-100 text-lg mb-6">
            Book 3 nights or more and get 15% off your stay. Book 7 nights and
            get 25% off!
          </p>
          <button
            onClick={() => onPageChange("contact")}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us for Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomsSection;
