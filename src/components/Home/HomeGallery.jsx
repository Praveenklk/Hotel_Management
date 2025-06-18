import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const RoomGallery = () => {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);

  const rooms = [
    {
      id: 1,
      title: "Oceanview Deluxe",
      guests: "2 Adults",
      size: "35 m²",
      price: "$299/night",
      image: "https://images.unsplash.com/photo-1566669437685-b9e4c4a37e08",
      description:
        "Wake up to breathtaking ocean views in our spacious deluxe room featuring a king-size bed and private balcony.",
    },
    {
      id: 2,
      title: "Executive Suite",
      guests: "2 Adults",
      size: "45 m²",
      price: "$399/night",
      image: "https://images.unsplash.com/photo-1592229505726-cf1216634f63",
      description:
        "Luxurious suite with separate living area, premium amenities, and stunning city skyline views.",
    },
    {
      id: 3,
      title: "Presidential Villa",
      guests: "4 Adults",
      size: "85 m²",
      price: "$899/night",
      image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b",
      description:
        "Our most exclusive accommodation featuring a private pool, butler service, and panoramic ocean vistas.",
    },
    {
      id: 4,
      title: "Garden Bungalow",
      guests: "2 Adults",
      size: "40 m²",
      price: "$349/night",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
      description:
        "Charming standalone bungalow nestled in our tropical gardens with direct pool access.",
    },
    {
      id: 5,
      title: "Family Loft",
      guests: "4 Adults",
      size: "60 m²",
      price: "$499/night",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      description:
        "Two-level accommodation perfect for families, featuring a kids' play area and kitchenette.",
    },
    {
      id: 6,
      title: "Honeymoon Retreat",
      guests: "2 Adults",
      size: "50 m²",
      price: "$599/night",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
      description:
        "Romantic sanctuary with champagne on arrival, couples' spa treatments, and private beach access.",
    },
  ];

  const handleBookNow = (room) => {
    navigate("/booking", { state: { room } });
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700">
              Our Luxury Accommodations
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our exquisite collection of rooms and suites designed for
            ultimate comfort
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
              onMouseEnter={() => setExpandedCard(room.id)}
              onMouseLeave={() => setExpandedCard(null)}
            >
              <div className="overflow-hidden rounded-3xl shadow-2xl h-full flex flex-col">
                {/* Image with elegant frame */}
                <motion.div
                  className="relative aspect-[4/3] overflow-hidden"
                  animate={{
                    scale: expandedCard === room.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={`${room.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  {/* Quick info badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: expandedCard === room.id ? 1 : 0.8,
                      y: expandedCard === room.id ? 0 : -10,
                    }}
                  >
                    <span className="text-sm font-medium text-gray-800">
                      {room.price}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Content area that expands on hover */}
                <motion.div
                  className="bg-white p-6 flex-1 flex flex-col"
                  animate={{
                    paddingBottom:
                      expandedCard === room.id ? "2.5rem" : "1.5rem",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-2"
                      animate={{
                        color: expandedCard === room.id ? "#D97706" : "#111827",
                      }}
                    >
                      {room.title}
                    </motion.h3>

                    <div className="flex gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        {room.guests}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                        {room.size}
                      </span>
                    </div>

                    <motion.p
                      className="text-gray-600 mb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: expandedCard === room.id ? 1 : 0,
                        height: expandedCard === room.id ? "auto" : 0,
                      }}
                    >
                      {room.description}
                    </motion.p>
                  </div>

                  {/* Book Now button that slides up on hover */}
                  <motion.div
                    className="mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: expandedCard === room.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      onClick={() => handleBookNow(room)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Book Now
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomGallery;
