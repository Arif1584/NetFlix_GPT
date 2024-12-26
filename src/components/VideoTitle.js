import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-2 text-base w-1/3">{overview}</p>
      <div className="my-3 md:m-0">
        <button className="bg-white text-black p-1 md:p-1.5 px-7 md:px-10 text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block mx-5 bg-gray-500 text-white p-1.5 px-10 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-20">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
