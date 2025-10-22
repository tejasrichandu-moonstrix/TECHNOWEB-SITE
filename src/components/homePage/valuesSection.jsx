import React, { useEffect, useRef, useState } from "react";

const values = [
  {
    id: "01",
    title: "Business",
    highlight: "Empowering",
    desc: "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.",
  },
  {
    id: "02",
    title: "Business",
    highlight: "Innovating",
    desc: "Focus on what makes the business unique and how users can benefit from choosing it. Showcase your brand identity with clarity.",
  },
  {
    id: "03",
    title: "Business",
    highlight: "Sustaining",
    desc: "Highlight long-term values, consistent performance, and reliability that creates lasting trust with your customers.",
  },
];

export default function ValuesSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [rectangleFlips, setRectangleFlips] = useState([0, 0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const prevActiveRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        
        // Calculate scroll progress through the section
        const scrolled = -rect.top;
        const total = sectionHeight - viewportHeight;
        const progress = Math.max(0, Math.min(1, scrolled / total));
        
        // Calculate which card is currently active
        const newActiveIndex = Math.min(
          Math.floor(progress * values.length),
          values.length - 1
        );
        
        // When card changes, flip the corresponding rectangle
        if (newActiveIndex !== prevActiveRef.current) {
          setActiveCardIndex(newActiveIndex);
          
          // Flip the rectangle corresponding to the new active card
          if (newActiveIndex < 5) {
            setRectangleFlips(prev => {
              const newFlips = [...prev];
              // Only flip if it hasn't flipped 3 times yet
              if (newFlips[newActiveIndex] < 3) {
                newFlips[newActiveIndex] = newFlips[newActiveIndex] + 1;
              }
              return newFlips;
            });
          }
          
          prevActiveRef.current = newActiveIndex;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#323235] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="sticky top-10 z-20 flex justify-between items-center mb-10">
          <h2 className="text-5xl font-regular">
            Our <span className="text-blue-500">Values</span>
          </h2>

          {/* Flipping Rectangles on the Right */}
          <div className="hidden sm:flex gap-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-16 h-24 rounded-md"
                style={{
                  transform: `rotateY(${rectangleFlips[i] * 180}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s ease-in-out, border 0.3s, box-shadow 0.3s",
                  border: i === activeCardIndex
                    ? "2px solid rgb(59, 130, 246)" 
                    : "1px solid rgba(59, 130, 246, 0.4)",
                  boxShadow: i === activeCardIndex
                    ? "0 0 20px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.3)"
                    : "none",
                  backgroundColor: "rgba(35, 35, 37, 0.8)",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Scrolling Cards */}
        <div className="h-[300vh] relative">
          {values.map((v, index) => {
            const isActive = index === activeCardIndex;
            
            return (
              <div
                key={v.id}
                className="sticky top-60 flex justify-end"
                style={{
                  transform: isActive ? 'scale(1)' : 'scale(0.95)',
                  opacity: isActive ? 1 : 0.6,
                  transition: "transform 0.4s ease-out, opacity 0.4s ease-out",
                  zIndex: isActive ? 10 : index,
                }}
              >
                <div 
                  className="bg-[#232325] p-8 w-[65vh] h-[60vh] shadow-md rounded-lg"
                  style={{
                    border: isActive ? "2px solid rgb(59, 130, 246)" : "1px solid transparent",
                    boxShadow: isActive 
                      ? "0 10px 40px rgba(59, 130, 246, 0.3)" 
                      : "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "border 0.3s, box-shadow 0.3s",
                  }}
                >
                  <div className="text-gray-400 text-sm mb-4">{v.id}</div>
                  <h3 className="text-3xl mb-6">
                    {v.title}{" "}
                    <span className="text-blue-500">{v.highlight}</span>
                  </h3>
                  <p className="text-gray-300 text-md">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}