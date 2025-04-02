import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/ansh.jpg"
import img4 from "../assets/gaurav.jpg"
import img2 from "../assets/divyanshu.jpg"
import img3 from "../assets/sachin.png"
import img5 from "../assets/adarsh.jpg"
import img6 from "../assets/rohit.jpg"
import img7 from "../assets/sofia.png"

const OurTeam = () => {
  const teamMembers = [
      { name: "Ansh", role: "Graphics Designer", img:img1, bg: "bg-orange-200" },
    { name: "Gaurav", role: "Developer", img:img4, bg: "bg-yellow-200" },
    { name: "Divyanshu", role: "Developer", img: img2, bg: "bg-gray-200" },
    { name: "Sachin", role: "Marketer", img:img3, bg: "bg-blue-200" },
    { name: "Adarsh", role: "Product Manager", img: img5, bg: "bg-green-200" },
    { name: "rohit", role: "Developer", img: img6, bg: "bg-green-200" },
    { name: "Sofiya", role: "Data analyst", img: img7, bg: "bg-green-200" },
  ];

  return (
    <div id="team" className="w-full h-screen flex flex-col justify-center items-center gap-9 text-white p-10 bg-[#070129] relative overflow-hidden  ">
      
      <div className="text-center w-full">
        <h1 className="text-5xl font-bold mb-4">Our Team</h1>
      </div>
      <div className="text-center w-full max-w-2xl">
        <p className="text-lg">
          Meet our talented team of professionals dedicated to delivering the best results. Our innovative team ensures creativity, technical expertise, and strategic marketing to elevate your brand.
        </p>
      </div>

      <div className="flex space-x-6 justify-center items-center mt-10 relative">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`relative flex flex-col items-center ${member.bg} rounded-[80px] shadow-xl w-33 h-85 text-black overflow-hidden`}
          > 
            <div className="absolute top-6 flex flex-col items-center">
              <h2 className="font-semibold text-lg">{member.name}</h2>
              <p className="text-black text-sm">{member.role}</p>
            </div>

            {/* Image */}
            <div className="absolute bottom-0 w-full h-3/4 bg-white flex items-center justify-center overflow-hidden rounded-t-[80px] hover:h-[340px] transition-all duration-300 ease-in-out hover:cursor-pointer ">
              <img className="w-full h-full object-cover" src={member.img} alt={member.name} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;