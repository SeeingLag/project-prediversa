import React, { useState } from 'react';
import { User, BarChart3, BookOpen, AlertTriangle, Calendar, TrendingUp } from 'lucide-react';

export function ParentDashboard() {
  const [childData] = useState({
    name: 'Sofia García',
    grade: '8vo Grado',
    school: 'Colegio San Martín',
    lastAssessment: '2024-03-10'
  });

  const [assessmentHistory] = useState([
    { date: '2024-03-10', score: 85, status: 'Bueno', category: 'Ambiente Escolar' },
    { date: '2024-02-15', score: 78, status: 'Regular', category: 'Bienestar Emocional' },
    { date: '2024-01-20', score: 92, status: 'Excelente', category: 'Relaciones Sociales' }
  ]);

  const [recommendations] = useState([
    'Mantener comunicación abierta sobre las experiencias escolares',
    'Participar en actividades familiares que fortalezcan la autoestima',
    'Estar atento a cambios en el comportamiento o estado de ánimo'
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Excelente': return 'text-green-600 bg-green-100';
      case 'Bueno': return 'text-blue-600 bg-blue-100';
      case 'Regular': return 'text-yellow-600 bg-yellow-100';
      case 'Preocupante': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Panel de Seguimiento - Carlos Rodríguez</h1>
        <p className="text-green-100">
          Mantente informado sobre el bienestar y progreso de tu hijo/a en el entorno escolar.
        </p>
      </div>

      {/* Child Info Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Información del Estudiante</h2>
          <div className="bg-blue-100 p-2 rounded-full">
            <User className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-600">Nombre</p>
            <p className="text-lg font-semibold text-gray-900">{childData.name}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Grado</p>
            <p className="text-lg font-semibold text-gray-900">{childData.grade}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Institución</p>
            <p className="text-lg font-semibold text-gray-900">{childData.school}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Última Evaluación</p>
            <p className="text-lg font-semibold text-gray-900">{childData.lastAssessment}</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Promedio General</p>
              <p className="text-2xl font-bold text-gray-900">85</p>
              <p className="text-xs text-green-600">+5 desde el mes pasado</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Evaluaciones</p>
              <p className="text-2xl font-bold text-gray-900">{assessmentHistory.length}</p>
              <p className="text-xs text-blue-600">Completadas</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Alertas Activas</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
              <p className="text-xs text-green-600">Todo en orden</p>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment History */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Historial de Evaluaciones</h2>
          <TrendingUp className="h-5 w-5 text-gray-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Puntuación
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assessmentHistory.map((assessment, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {assessment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {assessment.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <span className="font-medium">{assessment.score}/100</span>
                      <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${assessment.score}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assessment.status)}`}>
                      {assessment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recomendaciones Personalizadas</h2>
        <div className="space-y-3">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-1 mt-1">
                <BookOpen className="h-3 w-3 text-blue-600" />
              </div>
              <p className="text-gray-700">{recommendation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">¿Tienes preocupaciones?</h3>
            <p className="text-blue-100">
              Contacta directamente con el equipo de apoyo psicológico de la institución.
            </p>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Solicitar Consulta
          </button>
        </div>
      </div>
    </div>
  );
}