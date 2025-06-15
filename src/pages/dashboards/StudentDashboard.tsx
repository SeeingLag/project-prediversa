import React, { useState } from 'react';
import { BookOpen, MessageCircle, BarChart3, Play, FileText, Calendar } from 'lucide-react';

export function StudentDashboard() {
  const [completedQuestionnaires] = useState([
    { id: '1', title: 'Evaluación de Ambiente Escolar', date: '2024-03-10', score: 85 },
    { id: '2', title: 'Autoevaluación de Bienestar', date: '2024-03-05', score: 78 }
  ]);

  const [availableQuestionnaires] = useState([
    { id: '3', title: 'Relaciones Interpersonales', description: 'Evalúa tus relaciones con compañeros y profesores' },
    { id: '4', title: 'Gestión de Emociones', description: 'Identifica cómo manejas situaciones difíciles' }
  ]);

  const [resources] = useState([
    { id: '1', title: 'Cómo identificar el bullying', type: 'video', duration: '5 min' },
    { id: '2', title: 'Técnicas de autodefensa emocional', type: 'article', readTime: '8 min' },
    { id: '3', title: 'Guía: Hablar con un adulto de confianza', type: 'guide', pages: '12 páginas' }
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">¡Hola Ana! 👋</h1>
        <p className="text-blue-100">
          Bienvenida a tu espacio personal. Aquí puedes completar cuestionarios, acceder a recursos y obtener apoyo.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Cuestionarios Completados</p>
              <p className="text-2xl font-bold text-gray-900">{completedQuestionnaires.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Recursos Disponibles</p>
              <p className="text-2xl font-bold text-gray-900">{resources.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full">
              <MessageCircle className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Mensajes</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Available Questionnaires */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Cuestionarios Disponibles</h2>
        <div className="space-y-4">
          {availableQuestionnaires.map((questionnaire) => (
            <div key={questionnaire.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{questionnaire.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{questionnaire.description}</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Responder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recursos Educativos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource) => (
            <div key={resource.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  {resource.type === 'video' ? (
                    <Play className="h-5 w-5 text-gray-600" />
                  ) : resource.type === 'article' ? (
                    <FileText className="h-5 w-5 text-gray-600" />
                  ) : (
                    <BookOpen className="h-5 w-5 text-gray-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{resource.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {resource.type === 'video' ? resource.duration :
                     resource.type === 'article' ? resource.readTime : resource.pages}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2">
                    Ver recurso →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">¿Necesitas hablar con alguien?</h3>
            <p className="text-purple-100">
              Nuestro equipo de psicólogos está aquí para apoyarte. No dudes en contactarnos.
            </p>
          </div>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Contactar Psicólogo
          </button>
        </div>
      </div>
    </div>
  );
}