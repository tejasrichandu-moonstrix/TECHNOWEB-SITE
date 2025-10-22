import React from 'react';

const Partners = () => {
  const partners = [
    'Partner 1',
    'Partner 2', 
    'Partner 3',
    'Partner 4',
    'Partner 5',
    'Partner 6',
    'Partner 7',
    'Partner 8',
    'Partner 9',
    'Partner 10'
  ];

  return (
    <div className="bg-gray-100 py-20 overflow-hidden">
      {/* Blue header bar */}
      
      <div className="relative bg-[#EBEBEB] py-16">
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of partners */}
          <div className="flex items-center whitespace-nowrap">
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="flex items-center mx-8">
                {/* Square icon */}
                <div className="w-4 h-4 border-2 border-gray-800 mr-4 flex-shrink-0"></div>
                {/* Partner name */}
                <span className="text-gray-800 text-lg">{partner}</span>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center whitespace-nowrap">
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="flex items-center mx-8">
                {/* Square icon */}
                <div className="w-4 h-4 border-2 border-gray-800 mr-4 flex-shrink-0"></div>
                {/* Partner name */}
                <span className="text-gray-800 text-lg font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Partners;