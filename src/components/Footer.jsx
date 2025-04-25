import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import Spline from "@splinetool/react-spline";
const Footer = ({ overlayOn, setOverlay }) => {
  const socialLinks = [
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/zyrixcraft?igsh=dWE0d2Vwbmx4NjBm",
    },
    { icon: FaGithub, link: "https://github.com/zyrixcraft" },
    { icon: FaWhatsapp, link: "https://wa.me/919711625392" },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/company/zyrixcraft/posts/?feedView=all",
    },
  ];

  return (
    <div
      id="footer"
      className="w-screen h-[70vh] flex flex-col relative bg-[#13063D]  items-center"
    >
      <div className="w-full uppercase text-8xl font-bold border-none text-white text-center tracking-[0.4em] bg-[#13063D] ">
        Zyrixcraft
        <div className="text-[15px] tracking-[0.2em] flex gap-6 font-mono absolute left-[32%]  text-white items-center">
          <span className="flex items-center gap-2">
            <FaInstagram /> Instagram
          </span>
          <span className="flex items-center gap-2">
            <FaLinkedin /> LinkedIn
          </span>
          <span className="flex items-center gap-2">
            <FaGithub /> GitHub
          </span>
          <span className="flex items-center gap-2">
            <FaWhatsapp /> WhatsApp
          </span>
        </div>
      </div>
      <div className=" border-none w-[60vw] h-[70%] mt-4 ">
        <Spline
          scene="https://prod.spline.design/1v2nty9TOzLD0Qkp/scene.splinecode"
          className="border-none"
        />
      </div>
      <div className="absolute top-[10em]  left-10 ">
        <h2 className="text-xl font-bold mb-6 text-white">Contact us</h2>
        <div className="space-y-4">
          <p>
            <span className="text-white">Email:</span>{" "}
            <a href="mailto:zyrixcraft@gmail.com" className="text-white">
              zyrixcraft@gmail.com
            </a>
          </p>
          <p>
            <span className="text-white">Phone:</span>{" "}
            <a href="tel:+91971162539" className="text-white">
              +91 97116 25392
            </a>
          </p>
          <p className="text-white max-w-xs">
            New Delhi - 110044, Near Union Bank <br /> aali village
          </p>
        </div>
      </div>
      {/* QUick */}
      <div className="absolute top-[10em]  right-10 text-white ">
        <h2 className="text-xl font-bold mb-6">Quick Links</h2>
        <div className="space-y-4 ">
          <p>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white hover:text-gray-900 transition"
            >
              Home
            </a>
          </p>
          <p>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault(); // prevent default anchor jump
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white transition"
            >
              Services
            </a>
          </p>
          <p>
            <a
              href="#Portfolio"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("Portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white transition"
            >
              Portfolio
            </a>
          </p>
          <p>
            <a
              href="#cases"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("cases")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white transition"
            >
              Latest Cases
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
