import React from "react";
import Hand from "../assets/hand.webp";
import laptop from "../assets/macbook-pro.png";
import eComm from "../assets/0401.mp4";
import '../styles/Responsive.css'
function HandCompo() {
  return (
    <div className="laptop_cover relative   min-w-full min-h-[1850px]   ">
      <div className="laptop_div sticky h-full w-full top-10    ">
        <img src={laptop} alt="laptop"  className=" w-[750px]   mt-5 ml-[350px]"  />
        <video
        preload="metadata"
          src={eComm}
          autoPlay
          loop
          muted
          className="w-[590px] h-[380px] rounded-2xl absolute top-[20px] left-[430px]   object-cover "
        />
      </div>
    </div>
  );
}

export default HandCompo;
