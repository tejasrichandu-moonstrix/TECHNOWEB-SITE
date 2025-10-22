import React, { useRef } from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

// Custom hook for simplified particle effect
const useParticles = () => {
  const canvasRef = useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      particles = Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between close particles
      particles.forEach((p1, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 - dist / 80})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // Draw particles
      particles.forEach((p) => {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.7)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update positions
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    init();
    draw();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return canvasRef;
};

// Main component
const Approach = () => {
  const sectionRef = useRef(null);
  const canvasRef = useParticles();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = React.useState(null);

  // Cards data
  const cards = [
    {
      icon: Target,
      title: "Mission",
      description: "Helping businesses grow with effective, user-friendly, and quality solutions that drive productivity and innovation.",
      color: "#3B82F6",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Creating an ecosystem where technology empowers everyone, ensuring progress that’s accessible and impactful.",
      color: "#8B5CF6",
    },
    {
      icon: Heart,
      title: "Core Values",
      description: "Rooted in ethics, collaboration, and timely delivery, we prioritize people, purpose, and progress equally.",
      color: "#EC4899",
    },
  ];

  return (
    <div ref={sectionRef} className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-white to-[#F8FAFF]">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none"
      />

      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10 font-poppins">
        {/* Minimized Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mb-6"
        >
          Stand Unique with Tomorrow's Technology
        </motion.h1>

        {/* Compact Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#435479] text-base max-w-2xl mb-8 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm"
        >
          Since 2022, <span className="font-semibold text-[#3B82F6]">TechnoWeb</span> has empowered businesses with innovative, user-friendly technology solutions.
        </motion.p>

        {/* Services List (Compact) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-[#3B82F6] mb-4">Our Services</h2>
          <ul className="space-y-3 text-[#435479] max-w-md">
            {[
              { color: "#3B82F6", label: "Software Development", desc: "Custom web, mobile, and ERP solutions." },
              { color: "#8B5CF6", label: "AI Development", desc: "Smarter systems powered by AI." },
              { color: "#EC4899", label: "Digital Marketing", desc: "Data-driven campaigns for growth." },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="relative pl-4 py-1 border-l-2"
                style={{ borderColor: item.color }}
              >
                <span className="font-medium" style={{ color: item.color }}>{item.label}:</span> {item.desc}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Cards Section */}
        <motion.div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                className="relative bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-md overflow-hidden cursor-pointer group"
                style={{
                  boxShadow: hoveredCard === index ? `0 10px 25px ${card.color}30` : '0 5px 15px rgba(0,0,0,0.08)',
                  transform: hoveredCard === index ? 'translateY(-5px)' : 'translateY(0)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${card.color}20, transparent 70%)` }}
                />
                <div className="relative z-10 flex flex-col items-start">
                  <motion.div
                    animate={hoveredCard === index ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: hoveredCard === index ? card.color : '#EFF6FF',
                      color: hoveredCard === index ? '#fff' : card.color,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3
                    className="text-xl font-bold mb-2 transition-all"
                    style={{ color: hoveredCard === index ? card.color : '#3B82F6' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[#435479] text-sm">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Approach;
