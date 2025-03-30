import React from "react";
import webDev from "../assets/webDev.jpg";
import graphics from "../assets/graphics.jpg";
import uiUx from "../assets/ui-ux.jpg";

function Portfolio() {
  return (
    <div
      className="  shadow-[10px_10px_30px_rgba(0,0,0,0.3),-10px_-10px_30px_rgba(255,255,255,0.2)]
  bg-gradient-to-br from-gray-100 to-gray-300 border-none w-[95%] min-h-screen flex flex-col justify-between pb-10 pt-10 items-center text-white rounded-4xl mt-3 "
    >
      {/* headding */}
      <div className="w-full p-5  ">
        <h2 className="text-4xl text-gray-400 font-bold">Portfolio</h2>
        <p className=" text-4xl mt-3 font-sans w-[1000px] text-gray-400 ">
          <span className="text-black font-bold"> Showcasing </span>a blend of
          creativity and functionality with stunning UI/UX designs that deliver
          seamless digital experiences.
        </p>
      </div>
      {/* top */}
      <div className="w-full flex gap-2 justify-center">
        <div className="w-[60%] h-[500px] relative overflow-hidden rounded-xl cursor-pointer shadow-xl">
          {/* Background Image */}
          <img
            src={webDev}
            alt="Web Dev"
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* Overlay with Rounded White Background */}
          <div className="absolute bottom-6 left-6 right-6 font-serif bg-white bg-opacity-80 rounded-2xl p-6 shadow-lg flex flex-col  ">
            <h2 className="text-2xl font-bold text-gray-800">
              Modern Web Development
            </h2>
            <p className="text-md text-gray-600 mt-2">
              Creating high-performance websites, from{" "}
              <strong>e-commerce platforms</strong>
              to <strong>personal portfolios</strong>, ensuring seamless user
              experiences.
            </p>
            <i className="mt-4 text-2xl text-blue-500"></i>
          </div>
        </div>
        <div className="w-[40%] h-[500px] relative overflow-hidden rounded-xl cursor-pointer shadow-xl">
          {/* Background Image */}
          <img
            src={graphics}
            alt="Web Dev"
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* Overlay with Rounded White Background */}
          <div className="absolute bottom-6 left-6 right-6 font-serif bg-white bg-opacity-80 rounded-2xl p-6 shadow-lg flex flex-col  ">
            <h2 className="text-2xl font-bold text-gray-800">Graphic Design</h2>
            <p className="text-md text-gray-600 mt-2">
              Crafting visually stunning designs for brands, websites, and
              marketing.
            </p>

            <i className="mt-4 text-2xl text-blue-500"></i>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full mt-4 h-[550px] relative rounded-4xl overflow-hidden">
        <img
          src={uiUx}
          alt="Web Dev"
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Overlay with Rounded White Background */}
        <div className="absolute bottom-6 left-6 right-6 font-serif bg-white bg-opacity-80 rounded-2xl p-6 shadow-lg flex flex-col  ">
          <h2 className="text-2xl font-bold text-gray-800">UI/UX Design</h2>
          <p className="text-md text-gray-600 mt-2">
            Designing intuitive and engaging user experiences for web and mobile
            apps.
          </p>

          <i className="mt-4 text-2xl text-blue-500"></i>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
