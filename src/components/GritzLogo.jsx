import React from 'react';

const GritzLogo = ({ size = 'large', className = '' }) => {
  const dimensions = size === 'large' ? 'w-32 h-32' : 'w-16 h-16';
  
  return (
    <div className={`relative ${dimensions} ${className}`}>
      {/* Cracked circular background */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-600 relative overflow-hidden">
        {/* Crack effects */}
        <div className="absolute inset-0">
          {/* Multiple crack lines */}
          <div className="absolute top-2 left-4 w-px h-8 bg-gray-600 rotate-12"></div>
          <div className="absolute top-6 right-6 w-px h-6 bg-gray-600 -rotate-45"></div>
          <div className="absolute bottom-4 left-8 w-px h-10 bg-gray-600 rotate-75"></div>
          <div className="absolute top-8 left-2 w-8 h-px bg-gray-600 rotate-12"></div>
          <div className="absolute bottom-6 right-4 w-6 h-px bg-gray-600 -rotate-45"></div>
        </div>
        
        {/* GRITZ text in weathered style */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-yellow-400 font-black text-2xl tracking-wider filter drop-shadow-lg relative">
            <span className="relative z-10">GZ</span>
            {/* Weathered overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent rounded"></div>
          </span>
        </div>
        
        {/* Weathered texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-500/5 to-orange-500/5 mix-blend-overlay"></div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-md animate-pulse"></div>
    </div>
  );
};

export default GritzLogo;