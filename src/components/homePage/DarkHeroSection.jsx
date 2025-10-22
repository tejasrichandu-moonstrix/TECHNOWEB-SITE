import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

const NUM_RECTANGLES = 50;
const ROTATABLE_CHANCE = 0.3;
const SCROLL_SPEED_FACTOR = 0.6;

const DarkHeroSection = () => {
  const rectanglesInnerRef = useRef(null);
  const heroContainerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [typedLines, setTypedLines] = useState([]);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const rafId = useRef(null);
  const typeIntervalRef = useRef(null);

  const blueIndicesRef = useRef(
    Array.from({ length: NUM_RECTANGLES }).map(() => Math.random() < ROTATABLE_CHANCE)
  );

  const lines = [
    "Build Stronger Customer Relationships",
    "Simplify Interactions & Gain Valuable Insights",
    "with Keenect Customer Relations Management Software"
  ];

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroContainerRef.current) {
      observer.observe(heroContainerRef.current);
    }

    return () => {
      if (heroContainerRef.current) {
        observer.unobserve(heroContainerRef.current);
      }
    };
  }, [hasAnimated]);

  // Typewriter effect - runs only once when section comes into view
  useEffect(() => {
    if (!isInView || hasAnimated === false) return;

    let currentLineText = "";
    let lineIndex = 0;
    let charIndex = 0;

    typeIntervalRef.current = setInterval(() => {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          currentLineText += lines[lineIndex][charIndex];
          setTypedLines(prev => {
            const updated = [...prev];
            updated[lineIndex] = currentLineText;
            return updated;
          });
          charIndex++;
        } else {
          // Line complete, move to next
          setCurrentLineIndex(lineIndex + 1);
          lineIndex++;
          currentLineText = "";
          charIndex = 0;
          
          if (lineIndex >= lines.length) {
            setIsTypingComplete(true);
            clearInterval(typeIntervalRef.current);
          }
        }
      }
    }, 40);

    return () => {
      if (typeIntervalRef.current) {
        clearInterval(typeIntervalRef.current);
      }
    };
  }, [isInView, hasAnimated]);

  const handleScroll = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (rectanglesInnerRef.current) {
        const scrollY = window.scrollY;
        const innerWidth = rectanglesInnerRef.current.scrollWidth / 2;
        let newTranslateX = -(scrollY * SCROLL_SPEED_FACTOR);
        newTranslateX = newTranslateX % innerWidth;
        setTranslateX(newTranslateX);
      }
      rafId.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  const renderRectangles = () => {
    const scrollY = window.scrollY;
    return Array.from({ length: NUM_RECTANGLES }).map((_, index) => {
      const isBlue = blueIndicesRef.current[index];
      const baseSpeed = 0.15;
      const speedVariation = (index % 5) * 0.03;
      const rotation = (scrollY * (baseSpeed + speedVariation)) % 360;

      return (
        <div
          key={index}
          className={`rectangle ${isBlue ? "blueRectangle" : ""}`}
          style={{
            transform: `rotateY(${rotation}deg)`,
          }}
        ></div>
      );
    });
  };

  const renderTypedLines = () => {
    return typedLines.map((line, index) => {
      const lineClass = index === 0 ? "heroLine1" : "heroLine2";
      const isComplete = index < currentLineIndex;
      const isCurrentLine = index === currentLineIndex;
      
      return (
        <span 
          key={index} 
          className={`heroLine ${lineClass} typed-line`}
          style={{
            animation: `fadeUpTypewriter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
            animationDelay: `${index * 0.15}s`,
            opacity: 0,
            display: 'block'
          }}
        >
          {line}
          {isCurrentLine && !isComplete && (
            <span className="cursor">|</span>
          )}
        </span>
      );
    });
  };

  const containerTransition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] };
  const lineTransition = (i) => ({ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.18 + i * 0.18 });

  return (
    <motion.div
      ref={heroContainerRef}
      className="heroContainer"
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.92, y: 18 }}
      transition={containerTransition}
    >
      {/* Animated gradient overlay */}
      <div className="gradient-overlay" />
      
      {/* Floating particles */}
      <div className="particles-container">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
        <div className="particle particle-5" />
      </div>

      {/* Background Rectangles */}
      <div className="rectanglesContainer">
        <div
          ref={rectanglesInnerRef}
          className="rectanglesInner"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {renderRectangles()}
          {renderRectangles()}
        </div>
      </div>

      {/* Hero Content */}
      <main className="heroMainContent">
        <motion.h1
          className="heroMainHeading"
          initial={{ scale: 1 }}
          animate={isInView ? { scale: 1.02 } : { scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {isInView && typedLines.length > 0 ? (
            // Render typed lines but animate their entrance with framer-motion for smoother transitions
            typedLines.map((line, idx) => (
              <motion.span
                key={idx}
                className={`heroLine ${idx === 0 ? 'heroLine1' : 'heroLine2'} typed-line`}
                initial={{ opacity: 0, y: 28 }}
                animate={line ? { opacity: 1, y: 0 } : {}}
                transition={lineTransition(idx)}
                style={{ display: 'block' }}
              >
                {line}
                {idx === currentLineIndex && !isTypingComplete && (
                  <span className="cursor">|</span>
                )}
              </motion.span>
            ))
          ) : (
            // Fallback static lines with motion entrance
            [
              'Build Stronger Customer Relationships',
              'Simplify Interactions & Gain Valuable Insights',
              'with Keenect Customer Relations Management Software'
            ].map((text, i) => (
              <motion.span
                key={i}
                className={`heroLine ${i === 0 ? 'heroLine1' : 'heroLine2'}`}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={lineTransition(i)}
                style={{ display: 'block' }}
              >
                {text}
              </motion.span>
            ))
          )}
        </motion.h1>

        <motion.button
          className="heroTryItOutButton"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 0.95, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(66,133,244,0.18)' }}
          whileTap={{ scale: 0.98 }}
        >
          BECOME A CLIENT
          <motion.span
            style={{ display: 'inline-flex', marginLeft: 8 }}
            whileHover={{ x: 6 }}
            transition={{ duration: 0.28 }}
          >
            <ArrowRight size={16} />
          </motion.span>
        </motion.button>
      </main>

      {/* Styles in same file */}
      <style>{`
        .heroContainer {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          color: white;
          background: linear-gradient(135deg, #1a1a1a 0%, #222222 50%, #2a2a2a 100%);
          overflow-x: hidden;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(66, 133, 244, 0.1) 0%, transparent 50%);
          pointer-events: none;
          animation: pulse-gradient 8s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes pulse-gradient {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgb(66, 133, 244);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(66, 133, 244, 0.8);
          animation: float-particle 15s ease-in-out infinite;
        }

        .particle-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .particle-2 {
          top: 60%;
          left: 80%;
          animation-delay: 3s;
        }

        .particle-3 {
          top: 40%;
          left: 60%;
          animation-delay: 6s;
        }

        .particle-4 {
          top: 80%;
          left: 30%;
          animation-delay: 9s;
        }

        .particle-5 {
          top: 30%;
          left: 90%;
          animation-delay: 12s;
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.6;
          }
          50% {
            transform: translate(50px, -100px);
          }
        }

        .heroMainContent {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;
          line-height: 1.2;
          position: relative;
          z-index: 1;
          overflow-x:hidden;
        }

        .heroMainHeading {
          font-weight: 400;
          letter-spacing: 0.025em;
          margin-bottom: 0.5rem;
          min-height: 250px;
        }

        .heroLine {
          display: block;
          margin-bottom: 0.5rem;
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUpTypewriter {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          50% {
            opacity: 0.5;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .typed-line {
          position: relative;
        }

        .heroLine1 {
          font-size: 60px;
          color: white;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
        }
        
        .heroLine2 {
          font-size: 2.25rem;
          color: rgb(66, 133, 244);
          text-shadow: 0 0 20px rgba(66, 133, 244, 0.3);
        }

        .cursor {
          animation: blinkCursor 1s infinite;
          color: rgb(66, 133, 244);
          margin-left: 2px;
          font-weight: 700;
        }

        @keyframes blinkCursor {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .heroTryItOutButton {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          width: fit-content;
          background-color: transparent;
          border: 2px solid white;
          color: white;
          border-radius: 0.25rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 2rem;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.8s;
        }

        .heroTryItOutButton::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(66, 133, 244, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .heroTryItOutButton:hover::before {
          left: 100%;
        }

        .heroTryItOutButton:hover {
          background: linear-gradient(135deg, rgb(66, 133, 244), rgb(45, 108, 223));
          color: white;
          border-color: rgb(66, 133, 244);
          box-shadow: 0 0 20px rgba(66, 133, 244, 0.6), 0 0 40px rgba(66, 133, 244, 0.3);
          transform: scale(1.05) translateY(-2px);
        }

        /* Rectangles background */
        .rectanglesContainer {
          position: absolute;
          bottom: 40px;
          left: 0;
          width: 100%;
          height: 30%;
          overflow: hidden;
          z-index: 0;
          /* mask removed to prevent transparent band revealing page background during transforms */
          -webkit-mask-image: none;
          mask-image: none;
        }

        .rectanglesInner {
          display: flex;
          height: 100%;
          will-change: transform;
        }

        .rectangle {
          width: 80px;
          height: 100%;
          margin: 0 2px;
          background: linear-gradient(180deg, rgba(44, 44, 44, 0.85) 0%, rgba(34, 34, 34, 0.85) 100%);
          box-shadow: 
            inset 0 0 10px rgba(255, 255, 255, 0.2),
            inset 0 0 5px rgba(0, 0, 0, 0.1),
            0 2px 8px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: all 0.3s ease-out;
        }

        .blueRectangle {
          border: 2px solid rgb(66, 133, 244);
          background: linear-gradient(180deg, rgba(66, 133, 244, 0.2) 0%, rgba(34, 34, 34, 0.85) 100%);
          box-shadow: 
            inset 0 0 15px rgba(66, 133, 244, 0.4),
            0 0 20px rgba(66, 133, 244, 0.5);
          animation: glow-pulse 2s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 
              inset 0 0 15px rgba(66, 133, 244, 0.4),
              0 0 20px rgba(66, 133, 244, 0.5);
          }
          50% {
            box-shadow: 
              inset 0 0 20px rgba(66, 133, 244, 0.6),
              0 0 30px rgba(66, 133, 244, 0.7);
          }
        }

        @media (max-width: 767px) {
          .heroLine1, .heroLine2 {
            font-size: 1.5rem;
          }
          .heroMainHeading {
            min-height: 150px;
          }
        }

        @media (min-width: 480px) and (max-width: 639px) {
          .heroLine1, .heroLine2 {
            font-size: 1.8rem;
          }
          .heroMainHeading {
            min-height: 180px;
          }
        }

        @media (min-width: 640px) {
          .heroLine1, .heroLine2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default DarkHeroSection;