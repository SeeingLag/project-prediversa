import React, { useState } from 'react';
import { 
  Users, BarChart3, Settings, Shield, FileText, TrendingUp, 
  Plus, Edit, Trash2, Eye, AlertTriangle, Calendar 
} from 'lucide-react';

export function AdminDashboard() {
  const [systemStats] = useState({
    totalUsers: 1247,
    activeStudents: 856,
    teachers: 42,
    parents: 324,
    moderators: 8,
    completedAssessments: 2341,
    activeAlerts: 12
  });

  const [recentUsers] = useState([
    { id: '1', name: 'Laura Méndez', email: 'laura@email.com', role: 'estudiante', status: 'Activo', joinDate: '2024-03-15' },
    { id: '2', name: 'Roberto Vega', email: 'roberto@email.com', role: 'profesor', status: 'Activo', joinDate: '2024-03-14' },
    { id: '3', name: 'Carmen Flores', email: 'carmen@email.com', role: 'padre', status: 'Pendiente', joinDate: '2024-03-13' }
  ]);

  const [systemAlerts] = useState([
    { id: '1', type: 'security', message: 'Intento de acceso no autorizado detectado', time: '2 min', priority: 'Alta' },
    { id: '2', type: 'system', message: 'Actualización del sistema completada', time: '1 hora', priority: 'Info' },
    { id: '3', type: 'data', message: 'Respaldo de datos programado iniciado', time: '3 horas', priority: 'Media' }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Activo': return 'text-green-600 bg-green-100';
      case 'Pendiente': return 'text-yellow-600 bg-yellow-100';
      case 'Inactivo': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'text-red-600 bg-red-100';
      case 'Media': return 'text-yellow-600 bg-yellow-100';
      case 'Info': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'administrador': return 'text-red-600 bg-red-100';
      case 'moderador': return 'text-purple-600 bg-purple-100';
      case 'profesor': return 'text-blue-600 bg-blue-100';
      case 'padre': return 'text-green-600 bg-green-100';
      case 'estudiante': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-600 to-purple-700 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Panel de Administración - Sistema Prediversa</h1>
        <p className="text-red-100">
          Control total del sistema: gestión de usuarios, configuración, reportes y monitoreo de seguridad.
        </p>
      </div>

      {/* System Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-full">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <p className="text-xs font-medium text-gray-600">Total Usuarios</p>
              <p className="text-xl font-bold text-gray-900">{systemStats.totalUsers.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-full">
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <div className="ml-3">
              <p className="text-xs font-medium text-gray-600">Estudiantes</p>
              <p className="text-xl font-bold text-gray-900">{systemStats.activeStudents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-purple-100 p-2 rounded-full">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <div className="ml-3">
              <p className="text-xs font-medium text-gray-600">Padres</p>
              <p className="text-xl font-bold text-gray-900">{systemStats.parents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-indigo-100 p-2 rounded-full">
              <Users className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="ml-3">
              <p className="text-xs font-medium text-gray-600">Profesores</p>
              <p className="text-xl font-bold text-gray-900">{systemStats.teachers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-pink-100 p-2 rounded-full">
              <Shield className="h-5 w-5 text-pink-600" />
            </div>
            <div className="ml-3">
              <p className="text-xs font-medium text-gray-600">Moderadores</p>
              <p className="text-xl font-bold text-gray-900">{systemStats.moderators}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-2 rounded-full">
              <BarChart3 className="h-5 w-5 text-yellow-600" />
            </div>
            <div className="ml-3">
              <p className="text-xs font-medium text-gray-600">Evaluaciones</p>
              <p className="text-xl font-bold text-gray-900">{systemStats.completedAssessments.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-full">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div className="ml-3">
              <p className="text-xs font-medium text-gray-600">Alertas</p>
              <p className="text-xl font-bold text-gray-900">{systemStats.activeAlerts}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Plus className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Crear Usuario</p>
              <p className="text-sm text-gray-500">Agregar nuevo usuario al sistema</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="bg-green-100 p-2 rounded-lg">
              <FileText className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Generar Reporte</p>
              <p className="text-sm text-gray-500">Estadísticas del sistema</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Settings className="h-5 w-5 text-purple-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Configuración</p>
              <p className="text-sm text-gray-500">Ajustes del sistema</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Calendar className="h-5 w-5 text-yellow-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Programar Backup</p>
              <p className="text-sm text-gray-500">Respaldo de datos</p>
            </div>
          </button>
        </div>
      </div>

      {/* Recent Users and System Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Usuarios Recientes</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Ver Todos
            </button>
          </div>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-1 text-gray-400 hover:text-blue-600">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-green-600">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Alertas del Sistema</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Ver Todas
            </button>
          </div>
          <div className="space-y-4">
            {systemAlerts.map((alert) => (
              <div key={alert.id} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(alert.priority)}`}>
                        {alert.priority}
                      </span>
                      <span className="text-xs text-gray-500">{alert.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Health */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bol text-gray-900 mb-4">Estado del Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Rendimiento</h3>
            <p className="text-2xl font-bold text-green-600 mt-1">98.5%</p>
            <p className="text-sm text-gray-500">Tiempo de actividad</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Seguridad</h3>
            <p className="text-2xl font-bold text-blue-600 mt-1">Óptima</p>
            <p className="text-sm text-gray-500">Sin amenazas detectadas</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Uso de Recursos</h3>
            <p className="text-2xl font-bold text-purple-600 mt-1">67%</p>
            <p className="text-sm text-gray-500">Capacidad utilizada</p>
          </div>
        </div>
      </div>
    </div>
  );
}