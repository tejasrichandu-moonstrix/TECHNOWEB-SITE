import React, { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';

const Form = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#323235] text-white min-h-screen flex items-center py-16 px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Floating particles */}
      <div className="particles-container">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${15 + i * 2}s`
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            Ready to Elevate Your{' '}
            <span className="text-blue-400 inline-block animate-gradient">Digital Journey</span>?
          </h1>
          <h2 
            className="text-3xl md:text-5xl font-light text-blue-400"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out 0.3s'
            }}
          >
            Contact form
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Animated Circles */}
          <div 
            className="w-full lg:w-1/2 flex justify-center items-center relative h-80"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            {[0, 1, 2].map((_, i) => {
              const maxSpread = 150;
              
              let offset;
              if (i === 0) {
                offset = -scrollProgress * maxSpread;
              } else if (i === 1) {
                offset = 0;
              } else {
                offset = scrollProgress * maxSpread;
              }
              
              return (
                <div
                  key={i}
                  className="absolute transition-all duration-500 ease-out"
                  style={{ 
                    transform: `translateX(${offset}px) scale(${1 - Math.abs(i - 1) * scrollProgress * 0.2})`,
                    opacity: 1 - Math.abs(i - 1) * scrollProgress * 0.3
                  }}
                >
                  <div 
                    className={`w-20 h-20 md:w-32 md:h-32 rounded-full border-2 flex items-center justify-center relative ${
                      i === 1 ? 'border-blue-400' : 'border-blue-400/50'
                    }`}
                    style={{
                      boxShadow: i === 1 ? '0 0 40px rgba(59, 130, 246, 0.4)' : 'none',
                      animation: i === 1 ? 'pulse-ring 3s ease-in-out infinite' : 'none'
                    }}
                  >
                    {/* Inner glow */}
                    <div 
                      className="absolute inset-0 rounded-full bg-blue-500/10"
                      style={{
                        animation: i === 1 ? 'pulse 2s ease-in-out infinite' : 'none'
                      }}
                    />
                    {/* Center dot */}
                    {i === 1 && (
                      <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping-slow" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Contact Form */}
          <div 
            className="w-full lg:w-1/2 max-w-lg"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            <div className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s ease-out 0.5s'
                  }}
                >
                  <label className="block text-gray-300 text-sm mb-2 transition-colors duration-300">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b-2 border-blue-400/50 text-white pb-3 focus:border-blue-400 focus:outline-none transition-all duration-300"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      borderColor: focusedField === 'name' ? 'rgb(59, 130, 246)' : '',
                      boxShadow: focusedField === 'name' ? '0 2px 10px rgba(59, 130, 246, 0.3)' : ''
                    }}
                    required
                  />
                </div>
                <div 
                  className="relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s ease-out 0.6s'
                  }}
                >
                  <label className="block text-gray-300 text-sm mb-2">Email*</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-0 border-b-2 border-blue-400/50 text-white pb-3 focus:border-blue-400 focus:outline-none transition-all duration-300"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      borderColor: focusedField === 'email' ? 'rgb(59, 130, 246)' : '',
                      boxShadow: focusedField === 'email' ? '0 2px 10px rgba(59, 130, 246, 0.3)' : ''
                    }}
                    required
                  />
                </div>
              </div>

              {/* Phone and Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s ease-out 0.7s'
                  }}
                >
                  <label className="block text-gray-300 text-sm mb-2">Phone*</label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-0 border-b-2 border-blue-400/50 text-white pb-3 focus:border-blue-400 focus:outline-none transition-all duration-300"
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      borderColor: focusedField === 'phone' ? 'rgb(59, 130, 246)' : '',
                      boxShadow: focusedField === 'phone' ? '0 2px 10px rgba(59, 130, 246, 0.3)' : ''
                    }}
                    required
                  />
                </div>
                <div 
                  className="relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s ease-out 0.8s'
                  }}
                >
                  <label className="block text-gray-300 text-sm mb-2">Select Service *</label>
                  <select 
                    className="w-full bg-transparent border-0 border-b-2 border-blue-400/50 text-white pb-3 focus:border-blue-400 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      borderColor: focusedField === 'service' ? 'rgb(59, 130, 246)' : '',
                      boxShadow: focusedField === 'service' ? '0 2px 10px rgba(59, 130, 246, 0.3)' : ''
                    }}
                  >
                    <option value="" className="bg-gray-800">Choose a service</option>
                    <option value="web-development" className="bg-gray-800">Web Development</option>
                    <option value="mobile-app" className="bg-gray-800">Mobile App Development</option>
                    <option value="ui-ux" className="bg-gray-800">UI/UX Design</option>
                    <option value="digital-marketing" className="bg-gray-800">Digital Marketing</option>
                    <option value="consulting" className="bg-gray-800">Consulting</option>
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div 
                className="relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease-out 0.9s'
                }}
              >
                <label className="block text-gray-300 text-sm mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-0 border-b-2 border-blue-400/50 text-white pb-3 focus:border-blue-400 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    borderColor: focusedField === 'message' ? 'rgb(59, 130, 246)' : '',
                    boxShadow: focusedField === 'message' ? '0 2px 10px rgba(59, 130, 246, 0.3)' : ''
                  }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div 
                className="pt-6"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease-out 1s'
                }}
              >
                <button
                  type="submit"
                  className="w-full bg-transparent border-2 border-blue-400 text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send 
                      size={20} 
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </span>
                  <div className="absolute inset-0 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="absolute inset-0 flex items-center justify-center text-gray-900 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Send Message
                    <Send size={20} className="ml-2" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-120deg); }
          66% { transform: translate(20px, -20px) rotate(-240deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }

        @keyframes pulse-ring {
          0%, 100% { 
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.4);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 60px rgba(59, 130, 246, 0.6);
            transform: scale(1.02);
          }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.5;
          }
          50% {
            transform: translate(30px, -80px);
          }
        }

        @keyframes gradient {
          0%, 100% { color: rgb(59, 130, 246); }
          50% { color: rgb(147, 197, 253); }
        }

        .animate-float {
          animation: float 25s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 30s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
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
          background: rgb(59, 130, 246);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
          animation: float-particle 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Form;