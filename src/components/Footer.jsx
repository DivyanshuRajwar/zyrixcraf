import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClientHome from "./ClientHome";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = ({ overlayOn, setOverlay }) => {
  
  return (
    <div className="w-screen">
      <footer className="bg-gray-100 py-14 font-[Poppins] relative">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-8 lg:px-24 gap-16">
          <div className="mb-10 md:mb-0 md:w-1/3">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              We would love to hear from you.
            </h1>
            <p className="mb-6 text-md text-gray-600">
              Feel free to reach out if you want to collaborate with us, or
              simply have a chat.
            </p>
            <button
              onClick={() => setOverlay(!overlayOn)}
              className="bg-[#4541f1] text-white font-semibold text-md py-3 px-6 rounded-full shadow-lg hover:bg-blue-800 hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-in-out "
            >
              Become a Client
            </button>
            <p className="mt-6 text-sm text-gray-500">
              Don’t like the forms? Drop us a line via email.
            </p>
            <p className="text-md text-gray-700 font-medium">
              Zyrixcraft@gmail.com
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-16 w-full md:w-2/3 gap-16">
            <div className="mb-10 md:mb-0 w-[500px]">
              <h2 className="font-semibold text-2xl text-gray-900 mb-4">
                Contact us
              </h2>
              <p className="text-md text-gray-600">
                Email:{" "}
                <a href="mailto:Zyrix@gmail.com" className="text-blue-600">
                  Zyrix@gmail.com
                </a>
              </p>
              <p className="text-md text-gray-600">
                Phone:{" "}
                <span className="text-gray-700 font-medium">
                  +1 (628) 800-77-09
                </span>
              </p>
              <p className="text-md text-gray-600">
                San Francisco, CA, 2 Embarcadero Center, 8th floor, 94111
              </p>
            </div>

            <div className="mb-10 md:mb-0 w-1/3">
              <h2 className="font-semibold text-2xl text-gray-900 mb-4">
                Follow us
              </h2>
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition text-md transform hover:scale-110"
                >
                  <FaInstagram className="text-2xl" />
                  <span>Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition text-md transform hover:scale-110"
                >
                  <FaGithub className="text-2xl" />
                  <span>GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition text-md transform hover:scale-110"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition text-md transform hover:scale-110"
                >
                  <FaLinkedin className="text-2xl" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className=" mb-10    w-[290px]">
              <h2 className="font-semibold text-2xl text-gray-900 mb-4">
                Quick Links
              </h2>
              <ul className="text-md space-y-2">
                <li className=" mr-4">
                  <a
                    href="#home"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    Home
                  </a>
                </li>
                <li className=" mr-4">
                  <a
                    href="#services"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    Services
                  </a>
                </li>
                <li className=" mr-4">
                  <a
                    href="#Portfolio"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    Portfolio
                  </a>
                </li>
                <li className=" mr-4">
                  <a
                    href="#Cases"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    Latest Cases
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    Connect with us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-6 right-6 bg-[#4541f1] text-white font-semibold text-md py-3 px-6 rounded-full shadow-lg hover:bg-blue-800 hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-in-out"
        >
          Back to Top ↑
        </button>
      </footer>
    </div>
  );
};

export default Footer;
