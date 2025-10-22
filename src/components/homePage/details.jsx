import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CountUpAnimation = ({ end, duration = 2, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        if (progress < 1) {
          const currentCount = Math.floor(progress * end);
          setCount(currentCount);
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Card = ({ title, content, children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="bg-black p-4 sm:p-5 md:p-6 rounded-xl shadow-xl border border-gray-800 md:hover:border-blue-500/50 md:hover:shadow-2xl md:hover:shadow-blue-500/20 transition-all duration-300"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-500 leading-tight">
        {title}
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed mb-4 sm:mb-5">
        {content}
      </p>
      {children}
    </motion.div>
  );
};

const Details = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.15,
        delayChildren: isMobile ? 0.1 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
        ease: "easeOut"
      },
    },
  };

  const scrollStyle = `
    .scroll-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
    
    .scroll-content {
      display: flex;
      gap: 1rem;
      width: max-content;
    }
    
    /* Mobile: horizontal scrolling */
    @media (max-width: 767px) {
      .scroll-wrapper {
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
        scrollbar-width: thin;
        scrollbar-color: rgba(59, 130, 246, 0.6) rgba(255, 255, 255, 0.05);
        padding-bottom: 8px;
      }
      
      .scroll-wrapper::-webkit-scrollbar {
        height: 6px;
      }
      
      .scroll-wrapper::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        margin: 0 10px;
      }
      
      .scroll-wrapper::-webkit-scrollbar-thumb {
        background: rgba(59, 130, 246, 0.6);
        border-radius: 10px;
      }
      
      .scroll-wrapper::-webkit-scrollbar-thumb:hover {
        background: rgba(59, 130, 246, 0.8);
      }
      
      .scroll-content {
        gap: 0.75rem;
        padding: 0 0.5rem;
      }
    }
    
    /* Desktop: auto-scroll animation */
    @media (min-width: 768px) {
      .scroll-content {
        gap: 1.5rem;
        animation: scroll 30s linear infinite;
      }
      
      .scroll-content:hover {
        animation-play-state: paused;
      }
      
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    }
  `;

  const techStacks = [
    { name: "Android", url: "https://i.postimg.cc/r0qf6w1R/Android.png" },
    { name: "PostgreSQL", url: "https://i.postimg.cc/wyxQfbzh/Group-168.png" },
    { name: "Firebase", url: "https://i.postimg.cc/KK2NL8sp/devicon-firebase-wordmark.png" },
    { name: "AWS", url: "https://i.postimg.cc/w7nFqV5p/AWS.png" },
    { name: "React", url: "https://i.postimg.cc/NyqN44L4/Group-169.png" },
    { name: "jQuery", url: "https://i.postimg.cc/3JYmB9Pp/jQuery.png" },
    { name: "VS Code", url: "https://i.postimg.cc/d0L9WR2C/VSCode.png" },
    { name: "Adobe XD", url: "https://i.postimg.cc/2yh5jBzv/AdobeXD.png" },
    { name: "PHP", url: "https://i.postimg.cc/Zq9vhj6c/PHP.png" },
    { name: "Figma", url: "https://i.postimg.cc/K8sD6ksy/Figma.png" },
    { name: "Jira", url: "https://i.postimg.cc/MKdWprTY/Jira.png" },
    { name: "GitHub", url: "https://i.postimg.cc/c4jmcV9K/GitHub.png" },
    { name: "Python", url: "https://i.postimg.cc/cHkF6RHF/Python.png" },
    { name: "Node.js", url: "https://i.postimg.cc/tgXj4V2t/Nodejs.png" },
    { name: "npm", url: "https://i.postimg.cc/6qX4V8c1/npm.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-16 md:pt-20 lg:pt-24">
      <div className="px-3 py-4 sm:px-5 sm:py-6 md:px-6 md:py-8 lg:px-10 lg:py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Cards Container */}
          <div className="space-y-4 sm:space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-5 lg:gap-6">
            
            {/* Global Reach Card */}
            <Card
              title="Global Reach and Project Success"
              content="Discover our success: numerous projects in multiple countries, serving a diverse and growing clientele."
              delay={0}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="grid grid-cols-3 gap-2 sm:gap-3"
              >
                {[
                  { end: 100, label: "Projects Completed" },
                  { end: 4, label: "Years Experience" },
                  { end: 5, label: "Countries Served" },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className="text-center p-2 sm:p-3 md:p-4 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700"
                  >
                    <p className="text-blue-400 text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                      <CountUpAnimation end={stat.end} duration={2} suffix="+" />
                    </p>
                    <p className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs font-medium leading-tight">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </Card>

            {/* Methodologies Card */}
            <Card
              title="Methodologies We Use"
              content="We employ industry-leading methodologies to ensure optimal results."
              delay={isMobile ? 0 : 0.1}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6"
              >
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center gap-2 p-3 sm:p-4 md:p-5 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 flex-1 max-w-[140px]"
                >
                  <img
                    src="https://i.postimg.cc/CBS4M3Sb/Group-177.png"
                    alt="Design Thinking"
                    className="w-12 h-10 sm:w-14 sm:h-12 md:w-16 md:h-14 object-contain"
                    loading="lazy"
                  />
                  <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm font-medium text-center">
                    Design Thinking
                  </p>
                </motion.div>
                
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center gap-2 p-3 sm:p-4 md:p-5 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 flex-1 max-w-[140px]"
                >
                  <img
                    src="https://i.postimg.cc/DJ6PSxwH/Group-178.png"
                    alt="Scrum"
                    className="w-10 h-14 sm:w-12 sm:h-16 md:w-14 md:h-18 object-contain"
                    loading="lazy"
                  />
                  <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm font-medium text-center">
                    Scrum
                  </p>
                </motion.div>
              </motion.div>
            </Card>

            {/* Tech Stack Card - Full Width */}
            <div className="md:col-span-2">
              <Card
                title="Stacks We Use"
                content="We leverage a comprehensive and modern technology stack, utilizing cutting-edge tools and platforms to deliver high performance, scalability, and reliability in all our projects."
                delay={isMobile ? 0 : 0.2}
              >
                <style>{scrollStyle}</style>
                
                <div className="scroll-wrapper">
                  <motion.div
                    className="scroll-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                  >
                    {/* Duplicate for seamless loop on desktop */}
                    {(isMobile ? techStacks : [...techStacks, ...techStacks]).map((stack, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 md:hover:border-blue-500/50 md:hover:shadow-lg md:hover:shadow-blue-500/20 transition-all"
                      >
                        <img
                          src={stack.url}
                          alt={stack.name}
                          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                
                {/* Mobile scroll hint */}
                {isMobile && (
                  <div className="text-center mt-4">
                    <p className="text-gray-500 text-xs">← Swipe to see more →</p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements - Hidden on mobile for better performance */}
      <div className="hidden md:block fixed top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ transform: 'translate(40%, -40%)' }} />
      <div className="hidden md:block fixed bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ transform: 'translate(-40%, 40%)' }} />
    </div>
  );
};

export default Details;

