import React, { useState, useEffect, useRef, useCallback } from 'react';

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const [boxGap, setBoxGap] = useState(40);
  const rafId = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const startScrollPoint = viewportHeight * 0.8;
        const endScrollPoint = -sectionRect.height * 0.2;
        const scrollDistanceFromStart = startScrollPoint - sectionRect.top;

        let progress = 0;
        if (scrollDistanceFromStart > 0) {
          progress = Math.min(
            1,
            scrollDistanceFromStart / (startScrollPoint - endScrollPoint)
          );
        }

        const minGap = 40;
        const maxGap = 150;
        const newGap = minGap + (maxGap - minGap) * progress;

        setBoxGap(newGap);
      }
      rafId.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  return (
    <section
      ref={sectionRef}
      className="bg-white text-gray-800 h-[10vh] md:h-[80vh] relative  md:p-10 box-border z-10"
    >
      <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-center whitespace-nowrap">
        Software <span className="text-blue-500">Features</span>
      </h2>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[5] justify-center items-center w-full transition-all duration-300 ease-linear flex-row hidden md:flex"
        style={{ gap: `${boxGap}px` }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 border-2 border-gray-300 rounded-full bg-transparent"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;