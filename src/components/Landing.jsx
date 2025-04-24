import React, { forwardRef } from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import "../index.css";
import "../styles/font.css";
import "../styles/Responsive.css";
import { motion } from "framer-motion";
import videoSrc from "../assets/Backgroung.mp4";
import Epic from "../assets/epic.webp";
import Logo from "../assets/Logo.webp";
import Orb from "../assets/3dorb.webp";
import Plus from "../assets/Plus.webp";
import Hash from "../assets/Hash.webp";
import Cube from "../assets/Cube.webp";
function Landing({ hamb }, ref) {
  return (
    <div
     ref={ref}
      id="home"
      className="border-none w-[96%] h-[95vh] rounded-4xl flex flex-col justify-center items-center relative mt-[0.125em]"
    >
      <div
        id="landing_video"
        className=" w-full h-full border-none flex justify-end "
      >
        <video
          preload="metadata"
          className="w-full border-none h-full  object-cover rounded-4xl "
          autoPlay
          loop
          muted
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Over lay */}
      <div
        id="landing_overLay"
        className="absolute w-full h-full rounded-4xl flex flex-col bg-opacity-10 shadow-lg bg-[#9fb3df56]  "
      >
        <div className="w-full h-[5em] p-[2.5em] flex items-center pl-[3.125em] font-bold">
          {/* Logo */}
          <div className="logo flex items-center space-x-2">
            <img
              src={Logo}
              alt="Logo"
              className="w-[11em] h-[11em]"
              loading="lazy"
            />
            {/* <span className="text-[1.875em] font-bold">zyrixCraft</span> */}
          </div>
          {/* Items */}
          <div className="items flex space-x-8 bg-[#dad7da] rounded-full px-[1.5em] py-[0.75em] ml-[15.625em]">
            <div
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative group inline-block cursor-pointer"
            >
              <span className="text-black text-[1.125em]">Home</span>
              <div className="absolute left-1/2 bottom-0 w-0 h-[0.125em] bg-[#4541f1] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></div>
            </div>
            <div
              onClick={() =>
                document
                  .getElementById("Portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative group inline-block cursor-pointer"
            >
              <span className="text-black text-lg ">Reviews</span>

              <div className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4541f1] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></div>
            </div>
            <div
              onClick={() =>
                document
                  .getElementById("footer")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative group inline-block cursor-pointer"
            >
              <span className="text-black text-lg ">Contact Us</span>

              <div className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4541f1] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex">
        <div id="Landing_Text" className="w-[80%] h-[100%] pt-[3.125em] pl-[2.5em] flex flex-col">
      <span className="digital_text font-Delius">Crazy Ideas</span>
      <div className="arrow_div flex pb-3 pl-8 justify-between items-center w-[70%] h-auto">
        <div
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="blue_arrow w-[6.625em] h-[6.625em] rounded-full bg-[#4541f1] hover:bg-[#0118D8] text-white cursor-pointer bg-opacity-20 backdrop-blur-lg shadow-lg flex justify-center items-center"
        >
          <i className="fi fi-br-arrow-down text-[2.5em]"></i>
        </div>
        <span className="epic-font epic-text">Epic</span>
      </div>
      <span className="digital_text font-Delius">Digital Builds!</span>
    </div>

          <div id="icons_sec" className="w-1/2 h-full overflow-hidden relative">
            <motion.img
              src={Orb}
              alt="Orb"
              className="orb landing_img ml-[75%] w-[21.875em] mt-[3.125em]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              loading="lazy"
            />

            <motion.img
              loading="lazy"
              src={Plus}
              alt="plus"
              className=" plus landing_img w-[9.375em] absolute top-0 right-[15.625em]"
              animate={{
                y: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              loading="lazy"
              src={Hash}
              alt="Hash"
              className=" hash landing_img w-[9.375em] absolute top-[9.8em] right-[22.5em]"
              animate={{
                y: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={Cube}
              alt="Cube"
              loading="lazy"
              className="cube landing_img w-[9.375em] absolute top-[18.75em] z-0 right-[9.375em] rotate-[50deg]"
              animate={{
                y: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
