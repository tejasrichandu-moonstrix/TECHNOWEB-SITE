import React from "react";
import { motion } from "framer-motion";

const CEOMessage = () => {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto font-poppins">
        {/* Header Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-semibold text-gray-900 mb-14 text-center lg:text-left"
        >
          Our <span className="text-blue-500">CEO's</span> Message
        </motion.h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* CEO Image Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex-shrink-0"
          >
            <div className="relative group">
              <motion.img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                alt="CEO Portrait"
                className="w-full max-w-sm shadow-2xl rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: "4/5" }}
              />

              {/* Subtle glow animation */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Message Animation */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Dear
                <span className="text-gray-900 font-medium"> entrepreneurs</span>{" "}
                and <span className="text-gray-900 font-medium">Innovators,</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                At <span className="text-blue-600 font-semibold">Noviindus</span>, we’ve
                always believed that the best way to predict the future is to
                create it. Our journey isn’t just about writing code or delivering
                projects—it’s about empowering you, the bold entrepreneurs who dare
                to bring new solutions into the world. We live at the intersection
                of design and technology, crafting apps that are more than tools;
                they are bridges to your greatest aspirations.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                So, here’s my message to you: Trust in your ideas, even when the
                path ahead is uncertain. Have the audacity to build when others
                hesitate. Because true innovation doesn’t come from playing it safe;
                it comes from those who believe deeply in what they’re building.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="font-medium text-gray-900 text-xl italic"
              >
                Together, let’s not just build apps—let’s build the future.
              </motion.p>
            </div>

            {/* Signature Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="mt-10 pt-6 border-t border-gray-200"
            >
              <div className="text-gray-900 text-lg font-semibold mb-1">
                Jibin C — Founder | Chief Executive Officer
              </div>

              <div className="flex gap-6 text-sm mt-2">
                <a
                  href="#"
                  className="relative group text-black hover:text-blue-700 transition-colors"
                >
                  LinkedIn
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[1px] bg-blue-700 transition-all duration-500"></span>
                </a>
                <a
                  href="#"
                  className="relative group text-black hover:text-pink-600 transition-colors"
                >
                  Instagram
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[1px] bg-pink-600 transition-all duration-500"></span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
