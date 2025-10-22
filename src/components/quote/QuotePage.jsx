import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const QuotePage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    notRobot: false,
    agreeTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const controls = useAnimation();
  const formControls = useAnimation();

  // Typing effect for hero text
  const heroText = "Your Future Starts Here. ";
  const letsTalkText = "Let's Talk.";
  const [displayedText, setDisplayedText] = useState('');
  const [showLetsTalk, setShowLetsTalk] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Page load animation
  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  // Typing animation
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < heroText.length) {
        setDisplayedText(heroText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setShowLetsTalk(true);
        setCursorVisible(false);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, []);

  // Form animation sequence
  useEffect(() => {
    const sequence = async () => {
      await formControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
      });
    };
    sequence();
  }, [formControls]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  // Staggered animations for contact info
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-white pt-24"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 pb-8 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {displayedText}
          {showLetsTalk && (
            <motion.span
              className="text-blue-500 inline-block"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            >
              {letsTalkText}
            </motion.span>
          )}
          {cursorVisible && (
            <span className="inline-block w-2 h-10 bg-blue-500 animate-blink"></span>
          )}
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-4xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Don't <span className="text-blue-500">Hesitate</span> To{' '}
              <span className="text-blue-500">Contact Us</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-8"
              whileHover={{ color: "#3b82f6" }}
            >
              TechNo Solutions is dedicated to providing cutting-edge{' '}
              <strong>software</strong> and <strong>technology</strong> services to its{' '}
              <strong>trusted</strong> and <strong>valued clients</strong>.
            </motion.p>

            {/* India Headquarters */}
            <motion.div
              className="bg-blue-50 rounded-lg p-6 mb-6"
              whileHover={{ scale: 1.01, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-blue-600 text-xl font-bold mb-4">
                India Headquarters
              </h3>
              <ul className="space-y-2 text-sm">
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-semibold mr-2">Address:</span>
                  <span className="text-gray-700">[Your India Office Address]</span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-semibold mr-2">Email:</span>
                  <span className="text-gray-700">india@yourcompany.com</span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-semibold mr-2">Phone:</span>
                  <span className="text-gray-700">+91 [mobile number]</span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-gray-700">
                    Start a{' '}
                    <span className="text-blue-600 font-semibold">live chat</span> on
                    Whatsapp
                  </span>
                </motion.li>
              </ul>
            </motion.div>

            {/* UAE Office */}
            <motion.div
              className="bg-blue-50 rounded-lg p-6 mb-6"
              whileHover={{ scale: 1.01, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-blue-600 text-xl font-bold mb-4">UAE Office</h3>
              <ul className="space-y-2 text-sm">
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-semibold mr-2">Address:</span>
                  <span className="text-gray-700">[Your UAE Office Address]</span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-semibold mr-2">Email:</span>
                  <span className="text-gray-700">uae@yourcompany.com</span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-semibold mr-2">Phone:</span>
                  <span className="text-gray-700">+971 [mobile number]</span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-gray-700">
                    Start a{' '}
                    <span className="text-blue-600 font-semibold">live chat</span> on
                    Whatsapp
                  </span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4 text-sm text-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="#"
                className="hover:underline"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                LinkedIn
              </motion.a>
              <span>*</span>
              <motion.a
                href="#"
                className="hover:underline"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Instagram
              </motion.a>
              <span>*</span>
              <motion.a
                href="#"
                className="hover:underline"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Facebook
              </motion.a>
              <span>*</span>
              <motion.a
                href="#"
                className="hover:underline"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Twitter
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            variants={itemVariants}
          >
            <motion.div
              className="mb-6"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.h3
                className="text-xl font-bold mb-2"
                animate={{ color: ["#1e40af", "#3b82f6", "#1e40af"] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                Request a <span className="text-blue-500">Quote</span>
              </motion.h3>
              <p className="text-sm text-gray-600">
                Reach out to us today! Our team is ready to assist you in finding the
                perfect solution at the best value.
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold text-green-600 mb-2">Thank You!</h3>
                <p className="text-gray-600">We've received your request and will get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                {/* Full Name */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.01 }}
                >
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.01 }}
                >
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </motion.div>

                {/* Phone Number */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, ease: "easeOut" }}
                  whileHover={{ scale: 1.01 }}
                >
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </motion.div>

                {/* Select Service */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.01 }}
                >
                  <label className="block text-sm font-semibold mb-2">Select Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white transition-all"
                  >
                    <option value="">Select</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="ai">AI Solutions</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9, ease: "easeOut" }}
                  whileHover={{ scale: 1.01 }}
                >
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
                  />
                </motion.div>

                {/* Checkboxes */}
                <motion.div
                  className="space-y-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0, ease: "easeOut" }}
                >
                  <motion.label
                    className="flex items-center cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                  >
                    <input
                      type="checkbox"
                      name="notRobot"
                      checked={formData.notRobot}
                      onChange={handleChange}
                      className="mr-2 w-4 h-4"
                    />
                    <span className="text-sm">I'm not a robot</span>
                  </motion.label>
                  <motion.label
                    className="flex items-start cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                  >
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mr-2 w-4 h-4 mt-0.5"
                    />
                    <span className="text-sm">
                      I agree to the{' '}
                      <span className="text-blue-600">Privacy Policy</span> and{' '}
                      <span className="text-blue-600">Terms & Conditions</span>
                    </span>
                  </motion.label>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  Submit Now
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QuotePage;
