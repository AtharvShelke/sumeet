import React from "react";

const projects = [
  {
    title: "CaseCobra",
    description: "Custom phone case e-commerce store built using React.js, Next.js, and TailwindCSS.",
    link: "https://casecobra.vercel.app",
  },
  {
    title: "Restaura",
    description: "Single-page restaurant website with modern UI animations using Framer Motion.",
    link: "https://restaura.vercel.app",
  },
  
   
];

const Projects = () => (
  <section id="projects" className="py-24 bg-gray-900 px-8 text-center">
    <h2 className="text-4xl font-bold mb-12 text-indigo-400">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((p, i) => (
        <div key={i} className="bg-gray-800 rounded-2xl p-6 hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
          <p className="text-gray-400 mb-4">{p.description}</p>
          <a href={p.link} target="_blank" className="text-indigo-400 font-medium hover:underline">
            Visit →
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
