
import React from 'react';

const coaches = [
    { name: 'Carolina Alarcón Carreño', role: 'Directora Técnica', instagram: 'https://www.instagram.com/carolinaalarcon' },
    { name: 'Rosario Muñoz Norero', role: 'Entrenadora', instagram: 'https://www.instagram.com/rosariomunoz' },
    { name: 'Julieta Valdebenito Del Solar', role: 'Entrenadora', instagram: 'https://www.instagram.com/julietavaldebenito' },
    { name: 'Lucia Morales Araya', role: 'Entrenadora', instagram: 'https://www.instagram.com/luciamorales' },
    { name: 'Yacay Olcese Farías', role: 'Entrenador / Juez Nacional', instagram: 'https://www.instagram.com/yacayolcese' },
    { name: 'Javiera Tello Marín', role: 'Entrenadora', instagram: 'https://www.instagram.com/javieratello' },
    { name: 'Gustavo Valenzuela Molina', role: 'Entrenador / Juez Nacional', instagram: 'https://www.instagram.com/gustavovalenzuela' },
    { name: 'Luis Guzmán Vejar', role: 'Entrenador', instagram: 'https://www.instagram.com/luisguzman' },
];

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-school-blue mb-12">
          Quiénes Somos
        </h2>
        
        <div className="max-w-4xl mx-auto text-center text-lg text-gray-700 space-y-6 mb-16">
          <p>
            Bajo la dirección de <span className="font-bold text-school-blue">Luis Salazar Esparza</span> y la dirección técnica de <span className="font-bold text-school-blue">Carolina Alarcón Carreño</span>, una de nuestras más reconocidas ex-gimnastas, nuestra escuela se dedica a la formación integral de niños y niñas de 5 a 15 años.
          </p>
          <p>
            Nos enorgullece contar con un equipo de 8 entrenadores, todos ex-gimnastas de excelencia formados en nuestra institución. Nuestro legado continúa con gimnastas de nivel nacional como <span className="font-semibold text-school-gold">Pascal Jimenez Durán</span> y <span className="font-semibold text-school-gold">Josefa Jamet Santos</span>.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center text-school-blue mb-10">Nuestro Equipo de Entrenadores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {coaches.map((coach) => (
            <div key={coach.name} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <img src={`https://picsum.photos/seed/${coach.name}/200`} alt={coach.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-school-gold"/>
              <h4 className="text-lg font-bold text-school-blue">{coach.name}</h4>
              <p className="text-school-gold mb-3">{coach.role}</p>
              <a href={coach.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                Ver Instagram
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
