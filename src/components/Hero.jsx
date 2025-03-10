import React from "react";
import { motion } from "framer-motion";
import {Telescope } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative  flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-b from-black via-purple-950/40 to-black">
      {/* Content */}
      <div className="max-w-3xl">
        <motion.h1
          className="text-4xl font-main md:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          DVS College
          <br />
          <span className="text-transparent font-display bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Cultural Fest 2025
          </span>
        </motion.h1>

      

        {/* Tagline */}
        <motion.p
          className="mt-4 text-lg text-purple-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Ignite the Spirit! A celebration of talent, creativity, and culture.
        </motion.p>

        {/* Register Button */}
        <motion.div
          className="mt-6 cursor-pointer flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
        <a href="#events">
        <button className=" flex justify-center items-center gap-2 px-6 py-3 font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:scale-105 transition">
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Telescope className="h-5 w-5" />
            </motion.div>
           Explore Events
   
          </button>
        </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
