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
import "../styles/Responsive.css";

function ShowCase2() {
  return (
    <div className="w-full relative bg-green-700 py-10">
      <div className="sticky top-7 z-10 w-[200px] h-[100px] bg-red-400 text-white text-center text-xl flex items-center justify-center shadow-lg">
        I am Sticky
      </div>

      <div className="mt-20 flex flex-col gap-10">
        {/* Lots of dummy content to allow scroll */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="h-[200px] bg-white text-black rounded-xl shadow p-4 mx-auto w-[80%]">
            Section {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}


export default ShowCase2;
