import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Heart, Shield, Users, BookOpen, Star, ArrowRight, Mail, Phone } from 'lucide-react';

export function HomePage() {
  const values = [
    {
      icon: Heart,
      title: 'Respeto y Empatía',
      description: 'Promovemos el respeto mutuo y la comprensión entre todos los miembros de la comunidad educativa.'
    },
    {
      icon: Shield,
      title: 'Ambiente Seguro',
      description: 'Trabajamos para crear espacios seguros donde cada estudiante pueda desarrollarse plenamente.'
    },
    {
      icon: Users,
      title: 'Comunidad Unida',
      description: 'Fortalecemos los lazos entre estudiantes, padres y educadores para enfrentar juntos el bullying.'
    },
    {
      icon: BookOpen,
      title: 'Educación Integral',
      description: 'Proporcionamos herramientas educativas para prevenir y abordar situaciones de acoso escolar.'
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      role: 'Madre de familia',
      content: 'Prediversa me ha ayudado a entender mejor lo que vive mi hijo en la escuela y cómo puedo apoyarlo.',
      rating: 5
    },
    {
      name: 'Prof. Carlos Ruiz',
      role: 'Docente',
      content: 'Una herramienta invaluable para detectar tempranamente situaciones de bullying en el aula.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      role: 'Estudiante',
      content: 'Me siento más segura sabiendo que hay un lugar donde puedo expresar mis preocupaciones.',
      rating: 5
    }
  ];

  const newsItems = [
    {
      title: 'Nuevo programa de prevención del bullying',
      summary: 'Implementamos estrategias innovadoras para crear ambientes escolares más seguros.',
      date: '15 de Marzo, 2024',
      image: 'https://images.pexels.com/photos/8617653/pexels-photo-8617653.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Taller para padres: Identificando señales de acoso',
      summary: 'Aprende a reconocer los signos del bullying y cómo actuar de manera efectiva.',
      date: '10 de Marzo, 2024',
      image: 'https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Testimonio: Superando el bullying con apoyo',
      summary: 'Historia inspiradora de recuperación y crecimiento personal.',
      date: '5 de Marzo, 2024',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isPublic />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Creando Ambientes
              <span className="block text-yellow-300">Escolares Seguros</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              Prediversa es tu plataforma aliada en la prevención y tratamiento del bullying escolar. 
              Juntos construimos espacios de respeto, empatía y crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                Iniciar Sesión
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/register"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors inline-flex items-center justify-center"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Institucionales */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro compromiso con la educación y el bienestar estudiantil
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Últimas Noticias
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mantente informado sobre nuestras últimas iniciativas y programas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-purple-600 mb-2">{item.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  <Link 
                    to="/noticias"
                    className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
                  >
                    Leer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dice nuestra comunidad
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experiencias reales de familias y educadores que confían en Prediversa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas ayuda?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Estamos aquí para apoyarte. Contáctanos si tienes preguntas o necesitas asistencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-purple-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-purple-100">info@prediversa.edu</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p className="text-purple-100">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/contacto"
              className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center"
            >
              Contactar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}