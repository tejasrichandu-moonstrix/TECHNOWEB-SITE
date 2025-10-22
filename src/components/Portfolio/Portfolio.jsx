import React, { useState } from "react";
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
              <span className="text-blue-600">Projects</span><br/>
              Delivered
            </h1>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg text-gray-600">
              We are passionate to create <strong>deeply connected brands, services, and campaigns</strong> to
              enable stable and successful relationships between businesses and customers.
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
                boxShadow: '0 8px 20px rgba(59, 130, 246, 0.15)'
              }}
            >
              {/* Light blue shine overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-lg"
                initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
                whileHover={{ 
                  backgroundColor: 'rgba(59, 130, 246, 0.06)'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              
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