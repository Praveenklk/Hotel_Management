import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../../index.css'

const HomeSection = () => {
  const [bookings, setBookings] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Animated counter
  useEffect(() => {
    if (inView) {
      const target = 12457;
      const duration = 3000;
      const steps = 50;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        setBookings(Math.min(Math.floor(current), target));
        if (current >= target) clearInterval(timer);
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView]);

  // Text animation controls
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <section
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Luxury Hotel Resort"
              className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            {/* Animated Booking Counter */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <svg
                    className="absolute h-full w-full text-yellow-500 animate-pulse"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Happy Customers</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {bookings.toLocaleString()}+
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={variants}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="relative inline-block">
                  <span className="relative z-10">Relax in Our</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-200/70 z-0 -rotate-1"></span>
                </span>{" "}
                <br />
                <span className="text-yellow-600">Luxury Hotel Resort</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Experience unparalleled comfort in our exquisite resort nestled
                between pristine beaches and lush tropical gardens. Our
                award-winning spa, gourmet restaurants, and private beach access
                will make your stay unforgettable.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Each of our suites is designed with your comfort in mind,
                featuring private balconies, ocean views, and bespoke amenities.
                Whether you're here for romance, relaxation, or adventure, we
                have the perfect experience waiting for you.
              </p>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-lg shadow-lg overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Hurry Up! Best Price Guaranteed</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 animate-bounce-horizontal"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>

                {/* Trust badges */}
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      Verified Luxury Resort
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      Best Price Guarantee
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
