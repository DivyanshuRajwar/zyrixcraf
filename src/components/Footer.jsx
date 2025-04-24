import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

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
    <footer id="footer"  className="w-screen bg-white   flex justify-center  items-center font-[Poppins] relative z-0 pt-[80px]">
      {/* Mobile Version */}
      <div id="footer" className="md:hidden p-6 flex flex-col space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            We would love to hear from you.
          </h2>
          <p className="text-gray-600 mb-4">
            Feel free to reach out if you want to collaborate with us, or simply
            have a chat.
          </p>

          <button
            onClick={() => setOverlay(!overlayOn)}
            className="bg-[#4541f1] w-full text-white font-semibold text-[1em] py-[0.8em] px-[1.5em] rounded-full shadow-lg mb-4 hover:bg-blue-800 hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-in-out"
          >
            Become a Client
          </button>

          <p className="text-gray-500 mb-1">
            Don't like forms? Drop us a line via email.
          </p>
          <p className="text-gray-700 font-medium hover:text-blue-600">
            Zyrixcraft@gmail.com
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Contact us
          </h3>

          <div className="space-y-3">
            <p>
              <span className="text-gray-600">Email:</span>{" "}
              <a href="mailto:zyrixcraft@gmail.com" className="text-blue-600">
                zyrixcraft@gmail.com
              </a>
            </p>
            <p>
              <span className="text-gray-600">Phone:</span>{" "}
              <a href="tel:+91971162539" className="text-blue-600">
                +91 97116 25392
              </a>
            </p>
            <p className="text-gray-600">
              New Delhi - 110044, Near Union Bank aali village
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow us</h3>
              <div className="space-y-2">
                {socialLinks.map((item, index) => (
                  <p key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-gray-600 flex items-center"
                    >
                      <item.icon className="mr-2" />
                      {item.icon === FaInstagram
                        ? "Instagram"
                        : item.icon === FaGithub
                        ? "GitHub"
                        : item.icon === FaWhatsapp
                        ? "WhatsApp"
                        : item.icon === FaLinkedin
                        ? "LinkedIn"
                        : ""}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <p>
                  <a href="#" onClick={(e) => {
                      e.preventDefault(); 
                      document
                        .getElementById("home")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }} className="text-gray-600">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#" onClick={(e) => {
                      e.preventDefault(); 
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }} className="text-gray-600">
                    Services
                  </a>
                </p>
                <p>
                  <a href="#" onClick={(e) => {
                      e.preventDefault(); 
                      document
                        .getElementById("portfolio")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }} className="text-gray-600">
                    Portfolio
                  </a>
                </p>
                <p>
                  <a href="#" onClick={(e) => {
                      e.preventDefault(); 
                      document
                        .getElementById("cases")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }} className="text-gray-600">
                    Latest Case
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div id="footer" className="hidden lg:hidden md:block py-12 px-8 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              We would love to hear from you.
            </h1>
            <p className="text-gray-600 mb-6">
              Feel free to reach out if you want to collaborate with us, or
              simply have a chat.
            </p>
            <button
              onClick={() => setOverlay(!overlayOn)}
              className="bg-[#4541f1] text-white font-semibold text-[1em] py-3 px-6 rounded-full mb-6 shadow-lg hover:bg-blue-800 hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-in-out"
            >
              Become a Client
            </button>
          </div>

          <div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-900">
                  Contact us
                </h2>
                <div className="space-y-3">
                  <p>
                    <span className="text-gray-600">Email:</span>{" "}
                    <a
                      href="mailto:zyrixcraft@gmail.com"
                      className="text-gray-600"
                    >
                      zyrixcraft@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="text-gray-600">Phone:</span>{" "}
                    <a href="tel:+91971162539" className="text-gray-600">
                      +91 97116 25392
                    </a>
                  </p>
                  <p className="text-gray-600 max-w-xs">
                    New Delhi - 110044, Near Union Bank aali village
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-900">
                  Quick Links
                </h2>
                <div className="space-y-3">
                  <p>
                    <a
                      href="#home" // fallback for accessibility
                      onClick={(e) => {
                        e.preventDefault(); // prevent default anchor jump
                        document
                          .getElementById("home")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      Home
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      Services
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      Portfolio
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      Latest Cases
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                Follow us
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition text-sm transform hover:scale-105"
                  >
                    <span className="mr-2">
                      <item.icon />
                    </span>
                    <a href={item.link} target="_blank" className="text-gray-600">
                      {item.icon === FaInstagram
                        ? "Instagram"
                        : item.icon === FaGithub
                        ? "GitHub"
                        : item.icon === FaWhatsapp
                        ? "WhatsApp"
                        : item.icon === FaLinkedin
                        ? "LinkedIn"
                        : ""}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex justify-between text-gray-600 relative">
          <p>© 2025 Zyrixcraft. All rights reserved.</p>
          <button
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="absolute bottom-[1.5em] right-[1.5em] bg-[#4541f1] text-white font-semibold text-[1em] py-[0.8em] px-[1.5em] rounded-full shadow-lg hover:bg-blue-800 hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-in-out"
          >
            Back to Top <span className="ml-1">↑</span>
          </button>
        </div>
      </div>

      {/* Desktop Version */}
      <div id="footer" className="hidden lg:block mb-[5em]  ">
        <div className="w-[80em] flex justify-between mb-16  ">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              We would love to hear from you.
            </h1>
            <p className="text-gray-600 mb-6 text-xl ">
              Feel free to reach out if you want to collaborate with us, or
              simply have a chat.
            </p>
            <button
              onClick={() => setOverlay(!overlayOn)}
              className="bg-[#4541f1] text-white font-semibold text-[1em] py-3 px-8 rounded-full mb-6 shadow-lg hover:bg-blue-800 hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-in-out"
            >
              Become a Client
            </button>
          </div>

          <div className="flex space-x-20">
            <div>
              <h2 className="text-xl font-bold mb-6 text-gray-900">
                Contact us
              </h2>
              <div className="space-y-4">
                <p>
                  <span className="text-gray-600">Email:</span>{" "}
                  <a
                    href="mailto:zyrixcraft@gmail.com"
                    className="text-gray-600"
                  >
                    zyrixcraft@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-gray-600">Phone:</span>{" "}
                  <a href="tel:+91971162539" className="text-gray-600">
                    +91 97116 25392
                  </a>
                </p>
                <p className="text-gray-600 max-w-xs">
                  New Delhi - 110044, Near Union Bank aali village
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-6 text-gray-900">
                Follow us
              </h2>
              <div className="space-y-4">
                {socialLinks.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-[0.8em] text-gray-600 hover:text-gray-900 transition text-[1em] transform hover:scale-110"
                  >
                    <span className="mr-2">
                      <item.icon />
                    </span>
                    <a href={item.link} target="_blank" className="text-gray-600">
                      {item.icon === FaInstagram
                        ? "Instagram"
                        : item.icon === FaGithub
                        ? "GitHub"
                        : item.icon === FaWhatsapp
                        ? "WhatsApp"
                        : item.icon === FaLinkedin
                        ? "LinkedIn"
                        : ""}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
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
                    className="text-gray-600 hover:text-gray-900 transition"
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
                    className="text-gray-600 hover:text-gray-900 transition"
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
                    className="text-gray-600 hover:text-gray-900 transition"
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
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    Latest Cases
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200  flex justify-between text-gray-600">
          <p className="text-[17px] mt-[2em]">
            © 2025 Zyrixcraft. All rights reserved.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="absolute bottom-[4.5em] right-[2.5em] bg-[#4541f1] text-white font-semibold text-[1em] py-[0.8em] px-[1.5em] rounded-full shadow-lg hover:bg-blue-800 hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-in-out"
          >
            Back to Top <span className="ml-1">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
