import React from "react";

const ContentWithVideo = () => {
  return (
    <div className="w-full mx-auto py-10 px-5 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/30 backdrop-blur-lg">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* YouTube Video Frame */}
        <div className="w-full lg:w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/watch?v=y6LbGfmQPkE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.3)]"
          ></iframe>
        </div>

        {/* Title and Description */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-saffron-600 mb-4">Title of the Content</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            This is your description area. Feel free to provide detailed information about your
            video or content here. Ensure the description complements the video and adds value to
            the user's experience. You can also style it further to make it more engaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentWithVideo;
