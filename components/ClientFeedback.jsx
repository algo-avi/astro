import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ClientFeedbackWithImage = () => {
  const feedbacks = [
    {
      stars: 5,
      comment: "This service is absolutely amazing! It exceeded all my expectations.",
      name: "John Doe",
      photo: "1.jpg",
    },
    {
      stars: 4,
      comment: "Great experience overall. Just a little room for improvement!",
      name: "Jane Smith",
      photo: "2.jpg",
    },
    {
      stars: 5,
      comment: "Highly professional and fantastic results. I am super happy!",
      name: "Sam Wilson",
      photo: "3.jpg",
    },
  ];

  const [currentFeedback, setCurrentFeedback] = useState(0);

  const handleNextFeedback = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePreviousFeedback = () => {
    setCurrentFeedback((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/30 overflow-hidden">
      {/* Feedback Card Section */}
      <div className="w-full lg:w-1/2 p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFeedback}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full"
          >
            {/* User Image */}
            <img
              src={feedbacks[currentFeedback].photo}
              alt={feedbacks[currentFeedback].name}
              className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-saffron-600"
            />

            {/* User Name */}
            <h3 className="text-2xl font-bold text-saffron-600 mb-3">
              {feedbacks[currentFeedback].name}
            </h3>

            {/* Stars */}
            <div className="flex mb-4">
              {Array.from({ length: feedbacks[currentFeedback].stars }).map((_, index) => (
                <span key={index} className="text-yellow-400 text-xl">★</span>
              ))}
              {Array.from({ length: 5 - feedbacks[currentFeedback].stars }).map((_, index) => (
                <span key={index} className="text-gray-300 text-xl">★</span>
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-600 text-sm leading-relaxed">
              "{feedbacks[currentFeedback].comment}"
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Slider Arrows */}
        <div className="flex justify-between w-full mt-8 px-10">
          {/* Left Arrow */}
          <button
            onClick={handlePreviousFeedback}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-3 rounded-full shadow-md transition-transform hover:scale-110"
          >
            {/* Left Arrow SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNextFeedback}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-3 rounded-full shadow-md transition-transform hover:scale-110"
          >
            {/* Right Arrow SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Fixed Background Image */}
      <div
        className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center rounded-r-2xl pointer-events-none"
        style={{
          backgroundImage: "url('AQUARI-1.webp')",
          userSelect: "none",
        }}
        onContextMenu={(e) => e.preventDefault()}
      ></div>
    </div>
  );
};

export default ClientFeedbackWithImage;
