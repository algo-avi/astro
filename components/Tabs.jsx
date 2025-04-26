import React from "react";
import { NavLink } from "react-router-dom";

const Tabs = () => {
  return (
    <div className="w-screen mt-5 border-t-[1.5px] border-b-[1.5px] border-[#ff9933]"> {/* Increased top margin */}
      <div className="flex justify-evenly items-center h-12"> {/* Reduced tab height */}
        {/* Tabs */}
        <NavLink
          to="/home"
          className="w-36 h-10 text-black text-sm font-medium flex items-center justify-center transition-all hover:backdrop-blur-md hover:bg-[#ff993366] hover:shadow-[0_4px_20px_rgba(255,153,51,0.6)] hover:scale-110"
          activeClassName="font-bold underline"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="w-36 h-10 text-black text-sm font-medium flex items-center justify-center transition-all hover:backdrop-blur-md hover:bg-[#ff993366] hover:shadow-[0_4px_20px_rgba(255,153,51,0.6)] hover:scale-110"
          activeClassName="font-bold underline"
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className="w-36 h-10 text-black text-sm font-medium flex items-center justify-center transition-all hover:backdrop-blur-md hover:bg-[#ff993366] hover:shadow-[0_4px_20px_rgba(255,153,51,0.6)] hover:scale-110"
          activeClassName="font-bold underline"
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className="w-36 h-10 text-black text-sm font-medium flex items-center justify-center transition-all hover:backdrop-blur-md hover:bg-[#ff993366] hover:shadow-[0_4px_20px_rgba(255,153,51,0.6)] hover:scale-110"
          activeClassName="font-bold underline"
        >
          Contact
        </NavLink>

        {/* More Tab */}
        <div className="relative group w-36 h-10 flex items-center justify-center"> {/* Button size matches tabs */}
          <button className="text-black text-sm font-medium transition-all hover:backdrop-blur-md hover:bg-[#ff993366] hover:shadow-[0_4px_20px_rgba(255,153,51,0.6)] hover:scale-110">
            More
          </button>
          {/* Dropdown List */}
          <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg py-1 min-w-[150px] z-50">
            <NavLink
              to="/extra1"
              className="block px-4 py-1 text-gray-700 hover:backdrop-blur-md hover:bg-[#ff993366] hover:shadow-[0_4px_15px_rgba(255,153,51,0.6)] hover:text-black transition"
            >
              Option 1
            </NavLink>
            <NavLink
              to="/extra2"
              className="block px-4 py-1 text-gray-700 hover:backdrop-blur-md hover:bg-[#ff993366] hover:shadow-[0_4px_15px_rgba(255,153,51,0.6)] hover:text-black transition"
            >
              Option 2
            </NavLink>
            <NavLink
              to="/extra3"
              className="block px-4 py-1 text-gray-700 hover:backdrop-blur-md hover:bg-[#ff993366] hover:shadow-[0_4px_15px_rgba(255,153,51,0.6)] hover:text-black transition"
            >
              Option 3
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
