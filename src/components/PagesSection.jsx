import React, { useState } from 'react';
import { 
  FileText, 
  Shield, 
  CreditCard, 
  Users, 
  Award, 
  Briefcase,
  Calendar,
  MapPin,
  Star
} from 'lucide-react';

const PagesSection = () => {
  const [selectedPage, setSelectedPage] = useState('about');

  const pages = [
    { id: 'about', label: 'About Us', icon: FileText },
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'terms', label: 'Terms of Service', icon: CreditCard },
    { id: 'careers', label: 'Careers', icon: Briefcase },
    { id: 'awards', label: 'Awards & Recognition', icon: Award },
    { id: 'events', label: 'Events & Meetings', icon: Calendar },
    { id: 'location', label: 'Location & Directions', icon: MapPin },
    { id: 'testimonials', label: 'Guest Testimonials', icon: Star }
  ];

  const pageContent = {
    about: {
      title: 'About LuxuryStay',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            LuxuryStay has been a beacon of excellence in the hospitality industry for over five decades. 
            Founded in 1970 with a vision to redefine luxury accommodation, we have consistently set new 
            standards for service, comfort, and elegance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">
                What began as a small boutique hotel has grown into a prestigious luxury destination, 
                welcoming distinguished guests from around the world. Our commitment to exceptional 
                service and attention to detail has earned us numerous accolades and the loyalty of 
                our valued guests.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create extraordinary experiences that exceed expectations, foster meaningful connections, 
                and leave lasting memories. We strive to be more than just a place to stay – we aim to be 
                a destination that enriches lives through unparalleled luxury and genuine hospitality.
              </p>
            </div>
          </div>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            At LuxuryStay, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Information We Collect</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Personal identification information (name, email, phone number)</li>
              <li>Reservation and booking details</li>
              <li>Payment information (processed securely through encrypted channels)</li>
              <li>Preference and stay history for personalized service</li>
            </ul>
            <h3 className="text-xl font-bold text-gray-800">How We Use Your Information</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>To process reservations and provide requested services</li>
              <li>To personalize your experience and improve our services</li>
              <li>To communicate important updates about your stay</li>
              <li>To send promotional offers (with your consent)</li>
            </ul>
          </div>
        </div>
      )
    },
    terms: {
      title: 'Terms of Service',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            By booking a stay with LuxuryStay, you agree to the following terms and conditions:
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Booking and Reservations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>All reservations are subject to availability</li>
              <li>A valid credit card is required to secure your booking</li>
              <li>Check-in time is 3:00 PM, check-out time is 11:00 AM</li>
              <li>Early check-in and late check-out may be available upon request</li>
            </ul>
            <h3 className="text-xl font-bold text-gray-800">Cancellation Policy</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Free cancellation up to 48 hours before arrival</li>
              <li>Cancellations within 48 hours will incur a one-night charge</li>
              <li>No-shows will be charged the full reservation amount</li>
            </ul>
          </div>
        </div>
      )
    },
    careers: {
      title: 'Join Our Team',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Build your career with LuxuryStay and be part of a team that delivers exceptional hospitality experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Current Openings</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Guest Relations Manager</span>
                  <span className="text-sm text-blue-600">Full-time</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Executive Chef</span>
                  <span className="text-sm text-blue-600">Full-time</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Spa Therapist</span>
                  <span className="text-sm text-blue-600">Part-time</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Front Desk Associate</span>
                  <span className="text-sm text-blue-600">Full-time</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Work With Us?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Competitive salary and benefits package</li>
                <li>• Professional development opportunities</li>
                <li>• Employee discounts on stays and dining</li>
                <li>• Comprehensive health and wellness programs</li>
                <li>• Recognition and advancement opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    awards: {
      title: 'Awards & Recognition',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Our commitment to excellence has been recognized by prestigious organizations worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <Award className="h-8 w-8 text-yellow-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Best Luxury Hotel 2024</h3>
              <p className="text-gray-600">International Hospitality Awards</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Star className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">5-Star Rating</h3>
              <p className="text-gray-600">Forbes Travel Guide</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <Award className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Excellence in Service</h3>
              <p className="text-gray-600">TripAdvisor Travelers' Choice</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <Star className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Sustainable Tourism Award</h3>
              <p className="text-gray-600">Global Sustainable Tourism Council</p>
            </div>
          </div>
        </div>
      )
    },
    events: {
      title: 'Events & Meetings',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Host your next event in our elegant venues, from intimate gatherings to grand celebrations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Corporate Events</h3>
              <p className="text-gray-600">Professional meeting spaces with state-of-the-art technology</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Star className="h-8 w-8 text-pink-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Weddings</h3>
              <p className="text-gray-600">Create magical moments in our stunning ballrooms and gardens</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Social Events</h3>
              <p className="text-gray-600">Celebrate life's special moments in elegant surroundings</p>
            </div>
          </div>
        </div>
      )
    },
    location: {
      title: 'Location & Directions',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Conveniently located in the heart of the city, LuxuryStay offers easy access to major attractions, 
            business districts, and transportation hubs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Address</h3>
              <p className="text-gray-600 mb-4">
                123 Luxury Avenue<br />
                Downtown District<br />
                New York, NY 10001
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Transportation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 10 minutes from Central Airport</li>
                <li>• 2 blocks from Metro Station</li>
                <li>• Complimentary shuttle service available</li>
                <li>• Valet parking on-site</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Nearby Attractions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Central Park - 5 minutes walk</li>
                <li>• Museum District - 10 minutes walk</li>
                <li>• Shopping Center - 3 minutes walk</li>
                <li>• Financial District - 15 minutes by car</li>
                <li>• Theater District - 12 minutes by car</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    testimonials: {
      title: 'Guest Testimonials',
      content: (
        <div className="space-y-8">
          <p className="text-lg text-gray-700">
            Hear from our valued guests about their exceptional experiences at LuxuryStay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Absolutely incredible experience! The service was impeccable, the room was stunning, 
                and every detail was perfect. We'll definitely be returning."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">John Davis</p>
                  <p className="text-sm text-gray-500">Business Executive</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Our wedding at LuxuryStay was like a fairy tale. The staff went above and beyond 
                to make our special day perfect. Highly recommended!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah Miller</p>
                  <p className="text-sm text-gray-500">Newlywed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Information Pages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find all the information you need about LuxuryStay, our policies, and services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Pages</h3>
              <nav className="space-y-2">
                {pages.map((page) => {
                  const IconComponent = page.icon;
                  return (
                    <button
                      key={page.id}
                      onClick={() => setSelectedPage(page.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        selectedPage === page.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium">{page.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {pageContent[selectedPage].title}
              </h2>
              {pageContent[selectedPage].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesSection;