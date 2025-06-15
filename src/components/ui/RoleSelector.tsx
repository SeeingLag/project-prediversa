import React from 'react';
import { UserRole } from '../../types/auth';
import { GraduationCap, Users, BookOpen, Stethoscope, Shield } from 'lucide-react';

interface RoleSelectorProps {
  selectedRole: UserRole;
  onRoleSelect: (role: UserRole) => void;
  className?: string;
}

const roles = [
  {
    value: 'estudiante' as UserRole,
    label: 'Estudiante',
    description: 'Acceso a cuestionarios y recursos educativos',
    icon: GraduationCap,
    color: 'bg-blue-50 border-blue-200 text-blue-800'
  },
  {
    value: 'padre' as UserRole,
    label: 'Padre/Madre',
    description: 'Seguimiento del progreso de su hijo/a',
    icon: Users,
    color: 'bg-green-50 border-green-200 text-green-800'
  },
  {
    value: 'profesor' as UserRole,
    label: 'Profesor',
    description: 'Gestión de estudiantes y recursos educativos',
    icon: BookOpen,
    color: 'bg-yellow-50 border-yellow-200 text-yellow-800'
  },
  {
    value: 'moderador' as UserRole,
    label: 'Moderador/Psicólogo',
    description: 'Análisis de resultados y soporte especializado',
    icon: Stethoscope,
    color: 'bg-purple-50 border-purple-200 text-purple-800'
  },
  {
    value: 'administrador' as UserRole,
    label: 'Administrador',
    description: 'Gestión completa del sistema',
    icon: Shield,
    color: 'bg-red-50 border-red-200 text-red-800'
  }
];

export function RoleSelector({ selectedRole, onRoleSelect, className = '' }: RoleSelectorProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {roles.map((role) => {
        const Icon = role.icon;
        const isSelected = selectedRole === role.value;
        
        return (
          <button
            key={role.value}
            type="button"
            onClick={() => onRoleSelect(role.value)}
            className={`
              p-4 rounded-lg border-2 transition-all duration-200 text-left
              ${isSelected 
                ? 'border-purple-500 bg-purple-50 shadow-md' 
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              }
            `}
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${isSelected ? 'bg-purple-100' : role.color}`}>
                <Icon className={`h-5 w-5 ${isSelected ? 'text-purple-600' : ''}`} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className={`font-medium ${isSelected ? 'text-purple-900' : 'text-gray-900'}`}>
                  {role.label}
                </h3>
                <p className={`text-sm mt-1 ${isSelected ? 'text-purple-700' : 'text-gray-500'}`}>
                  {role.description}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}