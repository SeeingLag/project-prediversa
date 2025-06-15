import React from 'react';
import { Header } from '../components/layout/Header';
import { useAuth } from '../context/AuthContext';
import { StudentDashboard } from './dashboards/StudentDashboard';
import { ParentDashboard } from './dashboards/ParentDashboard';
import { TeacherDashboard } from './dashboards/TeacherDashboard';
import { ModeratorDashboard } from './dashboards/ModeratorDashboard';
import { AdminDashboard } from './dashboards/AdminDashboard';

export function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'estudiante':
        return <StudentDashboard />;
      case 'padre':
        return <ParentDashboard />;
      case 'profesor':
        return <TeacherDashboard />;
      case 'moderador':
        return <ModeratorDashboard />;
      case 'administrador':
        return <AdminDashboard />;
      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-600">Rol no reconocido</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderDashboard()}
      </main>
    </div>
  );
}