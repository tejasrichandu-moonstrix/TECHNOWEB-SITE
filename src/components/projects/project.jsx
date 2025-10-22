import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 12 projects with relevant random images
const projects = [
  { id: 1, title: "Quality and Performance Solutions", category: "Websites", image: "https://source.unsplash.com/random/600x400/?quality,performance" },
  { id: 2, title: "Digital Transformation Platform", category: "Mobile Applications", image: "https://source.unsplash.com/random/600x400/?digital,transformation" },
  { id: 3, title: "Transportation Management System", category: "AI", image: "https://source.unsplash.com/random/600x400/?transportation,logistics" },
  { id: 4, title: "Process Optimization", category: "Websites", image: "https://source.unsplash.com/random/600x400/?process,workflow" },
  { id: 5, title: "Temperature Controlled Transport", category: "Mobile Applications", image: "https://source.unsplash.com/random/600x400/?temperature,transport" },
  { id: 6, title: "Express Delivery Network", category: "AI", image: "https://source.unsplash.com/random/600x400/?express,delivery" },
  { id: 7, title: "Courier Services Platform", category: "Websites", image: "https://source.unsplash.com/random/600x400/?courier,services" },
  { id: 8, title: "E-commerce Express Solutions", category: "Mobile Applications", image: "https://source.unsplash.com/random/600x400/?ecommerce,express" },
  { id: 9, title: "Payment Solutions Platform", category: "AI", image: "https://source.unsplash.com/random/600x400/?payment,solutions" },
  { id: 10, title: "Transport Management System", category: "Websites", image: "https://source.unsplash.com/random/600x400/?transport,management" },
  { id: 11, title: "Social Network Platform", category: "Mobile Applications", image: "https://source.unsplash.com/random/600x400/?social,network" },
  { id: 12, title: "Enterprise Business Platform", category: "AI", image: "https://source.unsplash.com/random/600x400/?enterprise,platform" }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [titleText, setTitleText] = useState("");
  const [descText, setDescText] = useState("");
  
  const fullDesc = "We are passionate to create deeply connected brands, services, and campaigns to enable stable and successful relationships between businesses and customers.";

  useEffect(() => {
    let index = 0;
    const fullText = "Projects Delivered";
    
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTitleText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    // Type description after title
    const descTimeout = setTimeout(() => {
      let descIndex = 0;
      const descTimer = setInterval(() => {
        if (descIndex < fullDesc.length) {
          setDescText(fullDesc.slice(0, descIndex + 1));
          descIndex++;
        } else {
          clearInterval(descTimer);
        }
      }, 30);
    }, fullText.length * 80 + 300);

    return () => {
      clearInterval(timer);
      clearTimeout(descTimeout);
    };
  }, []);

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Category buttons
  const categories = ["All", "Websites", "Mobile Applications", "AI"];

  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-5xl font-bold">
              {titleText.split(' ').map((word, index) => (
                <span key={index}>
                  {word === 'Projects' ? (
                    <span className="text-blue-600">{word}</span>
                  ) : (
                    word
                  )}
                  {index < titleText.split(' ').length - 1 ? ' ' : ''}
                </span>
              ))}
              {titleText.length < "Projects Delivered".length && <span className="animate-pulse">|</span>}
            </h1>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg text-gray-600">
              {descText}
              {descText.length < fullDesc.length && <span className="animate-pulse">|</span>}
            </p>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden cursor-pointer border border-gray-200 group relative"
              style={{ 
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                y: -5,
                boxShadow: '0 8px 20px rgba(59, 130, 246, 0.15)',
                backgroundColor: 'rgba(239, 246, 255, 1)'
              }}
            >
              {/* Light blue shine overlay with reflection effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-lg z-10"
                initial={{ 
                  background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0) 100%)'
                }}
                whileHover={{ 
                  background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.04) 50%, rgba(59, 130, 246, 0) 100%)'
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              
              {/* Animated light reflection */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute w-full h-full"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)',
                  }}
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              
              <div className="relative">
                {/* Image container */}
                <div className="overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                
                {/* Title section */}
                <div className="p-4">
                  <h3 className="text-gray-800 text-sm font-medium text-center transition-colors duration-300 group-hover:text-blue-600">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;