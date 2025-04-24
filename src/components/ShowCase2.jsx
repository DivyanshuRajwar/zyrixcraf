import React from "react";
import iphone01 from "../assets/01.webp";
import iphone02 from "../assets/02.webp";
import iphone03 from "../assets/03.webp";
import iphone04 from "../assets/04.webp";
import iphone05 from "../assets/05.webp";
import iphone06 from "../assets/06.webp";
import iphone07 from "../assets/07.webp";
import iphone08 from "../assets/08.webp";
import iphone09 from "../assets/09.webp";
import iphone10 from "../assets/10.webp";
import iphone11 from "../assets/11.webp";
import iphone12 from "../assets/12.webp";
import Hand from "../assets/hand.webp";
import '../styles/Responsive.css'
import HandCompo from "./HandCompo";

function ShowCase2() {
  return (
    <div  className="phone-compo w-screen h-[1830px]  flex flex-col gap-5 justify-start pb-4 items-center text-white relative bg-black ">
        
     

        <div className="handCompo min-w-full  absolute top-0  ">
            <HandCompo />
           
        </div>
      <div className="flex flex-col gap-5">
        <div className="iphone-container flex w-screen gap-4 justify-center ">
          <img
          loading="lazy"
            src={iphone01}
            alt=""
            className="iphone w-[300px] h-[590px] rounded-4xl"
          />
          <img
          loading="lazy"

            src={iphone02}
            alt=""
            className="iphone w-[300px] h-[590px] rounded-4xl"
          />
          <div className="laptop_space w-[290px] h-[570px]"></div>
          <img
          loading="lazy"
            src={iphone03}
            alt=""
            className="iphone w-[300px] h-[590px] rounded-4xl"
          />
          <img
          loading="lazy"
            src={iphone04}
            alt=""
            className="iphone w-[300px] h-[590px] rounded-4xl"
          />
        </div>

        <div className="iphone-container flex w-screen gap-4 justify-center">
          <img
          loading="lazy"
            src={iphone05}
            alt=""
            className="iphone w-[300px] h-[590px] rounded-4xl"
          />
          <img
          loading="lazy"
            src={iphone06}
            alt=""
            className="iphone w-[300px] h-[590px] rounded-4xl"
          />
          <div className="laptop_space w-[290px] h-[570px]"></div>
          <img
          loading="lazy"
            src={iphone07}
            alt=""
            className="iphone w-[300px] h-[590px] rounded-4xl"
          />
          <img
          loading="lazy"
            src={iphone08}
            alt=""
            className="iphone w-[300px] h-[590px] rounded-4xl"
          />
        </div>

        <div className="iphone-container flex w-screen gap-4 justify-center">
          <img
          loading="lazy"
            src={iphone09}
            alt=""
            className="iphone w-[300px] h-[590px] rounded-4xl"
          />
          <img
          loading="lazy"
            src={iphone10}
            alt=""
            className="iphone w-[300px] h-[590px] rounded-4xl"
          />
          <div className="laptop_space w-[290px] h-[570px]"></div>
          <img
          loading="lazy"
            src={iphone11}
            alt=""
            className="iphone w-[300px] h-[590px] rounded-4xl"
          />
          <img
          loading="lazy"
            src={iphone12}
            alt=""
            className="iphone w-[300px] h-[590px] rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
}

export default ShowCase2;