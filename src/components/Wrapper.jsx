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
import "../styles/Responsive.css";
function Wrapper() {
  const [overlayOn, setOverlay] = useState(false);
  const [hamb, setHamb] = useState(false);
  const [uiUx, setUiUx] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const [inHomeSection, setInHomeSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setInHomeSection(scrollY < window.innerHeight);
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount to set the initial state
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-stone-200 relative">
      {/* Sticky Header */}
      <div
        id="Wrapper_head"
        className="fixed top-[0.25em] right-[5%] w-[22em] h-[5em] flex justify-between pr-[1.25em] items-center z-50 gap-[2.5em] transition-all duration-300"
      >
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
        {hamb ? (
          <div className={`nav_option z-50 font-sans transition-all duration-500 ${
            inHomeSection
              ? "fixed top-[130px] right-8" 
              : "vertical-icons"           
          }`}
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
      <DataCompo />
      <LatestCases />
      <OurTeam />
      <Footer overlayOn={overlayOn} setOverlay={setOverlay} />

      {overlayOn && <ClientHome setOverlay={setOverlay} />}
    </div>
  );
}

export default Wrapper;
