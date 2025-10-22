import React, { useState, useEffect, useRef } from 'react';

const DevelopmentPhases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);
  
  const fullText = "Development Phases";

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    setDisplayedText("");
    setIsTypingComplete(false);

    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [isVisible]);

  return (
    <div 
      ref={sectionRef}
      className="bg-[#232325] min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      <div className="flex flex-col w-full max-w-7xl">
        {/* Animated Heading with Typewriter */}
        <h1 
          className="text-3xl md:text-5xl text-center text-blue-500 mb-12 font-light min-h-[60px]"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(-28px)',
            transition: 'transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          {displayedText}
          {!isTypingComplete && isVisible && (
            <span className="animate-pulse">|</span>
          )}
        </h1>

        {/* Animated Image Container */}
        <div 
          className="flex-1 flex items-center justify-center relative"
          style={{
            transform: isTypingComplete ? 'translateY(0)' : 'translateY(42px)',
            transition: 'transform 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.28s'
          }}
        >
          <div className="relative group">
            {/* Glowing border effect */}
                <div 
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-700"
                  style={{
                    /* keep as decorative only; no transform or opacity animation that would cause white flash */
                    animation: isTypingComplete ? 'pulse-glow 3s ease-in-out infinite' : 'none'
                  }}
                />
            
            {/* Image wrapper */}
            <div className="relative bg-[#1a1a1c] rounded-lg p-2 shadow-2xl">
                <img
                src="https://pin.it/VWrrkv6Yg"
                alt="Development Phases"
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                onLoad={() => setImageLoaded(true)}
                style={{
                  /* only allow a subtle transform on hover, but keep entrance as translateY only */
                  filter: imageLoaded ? 'brightness(1)' : 'brightness(0.95)',
                  transition: 'transform 0.28s ease, filter 0.28s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating particles effect */}
            {isTypingComplete && (
              <>
                <div className="particle particle-1" />
                <div className="particle particle-2" />
                <div className="particle particle-3" />
                <div className="particle particle-4" />
              </>
            )}
          </div>
        </div>

        {/* Animated caption */}
        {isTypingComplete && (
            <p 
            className="text-center text-gray-400 mt-8 text-sm md:text-base"
            style={{
              transform: isTypingComplete ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.7s'
            }}
          >
            
          </p>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
        }
        
        .animate-pulse {
          animation: pulse 1s infinite;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgb(59, 130, 246);
          border-radius: 50%;
          opacity: 0;
          animation: float 3s ease-in-out infinite;
          box-shadow: 0 0 10px rgb(59, 130, 246);
        }
        
        .particle-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
          animation: float 4s ease-in-out infinite;
        }
        
        .particle-2 {
          top: 20%;
          right: 15%;
          animation-delay: 1s;
          animation: float 5s ease-in-out infinite;
        }
        
        .particle-3 {
          bottom: 15%;
          left: 20%;
          animation-delay: 2s;
          animation: float 4.5s ease-in-out infinite;
        }
        
        .particle-4 {
          bottom: 25%;
          right: 10%;
          animation-delay: 1.5s;
          animation: float 5.5s ease-in-out infinite;
        }

        .group:hover .particle {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default DevelopmentPhases;