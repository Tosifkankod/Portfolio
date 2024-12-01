import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="p-6 overflow-hidden">
      <h1 className="text-6xl font-bold mb-12 mt-16  text-white inline-block px-0">
        Experience & Projects 🌟
      </h1>
      <div className="flex flex-wrap gap-20 justify-center">
        <div className="card card1 relative w-[320px] p-[32px] pb-[36px] h-[368px] rounded-[40px]">
          <div className="flex opacity-1 items-center justify-center bg-gradient-to-r from-rose-400 to-red-500 w-full h-[153px] rounded-[28px]">
            <img src="/portfolio/assets/kjss.png" className="w-[70px]" alt="" />
          </div>
          <p className="text-gray-300 mt-4 text-lg font-bold">
            KJSS Cosmos Pvt. Ltd
          </p>
          <p className=" font-bold absolute bottom-[36px] text-gray-500">
            WEB DEVELOPER <span className="text-white">/ 2023</span>
          </p>
        </div>

        <div className="card card2 relative w-[320px] p-[32px] pb-[36px] h-[368px] rounded-[40px]">
          <div className="flex opacity-1 items-center justify-center bg-gradient-to-r from-amber-200 to-yellow-500 w-full h-[153px] rounded-[28px]">
            <img src="/portfolio/assets/L360.png" className="w-[70px]" alt="" />
          </div>
          <p className="text-gray-300 mt-4 text-lg font-bold">Learning 360</p>
          <p className=" font-bold absolute bottom-[36px] text-gray-500">
            FULL STACK DEVELOPER <span className="text-white">/ now</span>
          </p>
        </div>
      </div>
      {/* <h1 className="text-white">Project Coming soon....</h1> */}
    </div>
  );
};

export default Experience;
