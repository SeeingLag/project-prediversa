import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-purple-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Prediversa</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Plataforma educativa dedicada a la prevención y tratamiento del bullying escolar, 
              promoviendo ambientes seguros y saludables para el aprendizaje.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-gray-300 hover:text-white transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link to="/mision-vision" className="text-gray-300 hover:text-white transition-colors">
                  Misión y Visión
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">info@prediversa.edu</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-purple-400 mt-1" />
                <span className="text-gray-300">
                  123 Calle Educación<br />
                  Ciudad, Estado 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Prediversa. Todos los derechos reservados. Desarrollado para promover ambientes escolares seguros.
          </p>
        </div>
      </div>
    </footer>
  );
}