import About from "@/components/About";
import Certifications from "@/components/Certifications"; // Add this
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications /> {/* Add here */}
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
