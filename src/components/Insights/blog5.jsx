import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Contact from '../aboutUs/contact';

const Blog5 = () => {
  const navigate = useNavigate();
  
  const sections = [
    {
      title: "1. Hyper-Personalization at Scale",
      description: "Gone are the days of one-size-fits-all interfaces. AI enables products to learn from user behavior and tailor the experience accordingly:",
      points: [
        "From user behavior and input to the experience and recommendations.",
        "Personalized suggestions that save you time and effort.",
        "Real-time context-aware recommendations that fit user needs."
      ]
    },
    {
      title: "2. Conversational Interfaces (AI + UX)",
      description: "AI-powered chatbots and virtual assistants are transforming traditional UI into natural conversation flows:",
      points: [
        "Faster interactions that guide users without confusion.",
        "Natural language understanding that adapts to user intent.",
        "More inclusive interfaces, especially for non-tech-savvy users."
      ]
    },
    {
      title: "3. Predictive UX: Knowing What You Need Before You Ask",
      description: "AI helps systems anticipate user intent and proactively surface what's needed:",
      points: [
        "Reduce friction by pre-loading relevant content or actions.",
        "Improve task completion time with predictive suggestions.",
        "Provide smart defaults to minimize cognitive load."
      ]
    },
    {
      title: "4. Visual Recognition and Augmented Interfaces",
      description: "AI-driven visual features are enhancing physical-digital interactions:",
      points: [
        "Object recognition to improve search and discovery.",
        "AR overlays that provide contextual information in real-time.",
        "Smarter camera interactions and photo management."
      ]
    },
    {
      title: "5. Smarter A/B Testing and Design Decisions",
      description: "Designers now use AI to analyze user behavior and run experiments at scale:",
      points: [
        "Automated experiment design and analysis for faster insights.",
        "Dynamic personalization that adapts layouts and content based on user segments.",
        "Improved metrics-driven design that ties experience directly to outcomes."
      ]
    }
  ];

  const relatedPosts = [
    {
      id: 2,
      title: 'Designing Interfaces for Restaurant Tech: A POS Case Study',
      image: 'https://source.unsplash.com/random/800x400/?restaurant,tech,pos',
      excerpt: 'Point of Sale (POS) systems are the beating heart of any modern restaurant. They manage orders, track inventory, process payments...',
      date: 'Maria Novak · 12 Jan, 2025'
    },
    {
      id: 3,
      title: 'Redefining Last-Mile Delivery with Smart Lockers',
      image: 'https://source.unsplash.com/random/800x400/?delivery,lockers,logistics',
      excerpt: 'In an age where convenience defines customer satisfaction, the last mile of delivery has emerged as a pivotal moment...',
      date: 'Jordan Ellis · July 11, 2025'
    },
    {
      id: 4,
      title: 'Data-Driven Design — Turning Analytics into Action',
      image: 'https://source.unsplash.com/random/800x400/?analytics,data,design',
      excerpt: 'Designing with intuition can only take you so far. The true magic happens when data and design work hand-in-hand...',
      date: 'Ritesh Patil · July 11, 2025'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.320, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.320, 1],
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.08,
        ease: 'easeOut',
      },
    }),
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      boxShadow: '0 12px 32px rgba(59, 130, 246, 0.15)',
      transition: { duration: 0.3 },
    },
  };

  const titleText = {
    line1: "How AI is Transforming",
    line2: "User Experience in",
    line3: "Everyday Products"
  };

  const typingVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      }
    })
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.23, 1, 0.320, 1]
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-blue-50/30 to-white min-h-screen pt-24 pb-20">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <button 
            onClick={() => navigate('/insights')}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Insights
          </button>
        </motion.div>

        {/* Blog Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16 text-center px-4 sm:px-6 md:px-8"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8 leading-tight max-w-4xl mx-auto"
            style={{ wordSpacing: '0.1em', letterSpacing: '-0.02em' }}
          >
            <motion.div
              variants={typingVariants}
              initial="hidden"
              animate="visible"
              className="overflow-hidden"
            >
              {Object.values(titleText).map((line, lineIndex) => (
                <motion.span
                  key={lineIndex}
                  className="block mb-2"
                  variants={typingVariants}
                  custom={lineIndex}
                >
                  {Array.from(line).map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <span className="text-sm font-medium text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
              AI & Product Design · 11 May, 2025
            </span>
          </motion.div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          <img
            src="https://i.postimg.cc/6Q2ZqG7p/ai-brain.jpg"
            alt="AI UX"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 p-8 bg-white rounded-xl border border-gray-200 shadow-sm"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Artificial Intelligence (AI) is no longer just a buzzword—it's actively reshaping how we interact with the digital world. From smart assistants to personalized shopping experiences, AI silently works behind the scenes to make our everyday lives smoother, faster, and more intuitive. Let's explore how AI is revolutionizing user experience (UX) across everyday products.
          </p>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-20"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {section.title}
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >
                {section.description}
              </motion.p>
              
              <motion.ul 
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              >
                {section.points.map((point, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={listItemVariants}
                    className="flex items-start text-gray-700 leading-relaxed"
                  >
                    <span className="text-blue-500 mr-3 mt-1.5 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 p-8 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl border border-blue-200"
        >
          <p className="text-lg text-gray-800 leading-relaxed font-medium">
            AI is changing the way we design, build, and measure experiences. As these technologies mature, designers and product teams must embrace them thoughtfully—balancing personalization with privacy and intelligence with transparency.
          </p>
        </motion.div>

        {/* Related Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-10">Related Posts</h3>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {relatedPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm h-full flex flex-col cursor-pointer"
                >
                  <div className="block flex-shrink-0 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-xs font-medium text-gray-500 mb-3">{post.date}</p>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-3 flex-grow">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <div className="mt-20">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Blog5;