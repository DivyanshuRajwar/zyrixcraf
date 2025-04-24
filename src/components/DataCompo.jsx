import React from "react";
import img1 from "../assets/img1.webp"; 
import img2 from "../assets/img2.webp"; 
import "../styles/Responsive.css"

const DataCompo = () => {
  return (
    <div id="data-container" className="h-screen w-screen bg-[#dfdcd960] flex items-center justify-center p-4 space-y-20">
      <div id="data-wrapper" className="h-[95%] w-[95%] max-w-none flex flex-col items-center justify-center shadow-2xl bg-[#bdb9b698] rounded-[100px] gap-6 font-[Poppins] text-center p-8">
        
        <h1 id="data-title" className="text-7xl font-bold text-[#1e1f24]">
          Innovation drives success 
        </h1>

        <span id="data-text-1" className="text-5xl text-[#1e1f24] font-medium">
          We believe in <span className="font-semibold text-[#1e1f24]">Technology</span>
          <span id="data-img-1-wrapper" className="inline-block mx-2">
            <img
              loading="lazy"
              src={img1}
              alt="Tech Image"
              id="data-img-1"
              className="w-[190px] h-[80px] rounded-[100px] border-none object-cover inline-block"
            />
          </span>
          <span className="font-semibold text-[#1e1f24]">and Creativity</span>
        </span>

        <span id="data-text-2" className="text-6xl text-[#1e1f24] font-medium">
          <span id="data-img-2-wrapper" className="inline-block mx-2">
            <img
              loading="lazy"
              src={img2}
              alt="AI Image"
              id="data-img-2"
              className="w-[190px] h-[80px] rounded-[100px] object-cover inline-block border-none"
            />
          </span>
          <span id="data-text-3" className="font-semibold text-[#5e7984]">transforming possibilities</span>
        </span>

      </div>
    </div>
  );
};

export default DataCompo;