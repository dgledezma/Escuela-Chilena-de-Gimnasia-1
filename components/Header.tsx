
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-school-blue/90 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold text-school-gold hover:text-white transition-colors">
          Escuela Chilena de Gimnasia
        </a>
        <nav>
          <a
            href="https://echg.cl/intranet.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-school-gold text-school-blue font-bold py-2 px-4 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Intranet
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
