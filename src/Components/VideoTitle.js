import React from "react";
import { IoPlay } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-16 w-screen aspect-video absolute text-white bg-gradient-to-r from-black opacity-75 overflow-x-hidden">
      <h1 className="font-bold text-5xl w-1/2">{title}</h1>
      <p className="py-7 w-2/3">{overview}</p>
      <div className="flex">
        <button className="bg-white px-10 py-2 flex items-center rounded-lg text-black font-semibold ">
          <IoPlay className="mr-2" />
          Play
        </button>
        <button className=" mx-2 bg-gray-400 px-10 py-2 flex items-center rounded-lg opacity-90 text-black font-semibold">
          <CiCircleInfo className="mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
