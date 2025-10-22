import React, { useState, useEffect, useRef } from 'react';

const FeaturedWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const sectionRef = useRef(null);
  
  const fullText = "Our Featured Works";
  
  const projects = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      title: 'Project 1'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      title: 'Project 2'
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
      title: 'Project 3'
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      title: 'Project 4'
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop',
      title: 'Project 5'
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      title: 'Project 6'
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      title: 'Project 7'
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
      title: 'Project 8'
    },
    {
      id: 9,
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      title: 'Project 9'
    },
  ];

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    }, 80);

    return () => clearInterval(typeInterval);
  }, [isVisible]);

  // Parse displayed text to highlight "Featured"
  const renderText = () => {
    const words = displayedText.split(' ');
    return words.map((word, index) => {
      if (word === 'Featured') {
        return (
          <span key={index} className="text-blue-400">
            {word}{' '}
          </span>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-[#323235] py-16 px-4"
      style={{
        opacity: isVisible ? 1 : 0.3,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Typewriter */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-8 min-h-[60px]">
            {renderText()}
            {!isTypingComplete && isVisible && (
              <span className="animate-pulse text-blue-400">|</span>
            )}
          </h1>
        </div>

        {/* Grid Container */}
        <div className="relative">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer perspective-1000"
                style={{
                  opacity: isTypingComplete ? 1 : 0,
                  transform: isTypingComplete ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`,
                }}
              >
                <div 
                  className="bg-[#1a1a1c] overflow-hidden shadow-lg h-64 rounded-lg relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotateY(5deg) rotateX(5deg) scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotateY(0) rotateX(0) scale(1)';
                  }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{
                      transition: 'transform 0.5s ease, filter 0.5s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.filter = 'brightness(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.filter = 'brightness(1)';
                    }}
                  />
                  
                  {/* Overlay on hover */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-blue-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6"
                  >
                    <span className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.title}
                    </span>
                  </div>

                  {/* Blue border glow effect */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.2)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* All Works Button */}
          <div 
            className="flex justify-end"
            style={{
              opacity: isTypingComplete ? 1 : 0,
              transform: isTypingComplete ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s ease-out 1s',
            }}
          >
            <button 
              className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(59, 130, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                All Works
              </span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              
              {/* Sliding background effect */}
              <div 
                className="absolute inset-0 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                style={{ zIndex: 0 }}
              />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-pulse {
          animation: pulse 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default FeaturedWorks;