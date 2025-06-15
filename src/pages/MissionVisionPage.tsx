import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Target, Eye, Heart, Users, Shield, BookOpen } from 'lucide-react';

export function MissionVisionPage() {
  const values = [
    {
      icon: Heart,
      title: 'Empatía',
      description: 'Comprendemos y nos conectamos con las experiencias de cada miembro de nuestra comunidad educativa.'
    },
    {
      icon: Shield,
      title: 'Protección',
      description: 'Creamos entornos seguros donde cada estudiante puede desarrollarse sin temor al acoso o la discriminación.'
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos unidos con estudiantes, familias, educadores y profesionales para lograr nuestros objetivos.'
    },
    {
      icon: BookOpen,
      title: 'Educación',
      description: 'Promovemos el aprendizaje continuo sobre prevención, detección y tratamiento del bullying escolar.'
    }
  ];

  const objectives = [
    'Reducir significativamente los casos de bullying en las instituciones educativas participantes',
    'Mejorar el clima escolar y las relaciones interpersonales entre estudiantes',
    'Capacitar a educadores en técnicas de detección temprana y manejo de situaciones de acoso',
    'Empoderar a los estudiantes con herramientas para defenderse y apoyar a sus compañeros',
    'Involucrar activamente a las familias en la prevención y solución de problemas de convivencia',
    'Generar investigación y datos que contribuyan al conocimiento sobre bullying escolar'
  ];

  const team = [
    {
      name: 'Dra. María Elena Rodríguez',
      role: 'Directora General',
      specialty: 'Psicología Educativa',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Dr. Carlos Mendoza',
      role: 'Director de Investigación',
      specialty: 'Psicología Clínica Infantil',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Lic. Ana Sofía Torres',
      role: 'Coordinadora de Programas',
      specialty: 'Trabajo Social Escolar',
      image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Dr. Roberto Vega',
      role: 'Especialista en Tecnología Educativa',
      specialty: 'Innovación Digital',
      image: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isPublic />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestra Misión y Visión
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Conoce los principios que guían nuestro compromiso con la creación de 
              ambientes escolares seguros y saludables para todos los estudiantes
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Nuestra Misión</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Prediversa tiene como misión <strong>prevenir, detectar y tratar el bullying escolar</strong> 
                mediante una plataforma integral que combina tecnología avanzada, expertise psicológico 
                y metodologías educativas innovadoras. Trabajamos para crear ambientes escolares seguros, 
                inclusivos y saludables donde cada estudiante pueda desarrollar su máximo potencial sin 
                temor al acoso o la discriminación.
              </p>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <p className="text-purple-800 font-medium">
                  "Cada estudiante merece un entorno educativo libre de violencia y lleno de oportunidades para crecer."
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Nuestra Visión</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser la <strong>plataforma líder en Latinoamérica</strong> para la prevención y tratamiento 
                del bullying escolar, reconocida por su impacto positivo en la transformación de las 
                dinámicas escolares. Aspiramos a un futuro donde todas las instituciones educativas 
                cuenten con herramientas efectivas para crear comunidades escolares basadas en el 
                respeto, la empatía y la colaboración.
              </p>
              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <p className="text-indigo-800 font-medium">
                  "Visualizamos escuelas donde la diversidad se celebra y cada voz es escuchada y valorada."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores Fundamentales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada una de nuestras acciones y decisiones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Objetivos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Metas concretas que nos impulsan hacia un cambio positivo en la educación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
                <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo Directivo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesionales comprometidos con la excelencia en la prevención del bullying escolar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Únete a Nuestra Misión
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Juntos podemos crear un futuro donde cada estudiante se sienta seguro, 
            valorado y empoderado para alcanzar sus sueños
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Conocer Nuestros Programas
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
              Contactar al Equipo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}