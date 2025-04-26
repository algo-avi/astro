import React from "react";
import { motion } from "framer-motion";

const OurServices = () => {
  const services = [
    {
      title: "Web Design",
      description: "Crafting stunning, responsive designs for your needs.",
      image: "AQUARI-1.webp", // Replace with your image URL
    },
    {
      title: "Development",
      description: "Building scalable, high-performance web solutions.",
      image: "ARIES.webp", // Replace with your image URL
    },
    {
      title: "Animation",
      description: "Adding life to your projects with dynamic animations.",
      image: "CANCER-1.webp", // Replace with your image URL
    },
    {
      title: "SEO Optimization",
      description: "Boosting visibility and performance with expert SEO.",
      image: "GEMINI.webp", // Replace with your image URL
    },
    {
      title: "Content Creation",
      description: "Delivering engaging and impactful digital content.",
      image: "PISCES-1.webp", // Replace with your image URL
    },
    {
      title: "E-Commerce Solutions",
      description: "Designing tailored platforms for your online business.",
      image: "TAURUS-1.webp", // Replace with your image URL
    },
  ];

  return (
    <div className="w-full mx-auto py-10 px-5 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/30 backdrop-blur-lg">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold text-saffron-600">Our Services</h1>
        <p className="text-lg text-gray-600">Empowering Your Digital Experience</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/10 rounded-xl border border-solid border-white/20 shadow-[0px_4px_20px_rgba(255,255,255,0.3)] backdrop-blur-lg hover:scale-105 transition-transform relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-saffron-600 text-center">{service.title}</h2>
            <p className="mt-2 text-gray-600 text-center">{service.description}</p>
            <button className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gradient-to-l transition-transform">
              Book Now
            </button>
            {/* Overlay for additional 3D effect */}
            <div
              className="absolute inset-0 bg-white/10 rounded-lg border border-white/30 pointer-events-none"
              style={{
                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
              }}
            ></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
