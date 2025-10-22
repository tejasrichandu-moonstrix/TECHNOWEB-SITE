import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

const Typewriter = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

const Contact = () => {
  const [buttonHovered, setButtonHovered] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const lineControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      lineControls.start({ width: "100%" });
    }
  }, [isInView, lineControls]);

  const paragraphText =
    "We're a team of passionate designers and thinkers who love transforming bold ideas into powerful digital experiences...";

  return (
    <div className="bg-gray-50">
      {/* Call to Action Section */}
      <div ref={ref} className="bg-[#232325] rounded-3xl mx-6 mb-8">
        <div className="max-w-6xl mx-auto px-8 py-12">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-8">
            {/* Left Content */}
            <div className="lg:flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-white text-sm font-medium tracking-wider uppercase mb-2"
              >
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  LET'S TALK
                </motion.span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-[#3B82F6]"
              >
                <Typewriter text="Got a project?" speed={50} />
              </motion.h2>
            </div>

            {/* Right CTA Button */}
            <div className="lg:flex lg:items-center lg:ml-auto w-full lg:w-auto">
              <div className="flex items-center w-full lg:w-auto">
                <motion.button
                  className="group bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3"
                  onHoverStart={() => setButtonHovered(true)}
                  onHoverEnd={() => setButtonHovered(false)}
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  Contact Us
                  <motion.span
                    animate={{ x: buttonHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Horizontal Line - Animated */}
          <motion.div
            initial={{ width: 0 }}
            animate={lineControls}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-px bg-gray-600 mb-6"
          />

          {/* Paragraph Section - Typewriter Animation */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              <Typewriter text={paragraphText} speed={20} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;