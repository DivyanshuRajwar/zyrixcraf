import React, { useEffect, useRef, useState } from "react";
import Hand from "../assets/hand.webp";
import laptop from "../assets/macbook-pro.png";
import eComm from "../assets/0401.mp4";
import "../styles/Responsive.css";

function HandCompo() {
  const laptopRef = useRef(null);
  const sectionRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Only fix the div between 100px and 800px scroll position
      if (scrollTop >= 2280 && scrollTop <= 3600) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="showcase" ref={sectionRef} className="laptop_cover relative min-w-full h-[1830px]">
      <div className="laptop_div sticky top-0 w-full">
        <img
          src={laptop}
          alt="laptop"
          className="w-[1230px] ml-28"
        />
        <video
          preload="metadata"
          src={eComm}
          autoPlay
          loop
          muted
          className="w-[970px]  rounded-2xl absolute top-[30px] left-[245px] object-cover"
        />
      </div>
    </div>
  );
  
}

export default HandCompo;
