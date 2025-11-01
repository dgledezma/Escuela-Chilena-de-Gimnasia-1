
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1050')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg leading-tight">
          Formando Campeones, Forjando Carácter
        </h1>
        <p className="text-lg md:text-2xl text-school-gold font-semibold">
          Escuela Chilena de Gimnasia - La Serena
        </p>
      </div>
    </section>
  );
};

export default Hero;
