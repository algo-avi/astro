import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slider = () => {
  const images = [
    "1.jpg", // Replace with your image URLs
    "2.jpg",
    "3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[1040px] h-[480px] mt-45 flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-solid border-white/30 backdrop-blur-lg">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className="absolute w-[1040px] h-[480px] rounded-lg object-cover"
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 0.95,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}

      {/* Overlay for 3D Glass Effect */}
      <div
        className="absolute inset-0 bg-white/10 rounded-lg border border-solid border-white/20 pointer-events-none"
        style={{
          boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
        }}
      ></div>
    </div>
  );
};

export default Slider;
