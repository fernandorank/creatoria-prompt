import React from 'react';

const Banner: React.FC = () => {
  const bannerImageUrl = 'https://fernandorank.com/wp-content/uploads/2025/09/3c29889a50c8498882e7dc4bb1e02ad4-1-scaled.webp';
  
  return (
    <div className="relative w-full h-72 md:h-80 overflow-hidden">
      <img
        src={bannerImageUrl}
        alt="AI Course Platform Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
    </div>
  );
};

export default Banner;