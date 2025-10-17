"use client"
import React from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  const contactInfo = [
    {
      icon: <HiMail className="text-2xl" />,
      title: "Email",
      value: "sumeetmapari@gmail.com",
      link: "mailto:sumeetmapari@gmail.com",
    },
    {
      icon: <HiLocationMarker className="text-2xl" />,
      title: "Location",
      value: "India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-8">
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
            Get In <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm open to freelance projects, remote opportunities, and full-time positions. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="text-indigo-400 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
              <p className="text-gray-400 mb-6">
                Have a project in mind? I'd love to hear about it and see how I can help bring your ideas to life.
              </p>
              <a
                href="mailto:sumeetmapari@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
              >
                <HiMail className="text-xl" />
                <span>Send Message</span>
              </a>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-full h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
              <div className="relative h-full flex items-center justify-center p-12 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                <div className="text-center space-y-6">
                  <div className="text-6xl">💬</div>
                  <h3 className="text-2xl font-bold text-white">Ready to Connect?</h3>
                  <p className="text-gray-400">
                    Drop me a message and let's discuss your next project
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
