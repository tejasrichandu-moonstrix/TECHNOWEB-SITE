import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Website Development",
    desc: "Our expert team at (Company name) Technologies Pvt. Ltd. crafts stunning, responsive websites designed to engage your audience and drive business growth. Whether you need a simple static site or a complex e-commerce platform, we've got you covered.",
    tags: ["Static Website", "Dynamic Website", "CMS Based Website", "Ecommerce"],
    icon: "🌐",
    hoverIcon: "🚀",
  },
  {
    title: "Mobile Application Development",
    desc: "(Company) Technologies Pvt. Ltd. offers top-notch mobile app development for iOS and Android platforms, delivering user-friendly, high-performance apps that cater to your business needs.",
    tags: ["Android Application", "iOS Application", "Native App", "Cross Platform App", "Enterprise Mobile App", "Progressive Web App"],
    icon: "📱",
    hoverIcon: "⚡",
  },
  {
    title: "Software Development",
    desc: "At (Company Name) Technologies Pvt. Ltd., we provide tailored software development solutions that streamline your business processes, enhance productivity, and give you a competitive edge. Our expert team leverages the latest technologies to deliver scalable and reliable software.",
    tags: ["Custom Software Development", "Enterprise Software", "Desktop Application Development"],
    icon: "💻",
    hoverIcon: "⚙️",
  },
  {
    title: "UI & UX Design",
    desc: "At TrickyDot Technologies Pvt. Ltd, we specialize in crafting seamless and visually appealing user interfaces and experiences that enhance user satisfaction and drive engagement.",
    tags: ["User Research and Analysis", "Wireframing and Prototyping", "User Interface (UI) Design", "User Experience (UX) Design"],
    icon: "🎨",
    hoverIcon: "✨",
  },
  {
    title: "Artificial Intelligence Development",
    desc: "(Company) Technologies Pvt. Ltd. provides comprehensive AI development services, utilizing the latest technologies in machine learning, natural language processing, and computer vision to create intelligent applications that enhance business performance and user experience.",
    tags: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Robotic Process Automation", "Custom AI Solutions"],
    icon: "🤖",
    hoverIcon: "🧠",
  },
  {
    title: "ERP Development",
    desc: "(Company) Technologies Pvt. Ltd. offers end-to-end ERP development services that unify your business processes, providing real-time insights and improved operational control to drive growth and efficiency.",
    tags: ["Business Process Analysis", "User Training and Support", "Custom ERP Development"],
    icon: "📊",
    hoverIcon: "📈",
  },
  {
    title: "Digital Marketing",
    desc: "At (Company Name) Technologies Pvt. Ltd, we help businesses grow their online presence with powerful digital strategies. From ranking your website on Google to building engaging social media campaigns, we ensure your brand stands out and connects with the right audience.",
    tags: ["SEO (Search Engine Optimization)", "Social Media Marketing", "Events & Graphic Design", "Content Strategy", "Analytics & Reporting"],
    icon: "📢",
    hoverIcon: "🎯",
  },
  {
    title: "IT Consulting Services",
    desc: "(Company) Technologies Pvt. Ltd. offers comprehensive IT consulting services to help businesses harness the power of technology. Our experts provide strategic guidance, system integration, and IT infrastructure optimization to enhance performance and achieve your business objectives.",
    tags: ["IT Strategy and Planning", "System Integration", "Digital Transformation", "Cloud Services", "IT Project Management"],
    icon: "🛠️",
    hoverIcon: "💡",
  },
];

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, delay + currentIndex * 30);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay]);

  return <span>{displayedText}<span className="cursor">|</span></span>;
};

const ServicesGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-[#232325] min-h-screen px-6 py-12">
      {/* Section Heading with Typewriter */}
      <h1 className="text-3xl font-bold text-center text-white mb-10 typewriter-heading">
        <TypewriterText text="Our Services" delay={300} />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="card-wrapper"
            style={{
              animationDelay: `${idx * 0.1}s`
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`service-card ${hoveredIndex === idx ? 'hovered' : ''}`}>
              {/* Animated background gradient */}
              <div className="card-gradient"></div>
              
              {/* Icon with toggle animation */}
              <div className="icon-wrapper">
                <span className={`icon-default ${hoveredIndex === idx ? 'icon-hidden' : ''}`}>
                  {service.icon}
                </span>
                <span className={`icon-hover ${hoveredIndex === idx ? 'icon-visible' : ''}`}>
                  {service.hoverIcon}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold mb-3 text-blue-500 text-center relative z-10">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 text-center relative z-10">{service.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4 items-center justify-center relative z-10">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="tag"
                    style={{
                      animationDelay: `${(idx * 0.1) + (i * 0.05)}s`
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button className="know-more-btn">
                Know More <ArrowRight className="ml-2 w-4 h-4 arrow-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes tagSlide {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes iconRotateOut {
          0% {
            transform: rotateY(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotateY(90deg) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes iconRotateIn {
          0% {
            transform: rotateY(-90deg) scale(0.5);
            opacity: 0;
          }
          100% {
            transform: rotateY(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        .typewriter-heading {
          animation: fadeIn 0.8s ease-out;
        }

        .cursor {
          animation: blink 1s infinite;
          font-weight: 300;
          color: #4285f4;
        }

        .card-wrapper {
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .service-card {
          background: linear-gradient(135deg, #323235 0%, #2a2a2d 100%);
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(66, 133, 244, 0.1);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(66, 133, 244, 0.05) 0%, rgba(66, 133, 244, 0) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .service-card.hovered::before {
          opacity: 1;
        }

        .card-gradient {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 0%,
            rgba(66, 133, 244, 0.1) 25%,
            rgba(66, 133, 244, 0.2) 50%,
            rgba(66, 133, 244, 0.1) 75%,
            transparent 100%
          );
          background-size: 200% 200%;
          opacity: 0;
          transition: opacity 0.4s ease;
          animation: gradientShift 3s ease infinite;
        }

        .service-card.hovered .card-gradient {
          opacity: 1;
        }

        .service-card.hovered {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 24px rgba(66, 133, 244, 0.3), 
                      0 0 40px rgba(66, 133, 244, 0.15);
          border-color: rgba(66, 133, 244, 0.4);
        }

        .icon-wrapper {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
          height: 60px;
        }

        .icon-default,
        .icon-hover {
          position: absolute;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .icon-default {
          opacity: 1;
          transform: rotateY(0deg) scale(1);
        }

        .icon-hidden {
          animation: iconRotateOut 0.4s forwards;
        }

        .icon-hover {
          opacity: 0;
          transform: rotateY(-90deg) scale(0.5);
        }

        .icon-visible {
          animation: iconRotateIn 0.4s forwards;
        }

        .tag {
          background: linear-gradient(135deg, #3a3a3d 0%, #2d2d30 100%);
          color: #e0e0e0;
          font-size: 0.75rem;
          padding: 0.375rem 0.75rem;
          border-radius: 9999px;
          transition: all 0.3s ease;
          animation: tagSlide 0.4s ease-out backwards;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .service-card.hovered .tag {
          background: linear-gradient(135deg, #4285f4 0%, #3367d6 100%);
          color: white;
          border-color: rgba(66, 133, 244, 0.3);
          transform: translateY(-2px);
        }

        .know-more-btn {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          color: #4285f4;
          transition: all 0.3s ease;
          margin-top: auto;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.5rem;
          position: relative;
          z-index: 10;
        }

        .know-more-btn:hover {
          color: #5a9df7;
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .service-card.hovered .arrow-icon {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .service-card {
            padding: 1.25rem;
          }
          
          .icon-wrapper {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesGrid;