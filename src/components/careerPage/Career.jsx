import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronUp, Upload } from "lucide-react";
import Contact from "../aboutUs/contact";
import {
  FaGithub, FaLinkedin, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaPython, FaPhp, FaJava, FaAndroid, FaApple
} from "react-icons/fa";
import * as SI from "react-icons/si";

export default function Careers() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const textRef = useRef();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jobs = [
    {
      title: "UI/UX Designer",
      experience: "Fresher",
      skills: "Proficiency in Figma, Adobe XD, or Sketch for wireframing and prototyping",
      location: "Pune",
      description: {
        purpose: "Create user-centric digital experiences that are both functional and delightful.",
        responsibilities: [
          "Translate concepts into user flows, wireframes, mockups, and prototypes.",
          "Design intuitive interfaces for web and mobile platforms.",
          "Good communication and time-management skills.",
          "Portfolio demonstrating UI/UX design work.",
          "Proficiency in design tools like Figma, Adobe XD, or Sketch.",
        ],
        qualification: {
          educational: "Bachelor's degree in Design, Computer Science, HCI, or related field.",
          technical: "Freshers or 0-2 years of experience are welcome.",
        },
      },
    },
    {
      title: "Web Developer",
      experience: "2+ years",
      skills: "Proficiency in React, Node.js, MongoDB, and modern frameworks",
      location: "Pune",
      description: {
        purpose: "Build scalable and efficient web applications.",
        responsibilities: [
          "Develop, test, and maintain web applications.",
          "Work with RESTful APIs and databases.",
          "Collaborate with designers and backend developers.",
        ],
        qualification: {
          educational: "Bachelor's degree in Computer Science or related field.",
          technical: "Minimum 2 years of full-stack development experience.",
        },
      },
    },
    {
      title: "App Developer",
      experience: "Minimum 1 year",
      skills: "Proficiency in Flutter, React Native, or native app development",
      location: "Pune",
      description: {
        purpose: "Develop and maintain high-quality mobile applications.",
        responsibilities: [
          "Build Android/iOS apps using Flutter or React Native.",
          "Integrate with backend APIs and databases.",
          "Debug and optimize app performance.",
        ],
        qualification: {
          educational: "Bachelor's degree in Computer Science or related field.",
          technical: "At least 1 year of mobile app development experience.",
        },
      },
    },
  ];

  const jobTitles = jobs.map(job => job.title);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const text = "We're Hiring";
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(prev => (prev + 1) % jobTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scrolling-icons {
          animation: scrollRightToLeft 20s linear infinite;
          display: inline-flex;
          white-space: nowrap;
          gap: 2rem;
          width: max-content;
        }
        .scrolling-icons:hover {
          animation-play-state: paused;
        }
        .typewriter-cursor {
          display: inline-block;
          width: 2px;
          height: 32px;
          background: #3B82F6;
          margin-left: 4px;
          opacity: ${cursorVisible ? 1 : 0};
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .glow-card {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.7);
          border-color: rgba(59, 130, 246, 0.9);
        }
        .chevron-rotate {
          transform: rotate(180deg);
          transition: transform 0.3s ease;
        }
      `}</style>

      <section className="bg-white py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-[#3B82F6] px-8 py-1 border border-[#3B82F6] rounded-full text-sm font-medium mb-4"
              >
                Hiring
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-5xl text-slate-900 mb-4 leading-snug"
              >
                Explore Career opportunities and Grow with us.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-black mb-2"
              >
                Discover your future
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-black mb-4"
              >
                Are you crazy enough to think you can change the world? Drop your CV
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="font-semibold text-slate-900 text-2xl sm:text-3xl"
              >
                <span ref={textRef}>{displayedText}</span>
                <span className="typewriter-cursor"></span> <br />
                <div className="overflow-hidden h-12 relative inline-block">
                  <motion.div
                    animate={{ y: `-${currentTitleIndex * 3}rem` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {jobTitles.map((title, idx) => (
                      <div key={idx} className="h-12 flex items-center justify-center text-2xl sm:text-3xl text-[#3B82F6]">
                        {title}
                      </div>
                    ))}
                    <div className="h-12 flex items-center justify-center text-2xl sm:text-3xl text-[#3B82F6]">
                      {jobTitles[0]}
                    </div>
                  </motion.div>
                </div>
              </motion.p>
            </div>
            {/* Right Illustration */}
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <motion.img
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                src="https://i.postimg.cc/vHdz55r6/Layer-x0020-1.png"
                alt="Career illustration"
                className="w-full max-w-sm h-auto"
              />
            </div>
          </div>

          {/* Tech Logos */}
          <div className="mt-8 overflow-hidden">
            <div className="scrolling-icons">
              {/* First Set of Icons */}
              <FaGithub className="text-gray-800 w-10 h-10 sm:w-12 sm:h-12" title="GitHub" />
              <FaLinkedin className="text-blue-600 w-10 h-10 sm:w-12 sm:h-12" title="LinkedIn" />
              <FaReact className="text-blue-400 w-10 h-10 sm:w-12 sm:h-12" title="React" />
              <FaNodeJs className="text-green-600 w-10 h-10 sm:w-12 sm:h-12" title="Node.js" />
              <FaHtml5 className="text-orange-500 w-10 h-10 sm:w-12 sm:h-12" title="HTML5" />
              <FaCss3Alt className="text-blue-500 w-10 h-10 sm:w-12 sm:h-12" title="CSS3" />
              <FaJs className="text-yellow-400 w-10 h-10 sm:w-12 sm:h-12" title="JavaScript" />
              <FaBootstrap className="text-purple-600 w-10 h-10 sm:w-12 sm:h-12" title="Bootstrap" />
              <FaPython className="text-blue-400 w-10 h-10 sm:w-12 sm:h-12" title="Python" />
              <FaPhp className="text-purple-600 w-10 h-10 sm:w-12 sm:h-12" title="PHP" />
              <FaJava className="text-red-600 w-10 h-10 sm:w-12 sm:h-12" title="Java" />
              <FaAndroid className="text-green-600 w-10 h-10 sm:w-12 sm:h-12" title="Android" />
              <FaApple className="text-gray-800 w-10 h-10 sm:w-12 sm:h-12" title="Apple" />
              <SI.SiFigma className="w-10 h-10 text-orange-600" title="Figma" />
              <SI.SiMongodb className="w-10 h-10 text-green-600" title="MongoDB" />
              <SI.SiFirebase className="w-10 h-10 text-yellow-400" title="Firebase" />
              <SI.SiMysql className="w-10 h-10 text-blue-700" title="MySQL" />
              <SI.SiPostgresql className="w-10 h-10 text-blue-800" title="PostgreSQL" />
              <SI.SiKotlin className="w-10 h-10 text-purple-600" title="Kotlin" />
              <SI.SiTensorflow className="w-10 h-10 text-orange-500" title="TensorFlow" />
              <SI.SiAdobeillustrator className="w-10 h-10 text-orange-600" title="Adobe Illustrator" />
              <SI.SiAdobephotoshop className="w-10 h-10 text-blue-600" title="Adobe Photoshop" />

              {/* Duplicate Set of Icons for Seamless Loop */}
              <FaGithub className="text-gray-800 w-10 h-10 sm:w-12 sm:h-12" title="GitHub" />
              <FaLinkedin className="text-blue-600 w-10 h-10 sm:w-12 sm:h-12" title="LinkedIn" />
              <FaReact className="text-blue-400 w-10 h-10 sm:w-12 sm:h-12" title="React" />
              <FaNodeJs className="text-green-600 w-10 h-10 sm:w-12 sm:h-12" title="Node.js" />
              <FaHtml5 className="text-orange-500 w-10 h-10 sm:w-12 sm:h-12" title="HTML5" />
              <FaCss3Alt className="text-blue-500 w-10 h-10 sm:w-12 sm:h-12" title="CSS3" />
              <FaJs className="text-yellow-400 w-10 h-10 sm:w-12 sm:h-12" title="JavaScript" />
              <FaBootstrap className="text-purple-600 w-10 h-10 sm:w-12 sm:h-12" title="Bootstrap" />
              <FaPython className="text-blue-400 w-10 h-10 sm:w-12 sm:h-12" title="Python" />
              <FaPhp className="text-purple-600 w-10 h-10 sm:w-12 sm:h-12" title="PHP" />
              <FaJava className="text-red-600 w-10 h-10 sm:w-12 sm:h-12" title="Java" />
              <FaAndroid className="text-green-600 w-10 h-10 sm:w-12 sm:h-12" title="Android" />
              <FaApple className="text-gray-800 w-10 h-10 sm:w-12 sm:h-12" title="Apple" />
              <SI.SiFigma className="w-10 h-10 text-orange-600" title="Figma" />
              <SI.SiMongodb className="w-10 h-10 text-green-600" title="MongoDB" />
              <SI.SiFirebase className="w-10 h-10 text-yellow-400" title="Firebase" />
              <SI.SiMysql className="w-10 h-10 text-blue-700" title="MySQL" />
              <SI.SiPostgresql className="w-10 h-10 text-blue-800" title="PostgreSQL" />
              <SI.SiKotlin className="w-10 h-10 text-purple-600" title="Kotlin" />
              <SI.SiTensorflow className="w-10 h-10 text-orange-500" title="TensorFlow" />
              <SI.SiAdobeillustrator className="w-10 h-10 text-orange-600" title="Adobe Illustrator" />
              <SI.SiAdobephotoshop className="w-10 h-10 text-blue-600" title="Adobe Photoshop" />
            </div>
          </div>

          {/* Explore Opportunities */}
          <div className="mt-12 mb-16">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-[#3B82F6] mb-6 text-center md:text-left"
            >
              Explore Opportunities
            </motion.h3>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`border border-[#3B82F6] rounded-xl shadow-sm bg-white ${openIndex === index ? 'glow-card' : ''}`}
                >
                  {/* Job Row */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 gap-4 md:gap-0">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-left">
                      <h4 className="text-xl font-semibold text-slate-900">{job.title}</h4>
                      <div>
                        <p className="font-semibold text-slate-900">Experience</p>
                        <p className="text-gray-600">{job.experience}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Skills</p>
                        <p className="text-gray-600">{job.skills}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Location</p>
                        <p className="text-gray-600">{job.location}</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleAccordion(index)}
                      className="mt-4 md:mt-0 px-5 py-2 text-[#006FFD] rounded-full font-medium self-start md:self-center flex items-center justify-center"
                    >
                      {openIndex === index ? (
                        <motion.span
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 180 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200"
                        >
                          <ChevronUp className="w-5 h-5 text-gray-700" />
                        </motion.span>
                      ) : (
                        <motion.span
                          whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
                          whileTap={{ scale: 0.95 }}
                          className="px-5 py-2 bg-[#006FFD] text-white rounded-full font-medium transition-colors whitespace-nowrap"
                        >
                          More Info →
                        </motion.span>
                      )}
                    </motion.button>
                  </div>
                  {/* Expanded Section */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="p-6 text-left overflow-hidden"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <h5 className="text-blue-600 font-semibold mb-2">Job Description</h5>
                          <p className="mb-4">
                            <strong>Purpose:</strong> {job.description.purpose}
                          </p>
                          <h6 className="font-semibold mb-2">Responsibilities & Requirements:</h6>
                          <ul className="list-disc ml-6 mb-4 text-gray-700">
                            {job.description.responsibilities.map((item, i) => (
                              <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: i * 0.05 }}
                                key={i}
                              >
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                          <h6 className="font-semibold text-blue-600 mb-2">Qualification</h6>
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                          >
                            <strong>Educational:</strong> {job.description.qualification.educational}
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.25 }}
                          >
                            <strong>Technical:</strong> {job.description.qualification.technical}
                          </motion.p>
                          <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              setSelectedJob(job);
                              setShowPopup(true);
                            }}
                            className="mt-6 w-full md:w-auto px-6 py-2 bg-[#3B82F6] text-white rounded-full font-medium transition-colors"
                          >
                            Apply Now
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          <Contact />

          {/* Popup Modal */}
          <AnimatePresence>
            {showPopup && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white shadow-2xl max-w-2xl w-full my-8 relative max-h-[90vh] overflow-y-auto rounded-2xl"
                >
                  <div className="sticky top-0 bg-white rounded-t-2xl p-6 pb-4 z-10">
                    <button
                      onClick={() => setShowPopup(false)}
                      className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-3xl font-light leading-none"
                    >
                      ×
                    </button>
                    <div className="text-center">
                      <h1 className="text-4xl font-bold mb-2">
                        <span className="text-blue-600">Apply</span> <span className="text-gray-900">Now</span>
                      </h1>
                      <p className="text-gray-600">
                        Excited to explore the professional world?<br />
                        Apply now and start your journey with us.
                      </p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                      {/* Email & Mobile */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mobile<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            placeholder="Enter Your Number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          />
                        </div>
                      </div>
                      {/* Location & Position */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Your Location"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Position<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={selectedJob?.title || ""}
                            placeholder="UI/UX Designer"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
                            readOnly
                          />
                        </div>
                      </div>
                      {/* Resume Upload */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center hover:border-blue-400 transition cursor-pointer bg-blue-50"
                      >
                        <Upload className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                        <p className="text-gray-600 text-sm">Upload Resume</p>
                        <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                      </motion.div>
                      {/* Checkbox */}
                      <div className="flex items-center space-x-3 border border-gray-300 rounded-lg p-3">
                        <motion.input
                          whileTap={{ scale: 0.95 }}
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                          id="robot-check"
                        />
                        <label htmlFor="robot-check" className="text-sm text-gray-700">I am not a Robot</label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500 mt-0.5" id="terms-check" />
                        <label htmlFor="terms-check" className="text-sm text-gray-700">
                          I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
                        </label>
                      </div>
                      {/* Submit Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          alert('Application submitted!');
                          setShowPopup(false);
                        }}
                        className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition shadow-md"
                      >
                        Submit
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
