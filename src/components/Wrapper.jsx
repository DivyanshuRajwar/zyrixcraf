import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import Footer from "./Footer";
import Marque from "./Marque";
import ShowCase from "./ShowCase";
import ShowCase2 from "./ShowCase2";
import Portfolio from "./Portfolio";
import Services from "./Services";
import DataCompo from "./DataCompo";
import LatestCases from "./LatestCases";
import ClientHome from "./ClientHome";
import OurTeam from "./OurTeam";
import "../styles/Responsive.css"
function Wrapper() {
  const [overlayOn, setOverlay] = useState(false);
  const [hamb, setHamb] = useState(false);
  const [uiUx , setUiUx] = useState(true)
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-stone-200 relative">
      {/* Sticky Header */}
      <div id="Wrapper_head" className="fixed top-[0.25em] right-[5%] w-[22em] h-[5em] flex justify-between pr-[1.25em] items-center z-50 gap-[2.5em] transition-all duration-300">
        <div
          onClick={() => setOverlay(!overlayOn)}
          className="btn w-[50%] bg-[#d8d2d294] flex rounded-full py-[0.75em] px-[0.75em] text-[1.125em] hover:cursor-pointer font-bold
            hover:bg-blue-600 hover:text-white hover:font-bold transition-all duration-300 ease-in-out"
        >
          Become a Client
        </div>
        <div className="hamb w-[3.75em] h-[3.75em] rounded-full bg-[#cfc4c48e] backdrop-blur-lg shadow-lg flex items-center justify-center border border-white/20">
          {hamb ? (
            <i
              onClick={() => setHamb(!hamb)}
              className="fi fi-br-cross text-[1.5em] text-black cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={() => setHamb(!hamb)}
              className="fi fi-br-bars-staggered text-[1.5em] text-black cursor-pointer"
            ></i>
          )}
        </div>
      </div>
      {/* Main Content */}
      <Landing hamb={hamb} />
      <Marque />
      <Services overlayOn={overlayOn} setOverlay={setOverlay} />
      <ShowCase overlayOn={overlayOn} setOverlay={setOverlay} />
      <ShowCase2 />
      <Portfolio />
      <DataCompo />
      <LatestCases />
      <OurTeam />
      <Footer overlayOn={overlayOn} setOverlay={setOverlay} />
      
      {overlayOn && <ClientHome setOverlay={setOverlay} />}
    </div>
  );
}

export default Wrapper;
