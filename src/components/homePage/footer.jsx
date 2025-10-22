import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Company", href: "#" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Insights", href: "/insights" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer 
      ref={footerRef}
      className="bg-[#232325] text-gray-300 py-12 px-6 sm:px-10 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Name */}
          <div 
            className="flex items-center sm:items-start"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 0.1s'
            }}
          >
            <div 
              className="w-10 h-10 bg-blue-500 rounded-full mr-3 flex-shrink-0 relative overflow-hidden"
              style={{
                animation: isVisible ? 'pulse-glow 3s ease-in-out infinite' : 'none'
              }}
            >
              <div className="absolute inset-0 bg-blue-400 animate-ping opacity-75" />
              <div className="absolute inset-0 bg-blue-500" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-white leading-tight hover:text-blue-400 transition-colors duration-300 cursor-pointer">
              Company Name
            </span>
          </div>

          {/* Write to Us */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 0.2s'
            }}
          >
            <h5 className="uppercase tracking-wider text-sm font-semibold text-white mb-4 relative inline-block">
              Write to Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </h5>
            <ul className="space-y-2 text-sm">
              {['support@trickydot.com', 'use@trickydot.com', 'usa@trickydot.com'].map((email, index) => (
                <li 
                  key={email}
                  className="flex items-center break-all group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.5s ease-out ${0.3 + index * 0.1}s`
                  }}
                >
                  <Mail className="text-blue-500 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={14} />
                  <a 
                    href={`mailto:${email}`} 
                    className="hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Speak to Us */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 0.3s'
            }}
          >
            <h5 className="uppercase tracking-wider text-sm font-semibold text-white mb-4">
              Speak to Us
            </h5>
            <ul className="space-y-2 text-sm">
              {[
                { flag: '🇮🇳', number: '+91 9847 50 59 59' },
                { flag: '🇦🇪', number: '+971 563 96 96 21' },
                { flag: '🇺🇸', number: '+1 346 464 1975' }
              ].map((phone, index) => (
                <li 
                  key={phone.number}
                  className="flex items-center group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.5s ease-out ${0.4 + index * 0.1}s`
                  }}
                >
                  <span className="group-hover:scale-125 transition-transform duration-300">{phone.flag}</span>
                  <a 
                    href={`tel:${phone.number.replace(/\s/g, '')}`} 
                    className="hover:text-blue-400 transition-colors duration-300 ml-2 hover:translate-x-1 inline-block"
                  >
                    {phone.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Located at */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 0.4s'
            }}
          >
            <h5 className="uppercase tracking-wider text-sm font-semibold text-white mb-4">
              Located at
            </h5>
            <ul className="space-y-3 text-sm">
              {[
                { address: 'Puthanathani, Malappuram,\nKerala, India - 676552' },
                { address: 'Sharjah Media City (Shams),\nAl Messaned, Al Bataeh Sharjah,\nUnited Arab Emirates' }
              ].map((location, index) => (
                <li 
                  key={index}
                  className="flex items-start group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.5s ease-out ${0.5 + index * 0.1}s`
                  }}
                >
                  <MapPin className="text-blue-500 mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={14} />
                  <span className="group-hover:text-white transition-colors duration-300">
                    {location.address.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < location.address.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Animated Divider */}
        <div 
          className="my-8 relative h-px"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease-out 0.6s'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer" />
        </div>

        {/* Navigation Links */}
        <nav 
          className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-sm mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.7s'
          }}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition-all duration-300 relative group"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.4s ease-out ${0.8 + index * 0.05}s`
              }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Bottom Section */}
        <div 
          className="flex flex-col md:flex-row justify-between items-center text-sm border-t border-blue-500/30 pt-6 space-y-4 md:space-y-0"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.9s'
          }}
        >
          <div className="text-center md:text-left leading-relaxed">
            © 2025 TrickyDot Technologies Pvt. Ltd. All rights reserved. <br />
            <a href="#" className="hover:text-blue-400 transition-colors duration-300 hover:underline">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-blue-400 transition-colors duration-300 hover:underline">Terms and Conditions</a> |{" "}
            <a href="#" className="hover:text-blue-400 transition-colors duration-300 hover:underline">Disclaimer</a>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="group relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    transition: `all 0.4s ease-out ${1 + index * 0.1}s`
                  }}
                  aria-label={social.label}
                >
                  <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 group-hover:border-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" size={18} />
                    <div className="absolute inset-0 rounded-full bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;