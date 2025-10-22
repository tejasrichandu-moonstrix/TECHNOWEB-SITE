// src/components/aboutUs/Certificates.jsx
import React from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  const certifications = [
    { id: 1, name: "ISO 27001", img: "https://i.postimg.cc/ZqLMzfBh/Screenshot-2025-09-12-at-3-39-45-AM-2.png" },
    { id: 2, name: "ISO 27002", img: "https://i.postimg.cc/ZqLMzfBh/Screenshot-2025-09-12-at-3-39-45-AM-2.png" },
    { id: 3, name: "ISO 27003", img: "https://i.postimg.cc/ZqLMzfBh/Screenshot-2025-09-12-at-3-39-45-AM-2.png" },
    { id: 4, name: "ISO 27004", img: "https://i.postimg.cc/ZqLMzfBh/Screenshot-2025-09-12-at-3-39-45-AM-2.png" },
    { id: 5, name: "ISO 27005", img: "https://i.postimg.cc/ZqLMzfBh/Screenshot-2025-09-12-at-3-39-45-AM-2.png" },
  ];

  // Duplicate the list to create a continuous loop effect
  const duplicatedCerts = [...certifications, ...certifications];

  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 font-poppins">
        {/* Header with entrance animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12"
        >
          Our <span className="text-blue-500">Certifications</span>
        </motion.h2>

        {/* Continuous Scrolling Row */}
        <motion.div
          className="flex gap-12 items-center"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedCerts.map((cert, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center flex-shrink-0 group"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.img
                src={cert.img}
                alt={cert.name}
                className="w-24 h-32 object-contain p-2 transition-transform duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              />
              <p className="mt-3 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                {cert.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient fade edges for aesthetics */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Certificates;
