import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function NewsPage() {
  const featuredNews = {
    title: 'Nuevo Protocolo de Prevención del Bullying 2024',
    summary: 'Implementamos un protocolo integral que incluye detección temprana, intervención inmediata y seguimiento personalizado para cada caso.',
    content: 'Este protocolo revolucionario combina tecnología avanzada con el expertise de nuestros psicólogos especializados...',
    date: '20 de Marzo, 2024',
    author: 'Equipo Prediversa',
    image: 'https://images.pexels.com/photos/8617653/pexels-photo-8617653.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Protocolo'
  };

  const newsItems = [
    {
      id: '1',
      title: 'Taller para Padres: "Comunicación Efectiva con Adolescentes"',
      summary: 'Aprende técnicas de comunicación que fortalecen la confianza y mejoran la relación con tus hijos.',
      date: '18 de Marzo, 2024',
      author: 'Dra. Carmen Silva',
      image: 'https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Talleres'
    },
    {
      id: '2',
      title: 'Resultados del Estudio: "Impacto del Bullying en el Rendimiento Académico"',
      summary: 'Investigación revela datos importantes sobre cómo el acoso escolar afecta el desempeño estudiantil.',
      date: '15 de Marzo, 2024',
      author: 'Dr. José Martínez',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Investigación'
    },
    {
      id: '3',
      title: 'Historia de Éxito: "De Víctima a Líder Estudiantil"',
      summary: 'Conoce la inspiradora historia de María, quien superó el bullying y ahora ayuda a otros estudiantes.',
      date: '12 de Marzo, 2024',
      author: 'Equipo Editorial',
      image: 'https://images.pexels.com/photos/8617657/pexels-photo-8617657.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Testimonios'
    },
    {
      id: '4',
      title: 'Nuevas Herramientas Digitales para Docentes',
      summary: 'Plataforma actualizada incluye recursos interactivos para identificar y abordar situaciones de riesgo.',
      date: '10 de Marzo, 2024',
      author: 'Equipo Técnico',
      image: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Tecnología'
    },
    {
      id: '5',
      title: 'Conferencia Internacional: "Prevención del Bullying en la Era Digital"',
      summary: 'Expertos mundiales comparten estrategias para combatir el ciberbullying y sus efectos.',
      date: '8 de Marzo, 2024',
      author: 'Comité Organizador',
      image: 'https://images.pexels.com/photos/8617659/pexels-photo-8617659.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Eventos'
    },
    {
      id: '6',
      title: 'Guía Práctica: "Primeros Auxilios Emocionales para Estudiantes"',
      summary: 'Manual completo con técnicas de apoyo inmediato para situaciones de crisis emocional.',
      date: '5 de Marzo, 2024',
      author: 'Dra. Ana Rodríguez',
      image: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Recursos'
    }
  ];

  const categories = ['Todos', 'Protocolo', 'Talleres', 'Investigación', 'Testimonios', 'Tecnología', 'Eventos', 'Recursos'];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Protocolo': 'bg-red-100 text-red-800',
      'Talleres': 'bg-blue-100 text-blue-800',
      'Investigación': 'bg-green-100 text-green-800',
      'Testimonios': 'bg-purple-100 text-purple-800',
      'Tecnología': 'bg-indigo-100 text-indigo-800',
      'Eventos': 'bg-yellow-100 text-yellow-800',
      'Recursos': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isPublic />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Noticias y Actualizaciones
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Mantente informado sobre las últimas novedades, investigaciones y recursos 
              en la prevención del bullying escolar
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredNews.category)}`}>
                    {featuredNews.category}
                  </span>
                  <span className="text-sm text-gray-500">Destacado</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredNews.summary}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredNews.date}</span>
                  <User className="h-4 w-4 mr-2" />
                  <span>{featuredNews.author}</span>
                </div>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center">
                  Leer Artículo Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'Todos' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-purple-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.summary}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{item.date}</span>
                    <User className="h-4 w-4 mr-2" />
                    <span>{item.author}</span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                    Leer más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mantente Informado
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín y recibe las últimas noticias y recursos 
            directamente en tu correo electrónico
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-r-lg font-semibold hover:bg-yellow-300 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}