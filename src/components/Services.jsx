import React from "react";
import webPic from "../assets/web.avif";
import uiUx from "../assets/ui-ux.avif";
import graphic from "../assets/graphics.avif";
import '../styles/AllCompo.css'
function Services( {overlayOn, setOverlay}) {
  return (
    <div id="services"
      className="w-[95%] min-h-screen flex flex-col items-center rounded-4xl 
  shadow-[10px_10px_30px_rgba(0,0,0,0.3),-10px_-10px_30px_rgba(255,255,255,0.2)]
  bg-gradient-to-br from-gray-100 to-gray-300 border-none mb-2"
    >
      <div className="w-full h-[30%] p-5   ">
        <h3 className=" text-4xl text-gray-400 font-bold ">Our Services</h3>
        <h2 className=" text-4xl mt-3 font-sans w-[1000px] text-gray-400 ">
          We are a passionate team dedicated to designing stunning websites,
          captivating graphics, and seamless UI/UX experiences that leave a
          lasting impact.
        </h2>
      </div>
      <div className="w-full h-[70%] p-5  flex gap-2  ">
        <div onClick={()=> setOverlay(!overlayOn)} className="w-[450px] relative overflow-hidden rounded-4xl  ">
          <div
            className="absolute z-1 w-full h-full p-5 flex flex-col gap-5 text-[#ffffff] 
  bg-[#3a383883] rounded-4xl font-serif 
  hover:bg-[#0c0c0cbe] hover:cursor-pointer transition-colors duration-300 ease-in-out"
          >
            <span className=" text-[45px] font-bold   ">
              WEB <br /> DEVELOPMENT
            </span>
            <p className="mt-12 text-[18px] font-sans ">
              We craft responsive and unique web designs that captivate
              audiences, ensuring seamless performance across all devices. From
              SEO optimization to reliable hosting, we deliver complete digital
              solutions tailored to your success.
            </p>
            <hr></hr>
            <div className="flex gap-2">
              <span className=" bg-[#d3c5c5b2] p-2 rounded-4xl ">ReactJs</span>
              <span className=" bg-[#d3c5c5b2] p-2 rounded-4xl ">
                ExpressJs
              </span>
              <span className=" bg-[#d3c5c5b2] p-2 rounded-4xl ">MongoDb</span>
              <span className=" bg-[#d3c5c5b2] p-2 rounded-4xl ">FireBase</span>
            </div>
          </div>
          <img
          loading="lazy"
            src={webPic}
            alt=""
            className="rounded-4xl animate-[scaleAnimation_4s_ease-in-out_infinite]"
            style={{ animation: "scaleAnimation 10s ease-in-out infinite" }}
          />
        </div>
        <div onClick={()=> setOverlay(!overlayOn)} className="w-[450px] relative  overflow-hidden rounded-4xl ">
          <div
            className="absolute z-1 w-full h-full p-5 flex flex-col gap-5 text-[#ffffff] 
  bg-[#3a383883] rounded-4xl font-serif 
  hover:bg-[#0c0c0cbe] hover:cursor-pointer transition-colors duration-300 ease-in-out"
          >
            <span className=" text-[45px] font-bold   ">UI/UX</span>
            <p className="mt-[115px] text-[18px] font-sans ">
              We design intuitive and visually stunning UI/UX experiences that
              enhance user engagement across all devices. From seamless
              navigation to accessibility and performance, we create digital
              experiences that leave a lasting impact.
            </p>
            <hr></hr>
            <div className="flex gap-2">
              <span className=" bg-[#d3c5c5b2] p-2 rounded-4xl ">Figma </span>
              <span className=" bg-[#d3c5c5b2] p-2 rounded-4xl ">Adobe XD</span>
              <span className=" bg-[#d3c5c5b2] p-2 rounded-4xl ">Framer </span>
            </div>
          </div>
          <img  loading="lazy" src={uiUx} alt="" className="rounded-4xl animate-[scaleAnimation_4s_ease-in-out_infinite]"
            style={{ animation: "scaleAnimation 10s ease-in-out infinite" }} />
        </div>
        <div onClick={()=> setOverlay(!overlayOn)} className="w-[450px] relative  overflow-hidden rounded-4xl  ">
          <div
            className="absolute z-1 w-full h-full p-5 flex flex-col gap-5 text-[#ffffff] 
  bg-[#3a383883] rounded-4xl font-serif 
  hover:bg-[#0c0c0cbe] hover:cursor-pointer transition-colors duration-300 ease-in-out"
          >
            <span className=" text-[45px] font-bold uppercase  ">
              graphic designs
            </span>
            <p className="mt-12 text-[18px] font-sans ">
              We create visually compelling and unique graphic designs that
              captivate audiences and elevate your brand identity. From logos to
              marketing materials, we craft designs that blend creativity with
              strategy for maximum impact.
            </p>
            <hr></hr>
            <div className="flex gap-2">
              <span className=" bg-[#d3c5c5b2] p-2 rounded-4xl ">
                Adobe Photoshop
              </span>
              <span className=" bg-[#d3c5c5b2] p-2 rounded-4xl ">
                CorelDRAW{" "}
              </span>
              <span className=" bg-[#d3c5c5b2] p-2 rounded-4xl ">Canva </span>
            </div>
          </div>
          <img loading="lazy" src={graphic} alt="" className="rounded-4xl animate-[scaleAnimation_4s_ease-in-out_infinite]"
            style={{ animation: "scaleAnimation 10s ease-in-out infinite" }} />
        </div>
      </div>
    </div>
  );
}

export default Services;
