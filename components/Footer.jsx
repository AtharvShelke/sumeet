import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => (
  <footer className="py-8 px-6 bg-gray-950 border-t border-gray-800">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by Sumeet Mapari
          </p>
          <p className="text-gray-500 text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/sumeetmapari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/sumeetmapari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
