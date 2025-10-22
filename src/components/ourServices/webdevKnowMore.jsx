import React from "react";
import Contact from "../aboutUs/contact"
import FeaturedWorks from "../homePage/Featured"
export default function WebsiteDevelopment() {
  const services = [
    {
      title: "Static Website",
      desc: "Dynamic websites offer greater flexibility and functionality compared to static sites. They are ideal for businesses that need to update their content frequently or provide interactive features for their users. Our dynamic websites are built using advanced technologies that enable seamless content management and user interaction.",
    },
    {
      title: "Dynamic Website",
      desc: "Dynamic websites offer greater flexibility and functionality compared to static sites. They are ideal for businesses that need to update their content frequently or provide interactive features for their users. Our dynamic websites are built using advanced technologies that enable seamless content management and user interaction.",
    },
    {
      title: "Ecommerce",
      desc: "Dynamic websites offer greater flexibility and functionality compared to static sites. They are ideal for businesses that need to update their content frequently or provide interactive features for their users. Our dynamic websites are built using advanced technologies that enable seamless content management and user interaction.",
    },
    {
      title: "CMS Board Website",
      desc: "Dynamic websites offer greater flexibility and functionality compared to static sites. They are ideal for businesses that need to update their content frequently or provide interactive features for their users. Our dynamic websites are built using advanced technologies that enable seamless content management and user interaction.",
    },
  ];

  return (
    <>
      {/* --- Website Development Section --- */}
      <section className="bg-white text-gray-800 py-24 px-6 lg:px-20 ">
        <div className="max-w-7xl mx-auto">
          {/* --- Heading --- */}
          <div className="text-center mb-10">
            <h2 className="text-4xl text-[#006FFD] mb-2">
              Website Development
            </h2>
            <p className="text-sm text-black max-w-3xl mx-auto font-bold">
              Our expert team at (company name) Technologies Pvt. Ltd. crafts
              stunning, responsive websites designed to engage your audience and
              drive business growth. Whether you need a simple static site or a
              complex e-commerce platform, we’ve got you covered.
            </p>
          </div>

          {/* --- Image + Tech Grid --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-60 mb-12 items-start">
            {/* Left: Image */}
            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/fL39cTpN/image-2.png"
                alt="Website Development"
                className="w-full object-cover"
              />
            </div>

            {/* Right: Technology Used */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Technology we used
              </h3>
              <div className="grid grid-cols-2 gap-x-10 text-gray-700 leading-8">
                <ul className="space-y-2">
                  <li>&gt; HTML</li>
                  <li>&gt; CSS</li>
                  <li>&gt; JAVASCRIPT</li>
                  <li>&gt; JQUERY</li>
                  <li>&gt; BOOTSTRAP</li>
                </ul>
                <ul className="space-y-2">
                  <li>&gt; PHP</li>
                  <li>&gt; PYTHON DJANGO</li>
                  <li>&gt; REACT JS</li>
                  <li>&gt; FIGMA</li>
                  <li>&gt; WORDPRESS</li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- Description + Form Section --- */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-40">
            {/* Left: Description */}
            <div className="text-gray-700 leading-7 text-justify">
              <p className="mb-4">
                In today’s digital age, having a professional and
                well-functioning website is crucial for any business. At
                TrickyDot Technologies Pvt. Ltd., we offer comprehensive website
                development services that cater to the diverse needs of our
                clients. Our team of experienced developers and designers use
                the latest technologies and industry best practices to create
                websites that are not only visually appealing but also
                user-friendly and optimized for search engines.
              </p>
              <p className="mb-4">
                Our process begins with understanding your business goals and
                requirements. We then move on to designing an intuitive and
                engaging user interface (UI) and user experience (UX) that
                reflects your brand identity. Our developers ensure that the
                website is responsive, meaning it looks great and functions
                perfectly on all devices, from desktops to smartphones.
              </p>
              <p className="mb-4">
                We follow a meticulous development process that includes
                rigorous testing to ensure the website is free of bugs and
                performs well under various conditions. Post-launch, we offer
                ongoing maintenance and support.
              </p>
            </div>

            {/* Right: Request a Quote Form */}
            <div className="border rounded-lg shadow-md p-6">
              <h3 className="text-center font-semibold text-[#006FFD] mb-2">
                Request a Quote
              </h3>
              <p className="text-xs text-center text-gray-500 mb-6">
                Reach out to us today! Our team is ready to assist you in
                finding the perfect solution at the best value.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006FFD]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006FFD]"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006FFD]"
                />
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006FFD]">
                  <option>Select service</option>
                  <option>Website Development</option>
                  <option>App Development</option>
                  <option>UI/UX Design</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows="3"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006FFD]"
                ></textarea>

                <label className="flex items-start gap-2 text-xs text-gray-600">
                  <input type="checkbox" className="mt-1" />
                  I agree to the Privacy policy and Terms & conditions
                </label>

                <button
                  type="submit"
                  className="w-full bg-[#006FFD] text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- What Do We Provide Section --- */}
      <section className="bg-[#232323] text-white py-16 px-6 lg:px-20 mb-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl mb-3">
            What do we <span className="text-[#3B82F6]">Provide?</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12">
            We offer a wide range of IT services tailored to your business
            needs, helping you innovate, optimize, and grow with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-[#2E2E2E] rounded-lg p-6 text-left shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-[#3B82F6] mb-2">
                  ⭕ {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-6">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact/>
      <FeaturedWorks/>
    </>
  );
}
