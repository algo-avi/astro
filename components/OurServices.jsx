import React from "react";
import { motion } from "framer-motion";

const OurServices = () => {
  const services = [
    {
      title: "Web Design",
      description: "Crafting stunning, responsive designs for your needs.",
      image: "AQUARI-1.webp",
    },
    {
      title: "Development",
      description: "Building scalable, high-performance web solutions.",
      image: "ARIES.webp",
    },
    {
      title: "Animation",
      description: "Adding life to your projects with dynamic animations.",
      image: "CANCER-1.webp",
    },
    {
      title: "SEO Optimization",
      description: "Boosting visibility and performance with expert SEO.",
      image: "GEMINI.webp",
    },
    {
      title: "Content Creation",
      description: "Delivering engaging and impactful digital content.",
      image: "PISCES-1.webp",
    },
    {
      title: "E-Commerce Solutions",
      description: "Designing tailored platforms for your online business.",
      image: "TAURUS-1.webp",
    },
  ];

  return (
    <div className="w-full mx-auto py-10 px-5 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-2xl shadow-2xl">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-saffron-600">Our Services</h1>
        <p className="text-lg text-gray-600">Empowering Your Digital Experience</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-6 bg-white rounded-2xl border border-gray-200 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mt-4">{service.title}</h2>
            <p className="mt-2 text-gray-600 text-center">{service.description}</p>
            <button className="mt-4 w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-400 transition-all duration-300">
              Book Now
            </button>

            {/* 3D Overlay effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
