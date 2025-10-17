"use client"
import React from "react";
import { motion } from "framer-motion";
import { HiCode, HiLightningBolt, HiSparkles } from "react-icons/hi";

const About = () => {
  const highlights = [
    {
      icon: <HiCode className="text-4xl" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and scalable code",
    },
    {
      icon: <HiLightningBolt className="text-4xl" />,
      title: "Fast Performance",
      description: "Optimizing for speed and user experience",
    },
    {
      icon: <HiSparkles className="text-4xl" />,
      title: "Modern Design",
      description: "Creating beautiful, intuitive interfaces",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-8 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate <span className="text-indigo-400 font-semibold">frontend developer</span> with expertise in modern web technologies. I specialize in building responsive, user-friendly applications that combine functionality with aesthetic design.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a strong foundation in <span className="text-indigo-400 font-semibold">React.js</span>, <span className="text-indigo-400 font-semibold">Next.js</span>, and <span className="text-indigo-400 font-semibold">TailwindCSS</span>, I transform creative ideas into smooth, interactive web experiences that users love.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently seeking opportunities to bring innovation and excellence to dynamic teams through freelance, remote, or full-time positions.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="text-indigo-400 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
