import React, { useState } from "react";
import Footer from "./Footer";

const AstrologyTab = () => {
  const [activeTab, setActiveTab] = useState("callAstrologer");

  return (
    <div className="w-full mx-auto py-10 px-5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/30 backdrop-blur-lg bg-gradient-to-r from-yellow-800 via-orange-700 to-red-700">
      {/* Tab Buttons */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab("callAstrologer")}
          className={`px-6 py-2 rounded-lg font-semibold text-white ${
            activeTab === "callAstrologer" ? "bg-saffron-600" : "bg-gray-400"
          } hover:bg-saffron-700 transition`}
        >
          ज्योतिषी से कॉल
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full bg-white/10 rounded-xl p-6 shadow-[0px_4px_20px_rgba(255,255,255,0.3)] backdrop-blur-lg">
        {activeTab === "callAstrologer" && (
          <div className="text-center">
            <p className="text-white text-lg leading-relaxed font-semibold">
              ज्योतिषी से कॉल पर बात करें और अपनी सभी चिंताओं का उत्तर पाएं।
            </p>
          </div>
        )}
      </div>
      <div className="mt-6">
        <Footer />
        </div>

    </div>
  );
};

export default AstrologyTab;
