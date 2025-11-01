
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-school-blue text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Escuela Chilena de Gimnasia. Todos los derechos reservados.</p>
        <p className="text-sm text-gray-400 mt-2">
          Ubicada en el Coliseo Monumental de La Serena.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
