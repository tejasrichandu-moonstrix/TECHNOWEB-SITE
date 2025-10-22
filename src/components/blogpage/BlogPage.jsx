import React from "react";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Microinteractions: The Small Details That Define Great UX",
      excerpt:
        "It’s the little things that make a big difference. From button animations to hover effects, microinteractions shape intuitive user experiences and keep users engaged.",
      image: "https://via.placeholder.com/800x400",
      category: "Interaction Design",
      subcategory: "Microinteractions",
      date: "July 11, 2025",
    },
    {
      id: 2,
      title: "Designing Interfaces for Restaurant Tech: A POS Case Study",
      excerpt:
        "Discover how we designed a user-friendly POS system for the restaurant industry, improving efficiency and customer satisfaction.",
      image: "https://via.placeholder.com/800x400",
      category: "Case Study",
      subcategory: "Restaurant Tech",
      date: "June 28, 2025",
    },
    {
      id: 3,
      title: "Redefining Last-Mile Delivery with Smart Lockers",
      excerpt:
        "Learn how smart lockers are revolutionizing last-mile delivery, making it faster, more secure, and convenient for everyone.",
      image: "https://via.placeholder.com/800x400",
      category: "Innovation",
      subcategory: "Last-Mile Delivery",
      date: "June 15, 2025",
    },
    {
      id: 4,
      title: "Data-Driven Design: Turning Analytics into Action",
      excerpt:
        "Explore how data-driven design can help you make informed decisions, optimize user experiences, and drive business growth.",
      image: "https://via.placeholder.com/800x400",
      category: "Analytics",
      subcategory: "Data-Driven Design",
      date: "May 30, 2025",
    },
    {
      id: 5,
      title: "How AI Is Transforming User Experience in Everyday Products",
      excerpt:
        "AI is changing the way we interact with technology. Discover how AI-powered features are enhancing user experiences in everyday products.",
      image: "https://via.placeholder.com/800x400",
      category: "AI",
      subcategory: "User Experience",
      date: "May 10, 2025",
    },
    {
      id: 6,
      title: "Designing a Seamless Experience for On-Demand Laundry Services",
      excerpt:
        "Find out how we designed a seamless user experience for an on-demand laundry service, making it easy for users to schedule pickups and deliveries.",
      image: "https://via.placeholder.com/800x400",
      category: "Case Study",
      subcategory: "On-Demand Services",
      date: "April 25, 2025",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Discover <span className="text-blue-500">Our Insights</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead with the latest trends, expert insights, and real-world
            experiences in technology and business.
          </p>
        </div>
      </div>

      {/* Featured Blog Post */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full h-80 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center text-sm text-blue-500 mb-4">
              <span>{blogPosts[0].category}</span>
              <span className="mx-2">•</span>
              <span>{blogPosts[0].subcategory}</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {blogPosts[0].title}
            </h2>
            <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
            <div className="flex items-center text-gray-500 text-sm">
              <span>{blogPosts[0].date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-gray-500 text-sm">
                    <span>{post.date}</span>
                  </div>
                  <a
                    href={`/blog/${post.id}`}
                    className="text-blue-500 hover:text-blue-700 font-medium text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
