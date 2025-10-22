import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

function HeroSection() {
  const [headingText, setHeadingText] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const fullHeading = "We Create Websites, Apps & Software to Power Your Business Forward";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullHeading.length) {
        setHeadingText(fullHeading.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // Trigger transition when user scrolls down
      if (window.scrollY > 50 && !isTransitioning) {
        setIsTransitioning(true);
      }
    };

    // Enable scrolling
    document.body.style.overflow = 'auto';
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTransitioning]);

  const handleScrollDown = () => {
    // Trigger the transition immediately
    setIsTransitioning(true);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hero Section with Shutter Effect */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen z-40 transition-transform duration-1000 ease-in-out ${
          isTransitioning ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <section
          id="home"
          className="relative h-full flex flex-col justify-center items-start px-6 md:px-10 text-left"
          style={{
            backgroundImage: "url('https://i.postimg.cc/2S3C1Yvq/c0c55fb4354c54cc6815b38ba1b7d115ec70930b.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 max-w-3xl pt-28 md:pt-20">
            {/* Tagline */}
            <span className="inline-block px-3 md:px-4 py-1 mb-4 text-blue-600 border border-blue-600 rounded-full text-sm md:text-base lg:text-lg">
              Code . Create . Conquer
            </span>
            
            {/* Main Heading with Typewriter */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug md:leading-tight mb-4 font-sans font-normal">
              {headingText.split(" ").map((word, index) => {
                const isBlueWord = ["Websites,", "Apps", "&", "Software"].includes(word);
                const isBoldWord = ["Software", "Business", "Forward"].includes(word);
                return (
                  <span key={index}>
                    <span
                      className={`${isBlueWord ? "text-blue-600 font-semibold" : ""} ${
                        isBoldWord && !isBlueWord ? "font-semibold" : ""
                      }`}
                    >
                      {word}
                    </span>
                    {index < headingText.split(" ").length - 1 ? " " : ""}
                  </span>
                );
              })}
              {headingText.length < fullHeading.length && <span className="animate-pulse">|</span>}
            </h1>
            
            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-700 max-w-xl md:max-w-2xl">
              At (Your Company Name) Technologies Pvt. Ltd., we craft smart, scalable, and user-friendly digital products.
              From responsive websites and mobile apps to custom software and automation, we help businesses grow, innovate,
              and stay ahead.
            </p>
          </div>
          
          {/* Scroll Down Indicator */}
          <div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center cursor-pointer group"
            onClick={handleScrollDown}
          >
            <p className="text-white text-sm mr-2 font-medium tracking-wider">SCROLL DOWN</p>
            <div className="animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform">
              <ChevronDown className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </section>
      </div>

      {/* Spacer to prevent content jump */}
      {!isTransitioning && <div className="h-screen"></div>}
    </>
  );
}

export default HeroSection;