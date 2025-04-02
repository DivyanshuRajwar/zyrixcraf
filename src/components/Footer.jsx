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
    { icon: FaWhatsapp, link: "https://wa.me/919711625392" }, // Proper WhatsApp link format
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/zyrixcraft-in-11b338359/",
    },
  ];
  return (
    <div id="footer" className="w-full">
      <footer className="bg-gray-100 py-[3.5em] font-[Poppins] relative">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-[5%] gap-[4em]">
          <div className="mb-[1.5em] md:mb-0 md:w-[30%]">
            <h1 className="text-[2.2em] font-bold mb-[1em] text-gray-900">
              We would love to hear from you.
            </h1>
            <p className="mb-[1em] text-[1.2em] text-gray-600">
              Feel free to reach out if you want to collaborate with us, or
              simply have a chat.
            </p>
            <button
              onClick={() => setOverlay(!overlayOn)}
              className="bg-[#4541f1] text-white font-semibold text-[1em] py-[0.8em] px-[1.5em] rounded-full shadow-lg hover:bg-blue-800 hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-in-out"
            >
              Become a Client
            </button>
            <p className="mt-[1.5em] text-[0.95em] text-gray-500">
              Don’t like the forms? Drop us a line via email.
            </p>
            <a
              href="mailto:zyrixcraft@gmail.com"
              className="text-[1em] text-gray-700 font-medium hover:text-blue-600"
            >
              Zyrixcraft@gmail.com
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-[4em] w-full md:w-[70%] gap-[4em]">
            <div className="w-[50%]">
              <h2 className="font-semibold text-[1.5em] text-gray-900 mb-[1em]">
                Contact us
              </h2>
              <p className="text-[1em] text-gray-600">
                Email:{" "}
                <a href="mailto:zyrixcraft@gmail.com" className="text-blue-600">
                  zyrixcraft@gmail.com
                </a>
              </p>
              <p className="text-[1em] text-gray-600">
                Phone:{" "}
                <span className="text-gray-700 font-medium">
                  +19 97116 25392
                </span>
              </p>
              <p className="text-[1em] text-gray-600">
                New Delhi - 110044, Near Union Bank aali village
              </p>
            </div>

            <div className="w-[30%]">
              <h2 className="font-semibold text-[1.5em] text-gray-900 mb-[1em]">
                Follow us
              </h2>
              <div className="flex flex-col space-y-[0.8em]">
                {socialLinks.map(({ icon: Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-[0.8em] text-gray-600 hover:text-gray-900 transition text-[1em] transform hover:scale-110"
                  >
                    <Icon className="text-[1.5em]" />
                    <span>{Icon.name.replace("Fa", "")}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="w-[30%]">
              <h2 className="font-semibold text-[1.5em] text-gray-900 mb-[1em]">
                Quick Links
              </h2>
              <ul className="text-[1em] space-y-[0.5em]">
                {[
                  "Home",
                  "Services",
                  "Portfolio",
                  "Latest Cases",
                  "Connect with us",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.replace(" ", "").toLowerCase()}`}
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
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
          className="absolute bottom-[1.5em] right-[1.5em] bg-[#4541f1] text-white font-semibold text-[1em] py-[0.8em] px-[1.5em] rounded-full shadow-lg hover:bg-blue-800 hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-in-out"
        >
          Back to Top ↑
        </button>
      </footer>
    </div>
  );
};

export default Footer;
