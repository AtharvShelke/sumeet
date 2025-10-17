"use client"
import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-bold mb-4"
    >
      Hi, I'm <span className="text-indigo-400">Sumeet Mapari</span>
    </motion.h1>
    <p className="text-gray-400 max-w-xl mb-6">
      A passionate <strong>Frontend Developer</strong> specializing in crafting modern, interactive, and responsive web experiences.
    </p>
    <a href="#projects" className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold">
      View My Work
    </a>
  </section>
);

export default Hero;
