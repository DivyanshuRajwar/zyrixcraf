import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import "../index.css";
import { motion } from "framer-motion";
import videoSrc from "../assets/Backgroung.mp4";
import Epic from "../assets/epic.png";
import Logo from "../assets/Logo.png";
import Orb from "../assets/3dorb.png";
import Plus from "../assets/Plus.png";
import Hash from "../assets/Hash.png";
import Cube from "../assets/Cube.png";
function Landing({ hamb }) {
  return (
    <div
      id="home"
      className="border-none w-[96%] h-[95vh] rounded-4xl flex flex-col justify-center items-center relative mt-2  "
    >
      <div className="w-full h-full border-none  ">
        <video
          className="w-full h-full border-none object-fill rounded-4xl "
          autoPlay
          loop
          muted
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Over lay */}
      <div className="absolute w-full h-full rounded-4xl flex flex-col  bg-opacity-10  shadow-lg bg-[#7e585883]">
        <div className="w-full h-[80px] p-10 flex items-center  pl-[50px] font-bold ">
          <div className="flex items-center space-x-2  ">
            {" "}
            <img src={Logo} alt="Logo" className="w-12 h-12" />
            <span className="  text-3xl  font-bold ">zyrixCraft</span>
          </div>
          <div className="flex space-x-8  bg-[#dad7da]  rounded-full px-6 py-3  ml-[250px]">
            <div className="relative group inline-block cursor-pointer">
              <span className="text-black text-lg ">Home</span>

              <div className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4541f1] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></div>
            </div>
            <div className="relative group inline-block cursor-pointer">
              <span
                className="text-black text-lg "
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Reviews
              </span>

              <div className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4541f1] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></div>
            </div>
            <div className="relative group inline-block cursor-pointer">
              <span onClick={() =>
                  document
                    .getElementById("footer")
                    ?.scrollIntoView({ behavior: "smooth" })
                } className="text-black text-lg ">Contact Us</span>

              <div className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4541f1] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></div>
            </div>
          </div>
        </div>
        <div className="w-full h-full  flex  ">
          <div className="w-1/2 h-[100%]  pt-[50px] pl-10 flex flex-col   ">
            <span className="  text-[100px] font-bold font-poppins">
              Crazy <span className="font-winky"> Ideas</span>
            </span>

            <div className="flex justify-end items-center w-[80%] gap-10 h-[30%]  ">
              <div className="w-[90px] h-[90px] rounded-full bg-[#4441f1b4] hover:bg-[#4541f1] hover:text-white cursor-pointer bg-opacity-20 backdrop-blur-lg shadow-lg flex justify-center items-center ">
                <i class="fi fi-br-arrow-down text-4xl "></i>
              </div>
              {/* <img src={Epic} alt="pic" width={"350px"} /> */}
              <span className="text-[150px] font-bold ">Epic</span>
            </div>

            <span className="text-[100px] font-bold  fontcls ">
              Digital Builds!
            </span>
          </div>

          <div className="w-1/2 h-full   overflow-hidden   relative">
            <motion.img
              src={Orb}
              alt="Orb"
              className="ml-[75%] w-[350px] mt-[50px]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />
            {hamb ? (
              <div className="w-[40%] h-[50%]  absolute top-15 right-0 z-1 font-sans ">
                <span className="absolute right-[147px] top-[25px] text-[25px] hover:cursor-pointer hover:scale-[1.1]  transition-all duration-300 ">
                  <i
                    className="fi fi-rr-home neon-icon"
                    onClick={() =>
                      document
                        .getElementById("home")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  ></i>
                </span>
                <span className="absolute right-[176px] top-[100px] text-[25px]  hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 ">
                  <i
                    class="fi fi-br-customer-care neon-icon"
                    onClick={() =>
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  ></i>
                </span>
                <span className="absolute right-[182px] top-[170px] text-[25px] hover:cursor-pointer hover:scale-[1.1] transition-all duration-300">
                  <i
                    class="fi fi-rr-edit-alt neon-icon"
                    onClick={() =>
                      document
                        .getElementById("portfolio")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  ></i>
                </span>
                <span className="absolute right-[165px] top-[235px] text-[25px]  hover:cursor-pointer hover:scale-[1.1] transition-all duration-300">
                  <i
                    class="fi fi-rr-users-alt neon-icon"
                    onClick={() =>
                      document
                        .getElementById("team")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  ></i>
                </span>
                <span className="absolute right-[130px] top-[290px] text-[25px] hover:cursor-pointer hover:scale-[1.1] transition-all duration-300">
                  <i
                    class="fi fi-rr-phone-guide neon-icon "
                    onClick={() =>
                      document
                        .getElementById("footer")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  ></i>
                </span>
              </div>
            ) : (
              <> </>
            )}

            <motion.img
              src={Plus}
              alt="plus"
              className="w-[150px] absolute top-0 right-[250px]"
              animate={{
                // x: [0, 40, -40, 0], // Move right, then left, then back
                y: [0, 10, -10, 0], // Move up, then down, then back
              }}
              transition={{
                duration: 4, // Smooth animation over 4 seconds
                repeat: Infinity, // Infinite loop
                ease: "easeInOut", // Smooth in and out motion
              }}
            />
            <motion.img
              src={Hash}
              alt="Hash"
              className="w-[150px] absolute top-40 right-[360px]"
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
              className="w-[150px] absolute top-[300px] z-0 right-[150px] rotate-[50deg] "
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
