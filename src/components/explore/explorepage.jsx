import React from "react";
import { motion } from "framer-motion";
import Contact from "../aboutUs/contact";
import FeaturedWorks from "../homePage/Featured";

const techStack = {
  frontend: ["HTML", "CSS", "JAVASCRIPT", "JQUERY", "BOOTSTRAP"],
  backend: ["PHP", "PYTHON DJANGO", "REACT JS", "FIGMA", "WORDPRESS"]
};

const websiteTypes = [
  {
    title: "Static Website",
    description: "Dynamic websites offer greater flexibility and functionality compared to static sites. They are ideal for businesses that need to update their content frequently or provide interactive features for their users. Our dynamic websites are built using advanced technologies that enable seamless content management and user interaction."
  },
  {
    title: "Dynamic Website",
    description: "Dynamic websites offer greater flexibility and functionality compared to static sites. They are ideal for businesses that need to update their content frequently or provide interactive features for their users. Our dynamic websites are built using advanced technologies that enable seamless content management and user interaction."
  },
  {
    title: "Ecommerce",
    description: "Dynamic websites offer greater flexibility and functionality compared to static sites. They are ideal for businesses that need to update their content frequently or provide interactive features for their users. Our dynamic websites are built using advanced technologies that enable seamless content management and user interaction."
  },
  {
    title: "CMS Board Website",
    description: "Dynamic websites offer greater flexibility and functionality compared to static sites. They are ideal for businesses that need to update their content frequently or provide interactive features for their users. Our dynamic websites are built using advanced technologies that enable seamless content management and user interaction."
  }
];

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0066FF] mb-4">
            Website Development
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our expert team at (company name) Technologies Pvt. Ltd. crafts stunning, responsive websites designed to engage your audience and drive business growth. Whether you need a simple static site or a complex e-commerce platform, we've got you covered.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column (Image and Content) */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Image */}
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src="/Moll_express_logistics.png" 
                  alt="Website Example" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Technology Stack */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Technology we used</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    {techStack.frontend.map((tech) => (
                      <div key={tech} className="flex items-center space-x-2 mb-2">
                        <span className="text-blue-500">&gt;</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    {techStack.backend.map((tech) => (
                      <div key={tech} className="flex items-center space-x-2 mb-2">
                        <span className="text-blue-500">&gt;</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="prose max-w-none">
                <p className="mb-4">
                  In today's digital age, having a professional and well-functioning website is crucial for any business. At TrickyDot Technologies Pvt. Ltd., we offer comprehensive website development services that cater to the diverse needs of our clients. Our team of experienced developers and designers use the latest technologies and industry best practices to create websites that are not only visually appealing but also user-friendly and optimized for search engines.
                </p>
                <p className="mb-4">
                  Our process begins with understanding your business goals and requirements. We then move on to designing an intuitive and engaging user interface (UI) and user experience (UX) that reflects your brand identity. Our developers ensure that the website is responsive, meaning it looks great and functions perfectly on all devices, from desktops to smartphones.
                </p>
                <p>
                  We follow a meticulous development process that includes rigorous testing to ensure the website is free of bugs and performs well under various conditions. Post-launch, we offer ongoing maintenance and support.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Contact Form) */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="mb-6">
                <h2 className="text-xl font-bold text-center text-[#0066FF] mb-2">Request a Quote</h2>
                <p className="text-sm text-center text-gray-600">
                  Reach out to us today! Our team is ready to assist you in finding the perfect solution at the best value.
                </p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select service</option>
                    <option value="web">Website Development</option>
                    <option value="app">App Development</option>
                    <option value="ui">UI/UX Design</option>
                    <option value="digital">Digital Marketing</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the <span className="text-blue-600 hover:underline cursor-pointer">Privacy policy</span> and <span className="text-blue-600 hover:underline cursor-pointer">Terms & conditions</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#0066FF] text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Submit Now
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* What do we Provide Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#393939] rounded-xl py-12 px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-white">What do we </span>
            <span className="text-[#0066FF]">Provide?</span>
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
            We offer a wide range of IT services tailored to your business needs, helping you innovate, optimize, and grow with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {websiteTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#232323] rounded-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-4 h-4 relative">
                    <div className="absolute inset-0 bg-[#0066FF] rounded-full opacity-25"></div>
                    <div className="absolute inset-1 bg-[#0066FF] rounded-full"></div>
                  </div>
                  <h3 className="text-[#0066FF] font-semibold text-lg">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="mt-16">
        <Contact />
      </div>

      {/* Featured Works Section */}
      <div className="mt-16 mb-16">
        <FeaturedWorks />
      </div>
    </div>
  );
};

export default ExplorePage;
