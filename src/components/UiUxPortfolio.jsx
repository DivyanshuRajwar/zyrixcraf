import React from "react";
import { motion } from "framer-motion";

import phone1 from "../assets/phn1.webp";
import phone2 from "../assets/phn2.webp";
import iphone3 from "../assets/iphone01.jpg";
import phone4 from "../assets/02.jpg";

const AnimatedImage = ({ src, alt, size }) => (
  <motion.img
    src={src}
    alt={alt}
    className={`object-cover rounded-3xl shadow-2xl transition-all duration-500 ${size}`}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
);
// useEffect(() => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }, []);

const UiUxPortfolio = () => {
  return (
    <div className="w-full  min-h-screen bg-black text-white overflow-hidden">
      <header className="flex flex-col items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="inline-block"
        >
          <h1 className="text-7xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            UI/UX Portfolio
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-lg text-gray-400 mt-4 max-w-2xl text-center"
        >
          A showcase of innovative, user-friendly, and visually stunning digital
          designs optimized for cross-platform compatibility.
        </motion.p>
      </header>

      {/* Section 1 */}
      <section className="h-screen flex flex-col items-center">
        <div className="w-5/6 flex items-center justify-between p-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-left w-1/2"
          >
            <h2 className="text-5xl font-bold text-blue-400">
              Cross-Platform Compatibility
            </h2>
            <p className="text-lg text-gray-300 mt-6">
              Our designs seamlessly adapt to mobile, tablet, and desktop,
              ensuring an immersive user experience across all devices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="flex gap-10"
          >
            <motion.img
              src={phone2}
              alt="Mobile Design 1"
              className="h-[550px] w-[350px] object-cover rounded-3xl shadow-2xl transition-all duration-300"
              animate={{ y: [0, -100, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
              src={phone1}
              alt="Laptop"
              className="h-[510px] w-[400px] object-cover rounded-3xl shadow-2xl transition-all duration-300"
              animate={{ y: [0, -80, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="h-screen flex flex-col items-center mt-10">
        <div className="w-5/6 flex items-center justify-between p-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <AnimatedImage
              src={phone4}
              alt="Online Platform UI"
              size="h-[600px] w-[300px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-left w-1/2"
          >
            <h2 className="text-5xl font-bold text-purple-400">
              Powerful Online Experiences
            </h2>
            <p className="text-lg text-gray-300 mt-6">
              Transforming digital landscapes with intuitive and visually
              engaging designs tailored to modern users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="h-screen flex flex-col items-center mt-10">
        <div className="w-5/6 flex items-center justify-between p-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-left w-1/2"
          >
            <h2 className="text-5xl font-bold text-purple-400">
              Interactive UI/UX Design
            </h2>
            <p className="text-lg text-gray-300 mt-6">
              Enhancing engagement with smooth animations, responsive layouts,
              and dynamic user interactions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <AnimatedImage
              src={iphone3}
              alt="Interactive UI"
              size="h-[500px] w-[280px]"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UiUxPortfolio;
