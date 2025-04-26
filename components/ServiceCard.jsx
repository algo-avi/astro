import React from "react";

const ServiceCards = () => {
  const services = [
    {
      title: "काल सर्प दोष निवारण",
      description: "Creating stunning designs for your online presence.",
      image: "team_member_1.png", // Replace with your image URL
    },
    {
      title: "मंगल दोष",
      description: "Building robust and scalable web solutions.",
      image: "team_member_2.png", // Replace with your image URL
    },
    {
      title: "लक्ष्मी पूजा",
      description: "Bringing creativity to life with animations.",
      image: "team_member_3.png", // Replace with your image URL
    },
    {
      title: "महामृत्युंजय जप अनुष्ठान",
      description: "Boosting visibility and performance with SEO expertise.",
      image: "team_member_4.png", // Replace with your image URL
    },
    {
      title: "वित्त समस्या",
      description: "Delivering impactful and engaging digital content.",
      image: "team_member_5.png", // Replace with your image URL
    },
    {
      title: "स्वास्थ्य समस्या",
      description: "Designing tailored platforms for your business needs.",
      image: "team_member_9.png", // Replace with your image URL
    },
    {
      title: "नौकरी में परेशानी",
      description: "Building seamless mobile app experiences.",
      image: "team_member_10.png", // Replace with your image URL
    },
    {
      title: "रुद्राभिषेक",
      description: "Crafting user-focused interfaces and experiences.",
      image: "team_member_11.png", // Replace with your image URL
    },
  ];

  return (
    <div className="w-full mx-auto py-10 px-5 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/30 backdrop-blur-lg">
      <h1 className="text-center text-4xl font-bold text-saffron-600 mb-8">
        Our Stylish Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden bg-white/10 shadow-[0px_4px_20px_rgba(255,255,255,0.3)] hover:shadow-lg transition-transform hover:scale-105 group"
          >
            {/* Hover Effect (Background Only) */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Rounded Image */}
            <div className="flex justify-center items-center mt-4 relative z-10">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-full w-24 h-24 object-cover border-2 border-saffron-600"
              />
            </div>

            {/* Title & Description */}
            <div className="p-4 text-center relative z-10">
              <h2 className="text-xl font-bold text-saffron-600">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
