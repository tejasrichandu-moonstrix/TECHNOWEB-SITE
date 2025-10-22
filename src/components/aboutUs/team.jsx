import React from "react";
import { motion } from "framer-motion";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Uda Mahesh",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Uda Mahesh",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Uda Mahesh",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Uda Mahesh",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=400&fit=crop&crop=face",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-4xl font-poppins text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Meet <span className="text-blue-500">Our Team</span>
        </motion.h2>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              {/* Team Member Card */}
              <div className="bg-gray-100 overflow-hidden shadow-sm hover:shadow-xl rounded-xl transition-all duration-300">
                {/* Image Container */}
                <motion.div
                  className="aspect-[3/4] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotate: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>

              {/* Member Info */}
              <div className="mt-4 text-center">
                <motion.h3
                  className="text-lg font-bold text-gray-900 mb-1"
                  whileHover={{ color: "#2563EB" }}
                  transition={{ duration: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {member.role}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
