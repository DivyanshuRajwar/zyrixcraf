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
import HandCompo from "./HandCompo";
import "../styles/Responsive.css";
function Wrapper() {
  const [overlayOn, setOverlay] = useState(false);
  const [hamb, setHamb] = useState(false);
  const [uiUx, setUiUx] = useState(true);
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-100vh flex flex-col items-center bg-stone-200 relative">
      {/* Sticky Header */}
      <div
        id="Wrapper_head"
        className="fixed top-[0.25em] right-[5%] w-[22em] h-[5em] flex justify-between pr-[1.25em] items-center z-50 gap-[2.5em] transition-all duration-300"
      >
        <div
      onClick={() => setOverlay(!overlayOn)}
      className={`btn w-[50%] flex rounded-full py-[0.75em] px-[0.75em] text-[1.125em] font-bold transition-all duration-400 ease-in-out hover:cursor-pointer 
        ${scrolled ? 'bg-blue-600 text-white' : 'bg-[#d8d2d294] hover:bg-blue-600 hover:text-white'}`}
    >
      Become a Client
    </div>

        <div onClick={() => setHamb(!hamb)} className="hamb cursor-pointer w-[3.75em] h-[3.75em] rounded-full bg-[#cfc4c48e] backdrop-blur-lg shadow-lg flex items-center justify-center border border-white/20 pt-2">
          {hamb ? (
            <i
              
              className="fi fi-br-cross text-[1.5em] text-black cursor-pointer"
            ></i>
          ) : (
            <i
              
              className="fi fi-br-bars-staggered text-[1.5em] text-black cursor-pointer"
            ></i>
          )}
        </div>
        {hamb ? (
          <div className={`nav_option z-50 font-sans transition-all duration-500 fixed top-[130px] right-8`}
        >
            <span className="absolute right-[6.1em] top-[1.463em] text-[1.563em] hover:cursor-pointer hover:scale-[1.1] transition-all duration-300">
              <i
                onClick={() =>
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="fi fi-rr-home neon-icon"
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
            <span className=" contact absolute right-[132px] top-[295px] text-[25px] hover:cursor-pointer hover:scale-[1.1] transition-all duration-300">
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
      </div>
      {/* Main Content */}
      <Landing hamb={hamb} />
      <Marque />
      <Services overlayOn={overlayOn} setOverlay={setOverlay} />
      <ShowCase overlayOn={overlayOn} setOverlay={setOverlay} />
      <ShowCase2 />
      <Portfolio />
      <LatestCases />
      <OurTeam />
      <Footer overlayOn={overlayOn} setOverlay={setOverlay} />

      {overlayOn && <ClientHome setOverlay={setOverlay} />}
   
    </div>
  );
}

export default Wrapper;