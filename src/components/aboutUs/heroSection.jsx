import React, { useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";

const CounterNumber = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 60);
    let animationFrameId;

    const animate = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function AboutUsHero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const buttonHoverVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-gray-50 py-16 px-6 lg:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2 
          variants={itemVariants}
          className="text-5xl text-slate-900 mt-20"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#3B82F6] inline-block"
          >
            About
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="inline-block ml-2"
          >
            Us
          </motion.span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-xl font-semibold text-[#435479]"
        >
          Elevate Your Business to the Next Level with TechnoWeb
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-[#435479] font-poppins max-w-3xl mx-auto"
        >
          We believe in the power of shared success, because Together, We Grow.
          Partnering with a premium IT solutions provider is essential for any
          business aiming for real growth. Share your current business profile
          and your biggest challenges or goals. We look forward to providing you
          with the key insights and strategies needed to elevate your business
          to a premium level, all on a cost-effective basis.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonHoverVariants}
            className="px-6 py-2 rounded-lg border border-[#3B82F6] text-[#3B82F6] font-medium hover:bg-blue-50 transition relative overflow-hidden group"
          >
            <span className="relative z-10">Read More →</span>
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-blue-50 z-0"
            />
          </motion.button>
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonHoverVariants}
            className="px-6 py-2 rounded-lg bg-[#3B82F6] text-white font-medium hover:bg-blue-700 transition relative overflow-hidden group"
          >
            <span className="relative z-10">Get Company Profile →</span>
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-blue-700 z-0"
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Image + Stats */}
      <motion.div 
        variants={itemVariants}
        className="mt-16 flex justify-center"
      >
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Left: Image */}
          <motion.div
            variants={imageVariants}
            className="overflow-hidden rounded-xl shadow-md h-[60vh] relative"
          >
            <motion.img
              initial={{ scale: 1.2 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1 }}
              src="https://i.postimg.cc/HLX9pMf5/Rectangle-42.png"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 bg-blue-600 origin-left"
            />
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            variants={statsVariants}
            className="bg-[#435479] rounded-xl shadow-md text-center divide-y divide-black w-60 lg:w-64"
          >
            <motion.div
              variants={itemVariants}
              className="py-6"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-3xl font-bold text-white"
              >
                <CounterNumber target={5} duration={2} />+
              </motion.h3>
              <p className="text-white mt-1">Years Of Experience</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="py-6"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-3xl font-bold text-white"
              >
                <CounterNumber target={80} duration={2} />+
              </motion.h3>
              <p className="text-white mt-1">Projects Completed</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="py-6"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="text-3xl font-bold text-white"
              >
                <CounterNumber target={7} duration={2} />+
              </motion.h3>
              <p className="text-white mt-1">Countries Served</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}