import React, { useState } from 'react';
import { Users, BarChart3, BookOpen, AlertTriangle, FileText, Plus } from 'lucide-react';

export function TeacherDashboard() {
  const [students] = useState([
    { id: '1', name: 'Ana García', grade: '8A', lastAssessment: '2024-03-10', riskLevel: 'Bajo', status: 'Activo' },
    { id: '2', name: 'Carlos Ruiz', grade: '8A', lastAssessment: '2024-03-08', riskLevel: 'Medio', status: 'Activo' },
    { id: '3', name: 'Sofia López', grade: '8B', lastAssessment: '2024-03-12', riskLevel: 'Bajo', status: 'Activo' },
    { id: '4', name: 'Miguel Torres', grade: '8A', lastAssessment: '2024-03-05', riskLevel: 'Alto', status: 'Requiere Atención' }
  ]);

  const [questionnaires] = useState([
    { id: '1', title: 'Evaluación Mensual de Ambiente Escolar', responses: 24, totalStudents: 30 },
    { id: '2', title: 'Autoevaluación de Bienestar Estudiantil', responses: 18, totalStudents: 30 }
  ]);

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'Bajo': return 'text-green-600 bg-green-100';
      case 'Medio': return 'text-yellow-600 bg-yellow-100';
      case 'Alto': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Activo': return 'text-green-600 bg-green-100';
      case 'Requiere Atención': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Panel Docente - María López</h1>
        <p className="text-indigo-100">
          Gestiona y monitorea el bienestar de tus estudiantes, accede a recursos pedagógicos y genera reportes.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Estudiantes</p>
              <p className="text-2xl font-bold text-gray-900">{students.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Cuestionarios Activos</p>
              <p className="text-2xl font-bold text-gray-900">{questionnaires.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Alertas</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Reportes</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Questionnaires */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Cuestionarios Activos</h2>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Cuestionario
          </button>
        </div>
        <div className="space-y-4">
          {questionnaires.map((questionnaire) => (
            <div key={questionnaire.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{questionnaire.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {questionnaire.responses} de {questionnaire.totalStudents} estudiantes han respondido
                  </p>
                  <div className="mt-2 w-64 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: `${(questionnaire.responses / questionnaire.totalStudents) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Ver Resultados
                  </button>
                  <button className="text-gray-600 hover:text-gray-700 font-medium">
                    Editar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Students List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Lista de Estudiantes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estudiante
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Última Evaluación
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nivel de Riesgo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{student.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.grade}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.lastAssessment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskLevelColor(student.riskLevel)}`}>
                      {student.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                      Ver Perfil
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      Contactar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recursos Pedagógicos</h2>
          <button className="text-indigo-600 hover:text-indigo-700 font-medium">
            Ver Todos
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="font-medium text-gray-900">Guía de Intervención Temprana</h3>
                <p className="text-sm text-gray-500 mt-1">Estrategias para identificar y abordar situaciones de riesgo</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-medium text-gray-900">Actividades de Convivencia</h3>
                <p className="text-sm text-gray-500 mt-1">Dinámicas para fortalecer las relaciones en el aula</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="font-medium text-gray-900">Herramientas de Evaluación</h3>
                <p className="text-sm text-gray-500 mt-1">Instrumentos para medir el clima escolar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}