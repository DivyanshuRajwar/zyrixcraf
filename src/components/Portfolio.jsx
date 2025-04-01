import React from "react";
import { useNavigate } from "react-router-dom";
import webDev from "../assets/webDev.jpg";
import graphics from "../assets/graphics.jpg";
import uiUx from "../assets/ui-ux.jpg";

function Portfolio() {
  const navigate = useNavigate();

  return (
    <div className="shadow-lg bg-gradient-to-br from-gray-100 to-gray-300 border-none w-[95%] min-h-screen flex flex-col justify-between pb-10 pt-10 items-center text-white rounded-4xl mt-3">
      {/* Heading */}
      <div className="w-full p-5 text-center">
        <h2 className="text-4xl text-gray-700 font-bold">Portfolio</h2>
        <p className="text-2xl mt-3 font-sans text-gray-500 max-w-4xl mx-auto">
          <span className="text-black font-bold">Showcasing</span> a blend of creativity and functionality with stunning UI/UX designs that deliver seamless digital experiences.
        </p>
      </div>

      {/* Portfolio Categories */}
      <div className="w-full flex flex-wrap justify-center gap-6 px-6">
        {/* Web Development */}
        <div className="w-full md:w-[60%] h-[500px] relative overflow-hidden rounded-xl cursor-pointer shadow-xl">
          <img src={webDev} alt="Web Development" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 left-6 right-6 bg-white bg-opacity-80 rounded-2xl p-6 shadow-lg flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Modern Web Development</h2>
            <p className="text-md text-gray-600 mt-2">
              Creating high-performance websites, from <strong>e-commerce platforms</strong> to <strong>personal portfolios</strong>, ensuring seamless user experiences.
            </p>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="w-full md:w-[35%] h-[500px] relative overflow-hidden rounded-xl cursor-pointer shadow-xl">
          <img src={graphics} alt="Graphic Design" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 left-6 right-6 bg-white bg-opacity-80 rounded-2xl p-6 shadow-lg flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Graphic Design</h2>
            <p className="text-md text-gray-600 mt-2">
              Crafting visually stunning designs for brands, websites, and marketing.
            </p>
          </div>
        </div>
      </div>

      {/* UI/UX Section with Navigation */}
      <div className="w-full mt-6 h-[550px] relative rounded-4xl overflow-hidden shadow-xl cursor-pointer">
        <img src={uiUx} alt="UI/UX Design" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute bottom-6 left-6 right-6 bg-white bg-opacity-80 rounded-2xl p-6 shadow-lg flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800">UI/UX Design</h2>
          <p className="text-md text-gray-600 mt-2">
            Designing intuitive and engaging user experiences for web and mobile apps.
          </p>
          <button
            onClick={() => navigate("/UiUx-Portfolio")}
            className="absolute right-5 top-5 h-16 w-16 bg-[#b496966c] rounded-full flex justify-center items-center text-black font-bold text-xl hover:scale-[1.1] transition-all"
            aria-label="View UI/UX Portfolio"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
