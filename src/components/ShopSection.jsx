import React, { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';

const ShopSection = ({ onPageChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const { currentBooking, setCurrentBooking } = useBooking();

  const allRooms = [
    {
      id: 'economy-single',
      name: 'Economy Single Room',
      type: 'single',
      category: 'Economy',
      price: 89,
      originalPrice: 120,
      rating: 4.2,
      reviews: 234,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Comfortable and affordable room perfect for budget travelers',
      features: ['Free WiFi', 'Air Conditioning', 'Private Bathroom'],
      discount: '25% OFF'
    },
    {
      id: 'standard-single',
      name: 'Standard Single Room',
      type: 'single',
      category: 'Standard',
      price: 150,
      rating: 4.4,
      reviews: 456,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Well-appointed single room with modern amenities',
      features: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Room Service']
    },
    {
      id: 'deluxe-single',
      name: 'Deluxe Single Room',
      type: 'single',
      category: 'Deluxe',
      price: 220,
      rating: 4.6,
      reviews: 189,
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Premium single room with city views and luxury amenities',
      features: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'City View', 'Premium Toiletries']
    },
    {
      id: 'standard-double',
      name: 'Standard Double Room',
      type: 'double',
      category: 'Standard',
      price: 280,
      rating: 4.5,
      reviews: 567,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Spacious double room perfect for couples',
      features: ['Free WiFi', 'Air Conditioning', 'King Bed', 'Mini Bar', 'Balcony']
    },
    {
      id: 'family-room',
      name: 'Family Room',
      type: 'family',
      category: 'Family',
      price: 350,
      originalPrice: 420,
      rating: 4.7,
      reviews: 298,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Perfect for families with connecting rooms and kids amenities',
      features: ['Free WiFi', 'Air Conditioning', 'Family Setup', 'Kids Area', 'Mini Fridge'],
      discount: '15% OFF'
    },
    {
      id: 'luxury-family',
      name: 'Luxury Family Suite',
      type: 'family',
      category: 'Luxury',
      price: 480,
      rating: 4.8,
      reviews: 145,
      image: 'https://images.pexels.com/photos/1488327/pexels-photo-1488327.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Luxurious family suite with separate living area',
      features: ['Free WiFi', 'Air Conditioning', 'Living Area', 'Kitchenette', 'Butler Service']
    },
    {
      id: 'desert-villa-basic',
      name: 'Desert Garden Room',
      type: 'desert',
      category: 'Garden',
      price: 320,
      rating: 4.3,
      reviews: 178,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Garden view room with desert landscape aesthetics',
      features: ['Free WiFi', 'Air Conditioning', 'Garden View', 'Desert Decor', 'Patio']
    },
    {
      id: 'desert-villa-premium',
      name: 'Premium Desert Villa',
      type: 'desert',
      category: 'Premium',
      price: 650,
      rating: 4.9,
      reviews: 87,
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Exclusive villa with private pool and desert views',
      features: ['Private Pool', 'Desert Views', 'BBQ Area', 'Private Garden', 'Concierge']
    },
    {
      id: 'multi-room-suite',
      name: 'Multi-Room Suite',
      type: 'multi',
      category: 'Suite',
      price: 550,
      originalPrice: 650,
      rating: 4.6,
      reviews: 123,
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Multiple connected rooms perfect for groups',
      features: ['Multiple Rooms', 'Shared Living Area', 'Full Kitchen', 'Dining Area'],
      discount: '20% OFF'
    },
    {
      id: 'presidential-multi',
      name: 'Presidential Multi-Suite',
      type: 'multi',
      category: 'Presidential',
      price: 1200,
      rating: 5.0,
      reviews: 45,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Ultimate luxury with multiple bedrooms and exclusive services',
      features: ['3 Bedrooms', 'Butler Service', 'Private Elevator', 'Panoramic Views', 'Wine Cellar']
    }
  ];

  const categories = ['all', 'single', 'double', 'family', 'desert', 'multi'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-200', label: '$0 - $200' },
    { value: '200-400', label: '$200 - $400' },
    { value: '400-800', label: '$400 - $800' },
    { value: '800+', label: '$800+' }
  ];

  const filteredRooms = allRooms.filter(room => {
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || room.type === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
      if (max) {
        matchesPrice = room.price >= parseInt(min) && room.price <= parseInt(max);
      } else {
        matchesPrice = room.price >= parseInt(min);
      }
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleBookRoom = (room) => {
    if (!currentBooking?.checkIn || !currentBooking?.checkOut) {
      alert('Please select check-in and check-out dates first from the home page');
      onPageChange('home');
      return;
    }

    const nights = Math.ceil((new Date(currentBooking.checkOut) - new Date(currentBooking.checkIn)) / (1000 * 60 * 60 * 24));
    const totalPrice = room.price * nights;

    setCurrentBooking({
      ...currentBooking,
      roomId: room.id,
      roomName: room.name,
      roomType: room.type,
      price: room.price,
      totalPrice,
      nights
    });

    onPageChange('book');
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Room Shop
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our complete collection of rooms and suites. Find the perfect accommodation 
            for your stay with our advanced filtering options.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search rooms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Room Types</option>
                <option value="single">Single Rooms</option>
                <option value="double">Double Rooms</option>
                <option value="family">Family Rooms</option>
                <option value="desert">Desert Rooms</option>
                <option value="multi">Multi-Room Suites</option>
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            Showing {filteredRooms.length} of {allRooms.length} rooms
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
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
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
                {room.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {room.discount}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-800">
                    ${room.price}/night
                  </span>
                  {room.originalPrice && (
                    <span className="text-xs text-gray-500 line-through ml-2">
                      ${room.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-3">{room.description}</p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(room.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{room.rating}</span>
                  <span className="text-sm text-gray-500">({room.reviews} reviews)</span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {room.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {room.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{room.features.length - 3} more
                      </span>
                    )}
                  </div>
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

        {/* No Results */}
        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No rooms found</h3>
            <p className="text-gray-500">Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopSection;