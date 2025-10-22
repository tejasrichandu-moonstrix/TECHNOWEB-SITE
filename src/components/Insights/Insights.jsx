import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Insights = () => {
  const [visiblePosts, setVisiblePosts] = useState(5);
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Microinteractions: The Small Details That Define Great UX",
      excerpt: "It's the little things that make a big difference. From button animations to hover effects, explore how microinteractions shape intuitive user experiences and keep users engaged. Designing with intuition can only take you so far. The true magic happens when data and design work hand-in-hand, in today's digital product landscape, designers are learning how to listen to the overall user journey. Traditional click, scroll, or bounce tells a story—and great designers are learning how to listen to the overall user.",
      image: "https://source.unsplash.com/random/800x400/?ux,design,meeting",
      category: "Interaction Design",
      subcategory: "Microinteractions",
      date: "Maria Nova - July 11, 2025",
    },
    {
      id: 2,
      title: "Designing Interfaces for Restaurant Tech: A POS Case Study",
      excerpt: "Point-of-sale (POS) systems are the beating heart of restaurant operations. Discover how we designed a user-friendly POS interface that streamlines order processing, inventory, and sales analytics. Even small suggestions can lead to big improvements in workflow efficiency.",
      image: "https://source.unsplash.com/random/800x400/?restaurant,tech,pos",
      category: "Case Study",
      subcategory: "Restaurant Tech",
      date: "Maria Nova - June 28, 2025",
    },
    {
      id: 3,
      title: "Redefining Last-Mile Delivery with Smart Lockers",
      excerpt: "In an age where convenience is king, smart lockers are emerging as a game-changer for last-mile delivery. Learn how this technology is making deliveries faster, more secure, and convenient for everyone. Intuition can only take you so far. The true magic happens when data and design work hand-in-hand.",
      image: "https://source.unsplash.com/random/800x400/?delivery,lockers,logistics",
      category: "Innovation",
      subcategory: "Last-Mile Delivery",
      date: "Jenifer Ella - June 15, 2025",
    },
    {
      id: 4,
      title: "Data-Driven Design: Turning Analytics into Action",
      excerpt: "Designing with intuition can only take you so far. The true magic happens when data and design work hand-in-hand. In today's digital product landscape, designers are learning how to listen to the overall user journey. Traditional click, scroll, or bounce tells a story—and great designers are learning how to listen to the overall user.",
      image: "https://source.unsplash.com/random/800x400/?analytics,data,design",
      category: "Analytics",
      subcategory: "Data-Driven Design",
      date: "Nikash Rath - July 11, 2025",
    },
    {
      id: 5,
      title: "How AI Is Transforming User Experience in Everyday Products",
      excerpt: "When we think of artificial intelligence, we often picture futuristic robots or complex algorithms. But AI's true power lies in its ability to enhance everyday experiences. Discover how AI-powered features are making products more intuitive, personalized, and enjoyable to use.",
      image: "https://i.postimg.cc/6Q2ZqG7p/ai-brain.jpg",
      category: "AI",
      subcategory: "User Experience",
      date: "Priya Banerjee - May 10, 2025",
    },
    {
      id: 6,
      title: "Designing a Seamless Experience for On-Demand Laundry Services",
      excerpt: "Laundry may seem like a mundane chore, but for busy professionals, it's a major pain point. That's where on-demand laundry services come in. Discover how we designed a seamless user experience that makes laundry day hassle-free, from scheduling pickups to tracking deliveries.",
      image: "https://source.unsplash.com/random/800x400/?laundry,app,service",
      category: "Case Study",
      subcategory: "On-Demand Services",
      date: "Maria Nova - April 25, 2025",
    },
    {
      id: 7,
      title: "How We Visualized Ecommerce Analytics for Store Owners",
      excerpt: "Running an online store means juggling a dozen metrics at once. Our challenge was to create an analytics dashboard that gives store owners the insights they need at a glance. Learn how we transformed complex data into clear, actionable visualizations that drive better business decisions.",
      image: "https://source.unsplash.com/random/800x400/?ecommerce,analytics,dashboard",
      category: "Data Visualization",
      subcategory: "Ecommerce Analytics",
      date: "Daniel Roth - May 12, 2025",
    }
  ];

  const filters = ["UI Design", "Case Study"];

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 2);
  };

  return (
    <div className="bg-white pt-28 pb-16 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-gray-900 mb-4"
        >
          Discover <span className="text-blue-500">Our Insights</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Stay ahead with the latest trends, expert advice, and real-world experiences in technology and business.
        </motion.p>
      </div>

      {/* Filter Section */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex gap-3 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeFilters.includes(filter)
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Blog Post */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg overflow-hidden relative group cursor-pointer border border-gray-200"
          style={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.3s ease'
          }}
          whileHover={{
            y: -5,
            boxShadow: '0 8px 20px rgba(59, 130, 246, 0.15)'
          }}
        >
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-lg z-10"
            initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
            whileHover={{
              backgroundColor: 'rgba(59, 130, 246, 0.06)'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full h-80 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-blue-500 mb-2">
              <span>{blogPosts[0].category}</span>
              <span className="mx-2">•</span>
              <span>{blogPosts[0].subcategory}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {blogPosts[0].title}
            </h2>
            <p className="text-gray-600 mb-6 line-clamp-3">
              {blogPosts[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{blogPosts[0].date}</span>
              <Link
                to={`/blog/${blogPosts[0].id}`}
                className="text-blue-500 hover:text-blue-700 font-medium text-sm flex items-center transition-colors duration-300"
              >
                Read More
                <motion.svg
                  whileHover={{ x: 3 }}
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.slice(1, visiblePosts).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg overflow-hidden relative group cursor-pointer border border-gray-200 ${
                index === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto' : ''
              }`}
              style={{
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                y: -5,
                boxShadow: '0 8px 20px rgba(59, 130, 246, 0.15)'
              }}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-lg z-10"
                initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
                whileHover={{
                  backgroundColor: 'rgba(59, 130, 246, 0.06)'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-blue-500 mb-2">
                  <span>{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.subcategory}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-500 hover:text-blue-700 font-medium text-sm flex items-center transition-colors duration-300"
                  >
                    Read More
                    <motion.svg
                      whileHover={{ x: 3 }}
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {visiblePosts < blogPosts.length && (
        <div className="max-w-6xl mx-auto px-4 flex justify-center mt-12">
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
              1
            </button>
            <button className="px-5 py-2 rounded-md border-2 border-blue-500 text-blue-500 font-medium hover:bg-blue-50 transition-colors">
              2
            </button>
            <button
              onClick={loadMorePosts}
              className="px-5 py-2 rounded-md border-2 border-blue-500 text-blue-500 font-medium hover:bg-blue-50 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Insights;
