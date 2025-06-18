import React from 'react';
import { Award, Users, Heart, Globe } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized globally for exceptional hospitality and service excellence"
    },
    {
      icon: Users,
      title: "Expert Staff",
      description: "Highly trained professionals dedicated to creating memorable experiences"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Tailored services to meet every guest's unique preferences and needs"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "International quality standards with local charm and authenticity"
    }
  ];

  const stats = [
    { number: "500+", label: "Luxury Rooms" },
    { number: "50+", label: "Years Experience" },
    { number: "98%", label: "Guest Satisfaction" },
    { number: "24/7", label: "Concierge Service" }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About LuxuryStay
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over five decades, we've been setting the standard for luxury hospitality, 
            creating unforgettable experiences for discerning travelers from around the world.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Luxury Hotel Interior"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.9</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Redefining Luxury Hospitality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At LuxuryStay, we believe that true luxury lies in the perfect blend of 
              exceptional service, elegant accommodations, and attention to detail. 
              Every aspect of your stay is carefully curated to exceed your expectations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our world-class spa and fine dining restaurants to our personalized 
              concierge services, we ensure that every moment of your stay is extraordinary. 
              Our commitment to excellence has earned us numerous international awards and 
              the loyalty of guests who return year after year.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To create extraordinary moments and lasting memories through unparalleled 
            luxury experiences, exceptional service, and genuine hospitality that celebrates 
            the unique story of every guest who walks through our doors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;