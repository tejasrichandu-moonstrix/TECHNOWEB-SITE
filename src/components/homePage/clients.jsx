import React from 'react';

const Clients = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Seehan PK',
      title: 'Director and CEO',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      text: '(Company) Technologies built a fantastic website for us. It\'s user-friendly, looks great, and has boosted our online sales. Their team was efficient and easy to work with.',
      rating: 5
    },
    {
      id: 2,
      name: 'Elina',
      title: 'MD and Founder',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9f3a53e?w=150&h=150&fit=crop&crop=face',
      text: '(Company) Technologies built a fantastic website for us. It\'s user-friendly, looks great, and has boosted our online sales. Their team was efficient and easy to work with.',
      rating: 5
    },
    {
      id: 3,
      name: 'Robert',
      title: 'CEO and Founder',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      text: '(Company) Technologies built a fantastic website for us. It\'s user-friendly, looks great, and has boosted our online sales. Their team was efficient and easy to work with.',
      rating: 4
    },
    {
      id: 4,
      name: 'Aakriti',
      title: 'Director',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      text: '(Company) Technologies built a fantastic website for us. It\'s user-friendly, looks great, and has boosted our online sales. Their team was efficient and easy to work with.',
      rating: 4
    },
    {
      id: 5,
      name: 'Mark',
      title: 'Director and MD',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      text: '(Company) Technologies built a fantastic website for us. It\'s user-friendly, looks great, and has boosted our online sales. Their team was efficient and easy to work with.',
      rating: 5
    },
    {
      id: 6,
      name: 'Sarah',
      title: 'Marketing Head',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      text: '(Company) Technologies built a fantastic website for us. It\'s user-friendly, looks great, and has boosted our online sales. Their team was efficient and easy to work with.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-blue-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg mx-4 min-w-80 max-w-80 h-64 flex flex-col">
      {/* Stars */}
      <div className="flex mb-4">
        {renderStars(testimonial.rating)}
      </div>
      
      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
        {testimonial.text}
      </p>
      
      {/* Author */}
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-3 object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
          <p className="text-gray-500 text-xs">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            <span className="text-blue-500">See through our clients.</span>
          </h2>
          <p className="text-gray-600 text-lg">Join the conversation! Make a difference!</p>
        </div>

        {/* First Row - Scrolling Right */}
        <div className="relative mb-8">
          <div className="flex animate-scroll-right">
            {/* First set */}
            <div className="flex">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={`row1-${testimonial.id}`} testimonial={testimonial} />
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={`row1-dup-${testimonial.id}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Scrolling Left */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {/* First set */}
            <div className="flex">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={`row2-${testimonial.id}`} testimonial={testimonial} />
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={`row2-dup-${testimonial.id}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Clients;