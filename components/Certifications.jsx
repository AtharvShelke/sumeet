"use client"
import React from "react";
import { motion } from "framer-motion";
import { HiCheckCircle, HiExternalLink, HiCalendar } from "react-icons/hi";
import { SiReact, SiJavascript, SiMongodb, SiAmazon, SiGoogle } from "react-icons/si";

const certifications = [
  {
    name: "React JS Developer Certification",
    issuer: "EdChart / Credly",
    date: "2024",
    icon: <SiReact className="text-4xl text-cyan-400" />,
    verificationLink: "https://credly.com/badges/your-badge-id",
    skills: ["React", "JSX", "Hooks", "State Management"],
    status: "Active",
  },
  {
    name: "Full Stack Web Development",
    issuer: "Coursera",
    date: "2023",
    icon: <SiJavascript className="text-4xl text-yellow-400" />,
    verificationLink: "#",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB"],
    status: "Active",
  },
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: <SiAmazon className="text-4xl text-orange-400" />,
    verificationLink: "#",
    skills: ["Cloud Computing", "AWS", "DevOps"],
    status: "Active",
  },
  {
    name: "Google UX Design Certificate",
    issuer: "Google",
    date: "2023",
    icon: <SiGoogle className="text-4xl text-blue-400" />,
    verificationLink: "#",
    skills: ["UX Design", "Figma", "User Research"],
    status: "Active",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-8">
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
            Certifications & <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Verified credentials showcasing my commitment to continuous learning and professional development
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                <HiCheckCircle className="text-green-400 text-sm" />
                <span className="text-green-400 text-xs font-medium">{cert.status}</span>
              </div>

              {/* Icon */}
              <div className="mb-4 flex items-center gap-4">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <HiCalendar className="text-indigo-400" />
                <span>Issued {cert.date}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Verification Link */}
              <a
                href={cert.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors duration-300 group/link"
              >
                <span>Verify Certificate</span>
                <HiExternalLink className="text-lg group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { number: certifications.length, label: "Certifications" },
            { number: "100%", label: "Verified" },
            { number: new Set(certifications.flatMap(c => c.skills)).size, label: "Skill Areas" },
            { number: "2023+", label: "Since" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700/30"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
