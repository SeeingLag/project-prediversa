import React, { useState } from 'react';
import { Users, TrendingUp, AlertTriangle, MessageCircle, FileText, Calendar, BarChart3 } from 'lucide-react';

export function ModeratorDashboard() {
  const [alertCases] = useState([
    { 
      id: '1', 
      student: 'Miguel Torres', 
      grade: '8A', 
      riskLevel: 'Alto', 
      lastContact: '2024-03-12',
      status: 'En Seguimiento',
      priority: 'Urgente'
    },
    { 
      id: '2', 
      student: 'Carmen Silva', 
      grade: '7B', 
      riskLevel: 'Medio', 
      lastContact: '2024-03-10',
      status: 'Programada Consulta',
      priority: 'Media'
    }
  ]);

  const [recentMessages] = useState([
    { id: '1', from: 'Ana García (Estudiante)', subject: 'Necesito ayuda con situación en clase', time: '2 horas', unread: true },
    { id: '2', from: 'Carlos Ruiz (Padre)', subject: 'Consulta sobre comportamiento de mi hijo', time: '1 día', unread: false },
    { id: '3', from: 'Prof. María López', subject: 'Situación que requiere intervención', time: '2 días', unread: true }
  ]);

  const [weeklyStats] = useState({
    consultations: 12,
    assessmentsReviewed: 45,
    reportsGenerated: 8,
    interventions: 3
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgente': return 'text-red-600 bg-red-100';
      case 'Alta': return 'text-orange-600 bg-orange-100';
      case 'Media': return 'text-yellow-600 bg-yellow-100';
      case 'Baja': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'Alto': return 'text-red-600 bg-red-100';
      case 'Medio': return 'text-yellow-600 bg-yellow-100';
      case 'Bajo': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Centro de Control Psicológico - Dr. José Martínez</h1>
        <p className="text-purple-100">
          Monitorea el bienestar estudiantil, gestiona intervenciones y genera reportes especializados.
        </p>
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Consultas Esta Semana</p>
              <p className="text-2xl font-bold text-gray-900">{weeklyStats.consultations}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Evaluaciones Revisadas</p>
              <p className="text-2xl font-bold text-gray-900">{weeklyStats.assessmentsReviewed}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Reportes Generados</p>
              <p className="text-2xl font-bold text-gray-900">{weeklyStats.reportsGenerated}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Intervenciones</p>
              <p className="text-2xl font-bold text-gray-900">{weeklyStats.interventions}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Priority Cases */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Casos Prioritarios</h2>
          <div className="flex space-x-2">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
              Ver Urgentes
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              Todos los Casos
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estudiante
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nivel de Riesgo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prioridad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Último Contacto
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
              {alertCases.map((case_) => (
                <tr key={case_.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{case_.student}</div>
                      <div className="text-sm text-gray-500">{case_.grade}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskLevelColor(case_.riskLevel)}`}>
                      {case_.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(case_.priority)}`}>
                      {case_.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {case_.lastContact}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {case_.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-purple-600 hover:text-purple-900 mr-3">
                      Ver Detalle
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Contactar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Messages and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Messages */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Mensajes Recientes</h2>
          <div className="space-y-4">
            {recentMessages.map((message) => (
              <div key={message.id} className={`p-4 rounded-lg border ${message.unread ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{message.from}</p>
                    <p className="text-sm text-gray-600 mt-1">{message.subject}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {message.time}
                    {message.unread && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full ml-2 inline-block"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-purple-600 hover:text-purple-700 font-medium">
            Ver Todos los Mensajes
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Acciones Rápidas</h2>
          <div className="grid grid-cols-1 gap-4">
            <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-blue-100 p-2 rounded-lg">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Generar Reporte Semanal</p>
                <p className="text-sm text-gray-500">Estadísticas y análisis de tendencias</p>
              </div>
            </button>

            <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-green-100 p-2 rounded-lg">
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Programar Consulta</p>
                <p className="text-sm text-gray-500">Agendar cita con estudiante o familia</p>
              </div>
            </button>

            <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-purple-100 p-2 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Análisis de Tendencias</p>
                <p className="text-sm text-gray-500">Revisar patrones y evolución de casos</p>
              </div>
            </button>

            <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Users className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Crear Recurso Educativo</p>
                <p className="text-sm text-gray-500">Agregar material de apoyo</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Protocolo de Emergencia</h3>
            <p className="text-red-100">
              Para situaciones críticas que requieren intervención inmediata
            </p>
          </div>
          <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Activar Protocolo
          </button>
        </div>
      </div>
    </div>
  );
}