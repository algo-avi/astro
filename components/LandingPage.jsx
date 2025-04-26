import React, { useEffect, useState } from "react";
import {motion}  from "framer-motion";
import Navbar from "./Navbar"; // Import your Navbar component
import Slider from "./Slider"; // Import your Slider component
import OurServices from "./OurServices";  // Import your OurServices component
import TabContent from "./TabContent";
import ServiceCards from "./ServiceCard";
import ClientFeedback from "./ClientFeedback";
import AstrologyTab from "./AstrologyTab";

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-4">
      {/* Navbar that moves with page scroll */}
      <motion.div
        className="absolute top-0 left-0 w-full z-50"
        initial={{ y: 0 }}
        animate={{ y: scrollPosition > 50 ? scrollPosition / 2 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      {/* Slider Section */}
      <div className="mt-1 flex items-center justify-center">
        <Slider />
      </div>

      {/* Our Services Section */}

      <div className="mt-10 flex items-center justify-center">
        <OurServices />
        </div>

{/* Tab Content Section */}
      <div className="mt-10 flex items-center justify-center">
        <TabContent />
      </div>

      {/* Service Cards Section */}
      <div className="mt-10 flex items-center justify-center">
        <ServiceCards />
      </div>

      {/* Client Feedback Section */}
      <div className="mt-10 flex items-center justify-center">
        <ClientFeedback />
      </div>

      {/* Astrology Tab Section */}
      <div className="mt-10 flex items-center justify-center">
        <AstrologyTab />
      </div>



      {/* Footer Section */}
      <footer className="mt-10 text-center">
        <p className="text-gray-600">© 2023 Your Company Name. All rights reserved.</p>
      </footer>


    </div>
  );
};

export default LandingPage;
