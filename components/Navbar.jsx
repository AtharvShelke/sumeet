import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-gray-900 fixed w-full top-0 z-50 shadow-md">
    <h2 className="text-2xl font-bold text-indigo-400">Sumeet Mapari</h2>
    <ul className="hidden md:flex gap-8 text-lg">
      <li><a href="#about" className="hover:text-indigo-400">About</a></li>
      <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
      <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
    </ul>
    <div className="flex gap-4 text-2xl">
      <a href="https://github.com/sumeetmapari" target="_blank"><FaGithub /></a>
      <a href="https://linkedin.com/in/sumeetmapari" target="_blank"><FaLinkedin /></a>
    </div>
  </nav>
);

export default Navbar;
