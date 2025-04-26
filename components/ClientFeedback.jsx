import React, { useState } from "react";

const ClientFeedbackWithImage = () => {
  const feedbacks = [
    {
      stars: 5,
      comment: "This service is absolutely amazing! It exceeded all my expectations.",
      name: "John Doe",
      photo: "1.jpg", // Replace with your client's image URL
    },
    {
      stars: 4,
      comment: "Great experience overall. Just a little room for improvement!",
      name: "Jane Smith",
      photo: "2.jpg", // Replace with your client's image URL
    },
    {
      stars: 5,
      comment: "Highly professional and fantastic results. I am super happy!",
      name: "Sam Wilson",
      photo: "3.jpg", // Replace with your client's image URL
    },
  ];

  const [currentFeedback, setCurrentFeedback] = useState(0);

  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/30 backdrop-blur-lg">
      {/* Feedback Section (Left) */}
      <div className="w-full lg:w-1/2 p-6">
        {/* Feedback Stars */}
        <div className="flex justify-center mb-4">
          {Array.from({ length: feedbacks[currentFeedback].stars }).map((_, index) => (
            <span key={index} className="text-yellow-500 text-xl">★</span>
          ))}
          {Array.from({ length: 5 - feedbacks[currentFeedback].stars }).map((_, index) => (
            <span key={index} className="text-gray-300 text-xl">★</span>
          ))}
        </div>

        {/* Feedback Comment */}
        <p className="text-center text-gray-600 text-lg leading-relaxed mb-6">
          "{feedbacks[currentFeedback].comment}"
        </p>

        {/* User Photo and Name */}
        <div className="flex flex-col items-center">
          <img
            src={feedbacks[currentFeedback].photo}
            alt={feedbacks[currentFeedback].name}
            className="rounded-full w-24 h-24 object-cover mb-4 border-2 border-saffron-600"
          />
          <h3 className="text-xl font-bold text-saffron-600">{feedbacks[currentFeedback].name}</h3>
        </div>

        {/* Dot Buttons for Feedback Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {feedbacks.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFeedback(index)}
              className={`w-4 h-4 rounded-full ${
                currentFeedback === index
                  ? "bg-saffron-600"
                  : "bg-gray-300 hover:bg-saffron-400 transition-colors"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Fixed Image Section (Right) */}
      <div
        className="w-full lg:w-1/2 h-[500px] bg-cover bg-center rounded-r-2xl pointer-events-none"
        style={{
          backgroundImage: "url('AQUARI-1.webp')", // Replace with your fixed image URL
          userSelect: "none", // Prevent text selection (for image download prevention)
        }}
        onContextMenu={(e) => e.preventDefault()} // Disables right-click on the image
      ></div>
    </div>
  );
};

export default ClientFeedbackWithImage;
