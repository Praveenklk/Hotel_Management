import React, { useState, useEffect } from 'react';
import { Calendar, Users, CreditCard, CheckCircle, Trash2, Edit } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';

const BookNowSection = ({ onPageChange }) => {
  const { bookings, addBooking, removeBooking, currentBooking, setCurrentBooking } = useBooking();
  const [guestDetails, setGuestDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const [isBookingComplete, setIsBookingComplete] = useState(false);

  useEffect(() => {
    if (currentBooking?.guestDetails) {
      setGuestDetails(currentBooking.guestDetails);
    }
  }, [currentBooking]);

  const handleGuestDetailsChange = (field, value) => {
    const updatedDetails = { ...guestDetails, [field]: value };
    setGuestDetails(updatedDetails);
    
    if (currentBooking) {
      setCurrentBooking({
        ...currentBooking,
        guestDetails: updatedDetails
      });
    }
  };

  const handlePaymentDetailsChange = (field, value) => {
    setPaymentDetails(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!currentBooking?.roomId) {
      alert('Please select a room first');
      return false;
    }

    if (!guestDetails.firstName || !guestDetails.lastName || !guestDetails.email || !guestDetails.phone) {
      alert('Please fill in all guest details');
      return false;
    }

    if (!paymentDetails.cardNumber || !paymentDetails.expiryDate || !paymentDetails.cvv || !paymentDetails.cardholderName) {
      alert('Please fill in all payment details');
      return false;
    }

    return true;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const newBooking = {
      id: Date.now().toString(),
      ...currentBooking,
      guestDetails,
      bookingDate: new Date().toISOString(),
      status: 'confirmed'
    };

    addBooking(newBooking);
    setIsBookingComplete(true);
    
    // Reset form
    setTimeout(() => {
      setCurrentBooking(null);
      setGuestDetails({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequests: ''
      });
      setPaymentDetails({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: ''
      });
      setIsBookingComplete(false);
    }, 3000);
  };

  const handleEditBooking = (booking) => {
    setCurrentBooking(booking);
    setGuestDetails(booking.guestDetails || {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: ''
    });
  };

  if (isBookingComplete) {
    return (
      <div className="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for choosing LuxuryStay. Your reservation has been confirmed.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Booking Details</h3>
              <p className="text-gray-600">
                Confirmation will be sent to {guestDetails.email}
              </p>
            </div>
            <button
              onClick={() => onPageChange('home')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Complete Your Booking
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Review your selection and provide your details to confirm your reservation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            {currentBooking?.roomId ? (
              <form onSubmit={handleBookingSubmit} className="space-y-8">
                {/* Guest Details */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Guest Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={guestDetails.firstName}
                        onChange={(e) => handleGuestDetailsChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={guestDetails.lastName}
                        onChange={(e) => handleGuestDetailsChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={guestDetails.email}
                        onChange={(e) => handleGuestDetailsChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={guestDetails.phone}
                        onChange={(e) => handleGuestDetailsChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requests
                      </label>
                      <textarea
                        rows={3}
                        value={guestDetails.specialRequests}
                        onChange={(e) => handleGuestDetailsChange('specialRequests', e.target.value)}
                        placeholder="Any special requests or requirements..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={paymentDetails.cardholderName}
                        onChange={(e) => handlePaymentDetailsChange('cardholderName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="1234 5678 9012 3456"
                        value={paymentDetails.cardNumber}
                        onChange={(e) => handlePaymentDetailsChange('cardNumber', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        value={paymentDetails.expiryDate}
                        onChange={(e) => handlePaymentDetailsChange('expiryDate', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        value={paymentDetails.cvv}
                        onChange={(e) => handlePaymentDetailsChange('cvv', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                >
                  Confirm Booking
                </button>
              </form>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No Room Selected</h3>
                <p className="text-gray-600 mb-6">
                  Please select a room from our rooms or shop section to continue with booking.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => onPageChange('rooms')}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    Browse Rooms
                  </button>
                  <button
                    onClick={() => onPageChange('shop')}
                    className="w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
                  >
                    Visit Shop
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Booking Summary & Existing Bookings */}
          <div className="space-y-8">
            {/* Current Booking Summary */}
            {currentBooking?.roomId && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Room:</span>
                    <span className="font-semibold">{currentBooking.roomName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-in:</span>
                    <span className="font-semibold">{currentBooking.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-out:</span>
                    <span className="font-semibold">{currentBooking.checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guests:</span>
                    <span className="font-semibold">{currentBooking.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nights:</span>
                    <span className="font-semibold">{currentBooking.nights}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price per night:</span>
                      <span className="font-semibold">${currentBooking.price}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-blue-600">
                      <span>Total:</span>
                      <span>${currentBooking.totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Existing Bookings */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Your Bookings ({bookings.length})
              </h3>
              {bookings.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No bookings yet</p>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-800">{booking.roomName}</h4>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditBooking(booking)}
                            className="text-blue-600 hover:text-blue-800 p-1"
                            title="Edit booking"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => removeBooking(booking.id)}
                            className="text-red-600 hover:text-red-800 p-1"
                            title="Cancel booking"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{booking.checkIn} to {booking.checkOut}</p>
                        <p>{booking.guests} guests • {booking.nights} nights</p>
                        <p className="font-semibold text-blue-600">Total: ${booking.totalPrice}</p>
                        {booking.guestDetails && (
                          <p className="text-xs">Guest: {booking.guestDetails.firstName} {booking.guestDetails.lastName}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowSection;