import React from "react";
import { motion } from "framer-motion";
import Tabs from "./Tabs";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md flex flex-col items-center z-50">
      {/* 🔹 Moving Text Banner */}
      <div className="w-full bg-[#ff9933] px-4 py-1 overflow-hidden">
        <motion.div
          className="whitespace-nowrap text-sm font-semibold text-white"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          🚀 Special Offer: Get 30% off your first consultation! | New features launching soon | Stay tuned for updates 🚀
        </motion.div>
      </div>

      {/* 🔸 Main Navbar */}
      <div className="w-full px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-[#ff9933]"
        >
          MyLogo
        </motion.div>

        {/* Search Bar */}
        <div className="flex items-center border pl-4 gap-2 bg-white border-gray-300 h-[42px] rounded-full overflow-hidden flex-grow max-w-full sm:max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 30 30"
            fill="#6B7280"
          >
            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full outline-none text-sm text-gray-500 bg-transparent"
          />
          <button
            type="submit"
            className="hidden sm:block bg-indigo-500 w-28 h-9 rounded-full text-sm text-white mr-2"
          >
            Search
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-end">
          {/* Phone Number */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block text-sm text-[#ff9933]"
          >
            📞 <span className="font-medium">1800-123-4567</span>
          </motion.div>

          {/* Buttons */}
          <motion.button
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#ff9933] text-white px-4 py-2 rounded-full hover:bg-[#e68a00] transition text-sm"
          >
            Consult Now
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="border border-[#ff9933] text-[#ff9933] px-4 py-2 rounded-full hover:bg-[#ffcc99] transition text-sm"
          >
            Sign In
          </motion.button>
        </div>
      </div>

      {/* Tabs Component */}
      <Tabs />
    </nav>
  );
};

export default Navbar;
