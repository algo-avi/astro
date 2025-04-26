import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 px-8 py-6 shadow-md text-white">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-6 sm:space-y-0">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul>
            <li className="hover:text-gray-300 transition-colors">Home</li>
            <li className="hover:text-gray-300 transition-colors">About</li>
            <li className="hover:text-gray-300 transition-colors">Blog</li>
            <li className="hover:text-gray-300 transition-colors">FAQs</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-bold mb-2">Our Services</h3>
          <ul>
            <li className="hover:text-gray-300 transition-colors">Web Design</li>
            <li className="hover:text-gray-300 transition-colors">Development</li>
            <li className="hover:text-gray-300 transition-colors">SEO</li>
            <li className="hover:text-gray-300 transition-colors">Content</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold mb-2">Get in Touch</h3>
          <p className="text-gray-300">Feel free to reach us for any queries!</p>


        </div>
      </div>

    </footer>
  );
};

export default Footer;
