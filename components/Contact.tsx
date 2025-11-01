
import React from 'react';

const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const MapPinIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Formulario enviado. (Simulación)');
    // In a real app, you would handle form submission here.
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-school-blue mb-12">
          Contacto
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-school-blue mb-4">Información de Contacto</h3>
              <div className="space-y-4 text-lg">
                <a href="https://maps.app.goo.gl/xemvLYaEqgUquRacA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-school-blue transition-colors">
                  <MapPinIcon/>
                  <span>Coliseo Monumental de La Serena, La Serena</span>
                </a>
                <a href="tel:+56942022128" className="flex items-center gap-4 text-gray-700 hover:text-school-blue transition-colors">
                  <PhoneIcon/>
                  <span>+56 9 4202 2128</span>
                </a>
                 <a href="https://www.instagram.com/e.chilenadegimnasia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-school-blue text-white py-2 px-5 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
                    <InstagramIcon/>
                    <span>Síguenos en Instagram</span>
                </a>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.772583592182!2d-71.25831682444983!3d-29.98622117495079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca588a4422c5%3A0xe84a30e87d00f7e4!2sColiseo%20Monumental%20de%20La%20Serena!5e0!3m2!1ses-419!2scl!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la escuela"
              ></iframe>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-school-blue mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-school-blue focus:border-school-blue"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-school-blue focus:border-school-blue"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-school-blue focus:border-school-blue"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-school-gold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-school-gold transition-colors duration-300">
                  Enviar a contacto@echg.cl
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
