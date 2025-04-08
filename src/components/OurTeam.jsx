import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/ansh.jpg";
import img4 from "../assets/gaurav.jpg";
import img2 from "../assets/divyanshu.jpg";
import img3 from "../assets/sachin.png";
import img5 from "../assets/adarsh.jpg";
import img6 from "../assets/rohit.jpg";
import img7 from "../assets/sofia.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OurTeam = () => {
  const teamMembers = [
    { name: "Ansh", role: "Graphics Designer", img: img1, bg: "bg-orange-200" },
    { name: "Gaurav", role: "Developer", img: img4, bg: "bg-yellow-200" },
    { name: "Divyanshu", role: "Developer", img: img2, bg: "bg-gray-200" },
    { name: "Sachin", role: "Marketer", img: img3, bg: "bg-blue-200" },
    { name: "Adarsh", role: "Product Manager", img: img5, bg: "bg-green-200" },
    { name: "rohit", role: "Developer", img: img6, bg: "bg-green-200" },
    { name: "Sofiya", role: "Data analyst", img: img7, bg: "bg-green-200" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [tabletIndex, setTabletIndex] = useState(0);
  const tabletCardsPerView = 3;
  const maxTabletIndex = Math.max(0, Math.ceil(teamMembers.length / tabletCardsPerView) - 1);

  
  useEffect(() => {
    setCurrentIndex(0);
    setTabletIndex(0);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex < teamMembers.length - 1 ? prevIndex + 1 : prevIndex)
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  // Tablet Navigation
  const goToPreviousTablet = () => {
    setTabletIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const goToNextTablet = () => {
    setTabletIndex((prevIndex) => 
      (prevIndex < maxTabletIndex ? prevIndex + 1 : prevIndex)
    );
  };

  // Get current visible cards for tablet view
  const getVisibleTabletCards = () => {
    const startIdx = tabletIndex * tabletCardsPerView;
    return teamMembers.slice(startIdx, startIdx + tabletCardsPerView);
  };

  return (
    <div
      id="team"
      className="w-full min-h-screen flex flex-col justify-center items-center gap-6 md:gap-9 text-white p-4 md:p-10 bg-[#070129] relative overflow-hidden"
    >
      <div className="text-center w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-5">Our Team</h1>
      </div>
      
      <div className="text-center w-full max-w-3xl px-4">
        <p className="text-lg md:text-xl">
          Meet our talented team of professionals dedicated to delivering the best results. Our innovative team ensures creativity, technical expertise, and strategic marketing to elevate your brand.
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex space-x-8 justify-center items-center mt-20 md:mt-12 relative max-h-100 max-w-full overflow-x-auto px-4">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`relative flex flex-col items-center ${member.bg} rounded-[80px] shadow-xl w-44 h-96 text-black overflow-hidden`}
          > 
            <div className="absolute top-8 flex flex-col items-center">
              <h2 className="font-semibold text-xl md:text-2xl">{member.name}</h2>
              <p className="text-black text-base md:text-lg">{member.role}</p>
            </div>

            {/* Image */}
            <div className="absolute bottom-0 w-full h-3/4 bg-white flex items-center justify-center overflow-hidden rounded-t-[80px] hover:h-[390px] transition-all duration-300 ease-in-out hover:cursor-pointer">
              <img className="w-full h-full object-cover" src={member.img} alt={member.name} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tablet View (md screens only) */}
      <div className="hidden md:block lg:hidden w-full mt-8 relative">
        {/* Tablet Navigation Buttons */}
        {tabletIndex > 0 && (
          <button
            onClick={goToPreviousTablet}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full text-white"
            aria-label="Previous page"
          >
            <ChevronLeft size={28} />
          </button>
        )}
        
        {tabletIndex < maxTabletIndex && (
          <button
            onClick={goToNextTablet}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full text-white"
            aria-label="Next page"
          >
            <ChevronRight size={28} />
          </button>
        )}
        
        <div className="flex justify-center space-x-6">
          {getVisibleTabletCards().map((member, index) => (
            <motion.div 
              key={`tablet-${tabletIndex}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, y: [0, -10, 0] }}
              transition={{ 
                opacity: { duration: 0.5 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className={`relative flex flex-col items-center ${member.bg} rounded-[80px] shadow-xl w-36 h-80 text-black overflow-hidden`}
            > 
              <div className="absolute top-6 flex flex-col items-center">
                <h2 className="font-semibold text-lg">{member.name}</h2>
                <p className="text-black text-sm">{member.role}</p>
              </div>

              {/* Image */}
              <div className="absolute bottom-0 w-full h-3/4 bg-white flex items-center justify-center overflow-hidden rounded-t-[80px] hover:h-[340px] transition-all duration-300 ease-in-out hover:cursor-pointer">
                <img className="w-full h-full object-cover" src={member.img} alt={member.name} />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Tablet Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: maxTabletIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setTabletIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === tabletIndex ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>


      {/* Mobile View - Single Card Carousel */}
      <div className="md:hidden w-full flex flex-col items-center justify-center mt-8">
        {/* Mobile Navigation */}
        <div className="relative w-58 h-120">
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-2 rounded-full text-white"
              aria-label="Previous team member"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          
          {currentIndex < teamMembers.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute -right-11 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-2 rounded-full text-white"
              aria-label="Next team member"
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {/* Cards Container */}
          <div className="w-full h-full">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 100,
                  y: currentIndex === index ? [0, -10, 0] : 0
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  x: { duration: 0.3 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className={`absolute top-0 left-0 w-full h-full ${
                  currentIndex === index ? "visible" : "invisible"
                } ${member.bg} rounded-[80px] shadow-xl text-black overflow-hidden flex flex-col items-center`}
              >
                <div className="absolute top-8 flex flex-col items-center">
                  <h2 className="font-semibold text-xl">{member.name}</h2>
                  <p className="text-black text-base">{member.role}</p>
                </div>

                {/* Image */}
                <div className="absolute bottom-0 w-full h-3/4 bg-white flex items-center justify-center overflow-hidden rounded-t-[80px] hover:h-[340px] transition-all duration-300 ease-in-out hover:cursor-pointer">
                  <img className="w-full h-full object-cover" src={member.img} alt={member.name} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Page Indicators */}
        <div className="flex space-x-2 mt-6">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;