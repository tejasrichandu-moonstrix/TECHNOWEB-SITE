import React from "react";

const services = [
  {
    title: "Website Development",
    desc: "Our expert team at (company name) Technologies Pvt. Ltd. crafts stunning, responsive websites designed to engage your audience and drive business growth. Whether you need a simple static site or a complex e-commerce platform, we've got you covered.",
    tags: ["Static Website", "Dynamic Website", "Ecommerce", "CMS Based Website"],
   icon: <img src="https://i.postimg.cc/Y0LsrjBv/Group-75.png" alt="Website Icon" />,
   link: "/knowmore",
  },
  {
    title: "Mobile Application Development",
    desc: "(Company) Technologies Pvt. Ltd. offers top-notch mobile app development for iOS and Android platforms, delivering user-friendly, high-performance apps that cater to your business needs.",
    tags: ["Android Application", "iOS Application", "Cross Platform App","Native App", "Progressive Web App","Enterprise Mobile App"],
    icon: <img src="https://i.postimg.cc/XJ1vM1nn/Group-76.png" alt="Website Icon" />,
  },
  {
    title: "Software Development",
    desc: "At (Company Name) Technologies Pvt. Ltd., we provide tailored software development solutions that streamline your business processes, enhance productivity, and give you a competitive edge. Our expert team leverages the latest technologies to deliver scalable and reliable software, ensuring",
    tags: ["Custom Software", "SaaS Development", "Enterprise Software", "Desktop Application Development"],
    icon: <img src="https://i.postimg.cc/SNfxkKSX/Group-77.png" alt="Website Icon" />,
  },
  {
    title: "UI & UX Design",
    desc: "At TrickyDot Technologies Pvt. Ltd., we specialize in crafting seamless and visually appealing user interfaces and experiences that enhance user satisfaction and drive engagement.",
    tags: ["User Research and Analysis", "Wireframing and Prototyping", "User Interface(UI) Design", "User Experience(UX) Design"],
    icon: <img src="https://i.postimg.cc/zv1qYs46/Group-78.png" alt="Website Icon" />,
  },
  {
    title: "Artificial Intelligence Development",
    desc: "(Company) Technologies Pvt. Ltd. provides comprehensive AI development services, utilizing the latest technologies in machine learning, natural language processing, and computer vision to create intelligent applications that enhance business performance and user experience.",
    tags: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Robotic Process Automation","Custom AI Solutions"],
    icon: <img src="https://i.postimg.cc/90VzYwXz/Group-79.png" alt="Website Icon" />,
  },
  {
    title: "ERP Development",
    desc: "(Company) Technologies Pvt. Ltd. offers end-to-end ERP development services that unify your business processes, providing real-time insights and improved operational control to drive growth and efficiency.",
    tags: ["Business Analysis", "User Training and Support", "Custom ERP Development"],
    icon: <img src="https://i.postimg.cc/Kv04tY68/Group-80.png" alt="Website Icon" />,
  },
  {
    title: "Digital Marketing",
    desc: "At (Company Name) Technologies Pvt. Ltd., we help businesses grow their online presence with powerful digital strategies. From ranking your website on Google to building engaging social media campaigns, we ensure your brand stands out and connects with the right audience.",
    tags: ["SEO (Search Engine Optimization)", "Social Media Marketing", "Poster and Creative Design", "Content Strategy","Analytics Reporting"],
    icon: <img src="https://i.postimg.cc/9fZWgXnp/Group-81.png" alt="Website Icon" />,
  },
  {
    title: "IT Consulting Services",
    desc: "(company) Technologies Pvt. Ltd. offers comprehensive IT consulting services to help businesses harness the power of technology. Our experts provide strategic guidance, system integration, and IT infrastructure optimization to enhance performance and achieve your business objectives.",
    tags: ["IT Strategy and Planning", "System Integration", "Digital Transformation","Cloud Services","IT Project Management"],
    icon: <img src="https://i.postimg.cc/2j2CKK2c/Group-82.png" alt="Website Icon" />,
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24 px-6 lg:px-20">
      <div className=" text-center">
        <h2 className="text-6xl text-slate-900 mb-12 font-poppins">
          Our <span className="text-[#006FFD]">Services</span>
        </h2>

        {/* First row - 3 */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {services.slice(0, 3).map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        {/* Second row - 3 */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {services.slice(3, 6).map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        {/* Third row - 2 (centered) */}
        <div className="grid md:grid-cols-2 gap-4 justify-center max-w-3xl mx-auto">
          {services.slice(6, 8).map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, tags, icon, link }) {
  const handleClick = () => {
    if (link) {
      // In your actual project, you'll use navigate(link) from react-router-dom
      console.log('Navigate to:', link);
    }
  };

  return (
    <div className="group relative bg-[#F4F4F4] p-8 rounded-2xl shadow hover:shadow-2xl transition-all duration-500 text-center overflow-hidden hover:-translate-y-2 hover:bg-white">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#006FFD]/0 to-[#006FFD]/0 group-hover:from-[#006FFD]/5 group-hover:to-[#006FFD]/10 transition-all duration-500 rounded-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon with Movement Animation */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-xl transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-6">
            {icon}
          </div>
        </div>

        {/* Title with Color Transition */}
        <h3 className="text-lg font-semibold text-[#006FFD] mb-3 transition-all duration-300 group-hover:scale-105">{title}</h3>

        {/* Description with Fade Effect */}
        <p className="text-gray-600 mb-4 transition-all duration-300 group-hover:text-gray-700">{desc}</p>

        {/* Tags with Staggered Animation */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {tags.map((tag, i) => (
            <span
              key={i}
              style={{ transitionDelay: `${i * 50}ms` }}
              className="text-sm px-3 py-1 border border-[#006FFD] rounded-full text-gray-600 transition-all duration-300 group-hover:bg-[#006FFD] group-hover:text-white group-hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button with Slide Animation */}
        <button
          onClick={handleClick}
          className="mx-auto flex items-center justify-center gap-2 px-5 py-2 border border-[#006FFD] text-[#006FFD] rounded-full font-medium transition-all duration-300 group-hover:bg-[#006FFD] group-hover:text-white group-hover:gap-3 group-hover:px-6"
        >
          Know More 
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  );
}