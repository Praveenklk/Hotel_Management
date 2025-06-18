import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'LuxuryStay Wins "Best Luxury Hotel 2024" Award',
      excerpt: 'We are thrilled to announce that LuxuryStay has been recognized as the Best Luxury Hotel of 2024 by the International Hospitality Awards.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      author: 'Sarah Johnson',
      category: 'Awards',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'New Rooftop Infinity Pool Now Open',
      excerpt: 'Experience breathtaking city views from our brand new rooftop infinity pool, featuring a sky bar and premium cabana service.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-10',
      author: 'Michael Chen',
      category: 'Facilities',
      readTime: '2 min read'
    },
    {
      id: 3,
      title: 'Exclusive Winter Package: 30% Off Extended Stays',
      excerpt: 'Book your winter getaway with our exclusive package offering 30% off stays of 5 nights or more, including complimentary spa treatments.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-08',
      author: 'Emma Williams',
      category: 'Promotions',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Michelin-Star Chef Joins Our Culinary Team',
      excerpt: 'We welcome Chef Antoine Dubois, a Michelin-starred chef, who brings his innovative culinary vision to our fine dining restaurant.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-05',
      author: 'David Rodriguez',
      category: 'Dining',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'Sustainable Luxury: Our Green Initiatives',
      excerpt: 'Discover how LuxuryStay is leading the way in sustainable hospitality with our comprehensive environmental programs and eco-friendly practices.',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-02',
      author: 'Lisa Anderson',
      category: 'Sustainability',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Wellness Retreat Programs Launch This Spring',
      excerpt: 'Join our transformative wellness retreats featuring yoga, meditation, spa treatments, and nutritional guidance from expert practitioners.',
      image: 'https://images.pexels.com/photos/1488327/pexels-photo-1488327.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-28',
      author: 'Jennifer Taylor',
      category: 'Wellness',
      readTime: '4 min read'
    }
  ];

  const categories = ['All', 'Awards', 'Facilities', 'Promotions', 'Dining', 'Sustainability', 'Wellness'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Awards': 'bg-yellow-100 text-yellow-800',
      'Facilities': 'bg-blue-100 text-blue-800',
      'Promotions': 'bg-green-100 text-green-800',
      'Dining': 'bg-red-100 text-red-800',
      'Sustainability': 'bg-purple-100 text-purple-800',
      'Wellness': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and exciting developments at LuxuryStay
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(filteredArticles[0].category)}`}>
                      {filteredArticles[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(filteredArticles[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{filteredArticles[0].author}</span>
                    </div>
                    <span>{filteredArticles[0].readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {filteredArticles[0].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {filteredArticles[0].excerpt}
                  </p>
                  <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200">
                    <span>Read Full Story</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map((article, index) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <button className="flex items-center space-x-1 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200">
                    <span>Read More</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h3>
          <p className="text-blue-100 text-lg mb-8">
            Subscribe to our newsletter and be the first to know about new updates, exclusive offers, and special events.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;