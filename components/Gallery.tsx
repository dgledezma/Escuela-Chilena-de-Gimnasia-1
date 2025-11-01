
import React from 'react';

const images = [
  'https://picsum.photos/id/103/600/400',
  'https://picsum.photos/id/219/600/400',
  'https://picsum.photos/id/305/600/400',
  'https://picsum.photos/id/326/600/400',
  'https://picsum.photos/id/431/600/400',
  'https://picsum.photos/id/433/600/400',
  'https://picsum.photos/id/577/600/400',
  'https://picsum.photos/id/582/600/400',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-school-blue mb-12">
          Galería de Fotos y Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-w-3 aspect-h-2">
              <img 
                src={src} 
                alt={`Gimnasia ${index + 1}`} 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 cursor-pointer" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
