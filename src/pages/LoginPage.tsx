import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { RoleSelector } from '../components/ui/RoleSelector';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { useAuth } from '../context/AuthContext';
import { UserRole, LoginFormData } from '../types/auth';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

export function LoginPage() {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    role: 'estudiante'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Por favor completa todos los campos');
      return;
    }

    const success = await login(formData.email, formData.password, formData.role);
    
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Credenciales incorrectas. Intenta con email: ana@estudiante.com, password: password123');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRoleSelect = (role: UserRole) => {
    setFormData(prev => ({ ...prev, role }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isPublic />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Iniciar Sesión</h1>
            <p className="mt-2 text-gray-600">
              Accede a tu cuenta en Prediversa
            </p>
          </div>

          <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selector de Rol */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Selecciona tu rol
                </label>
                <RoleSelector 
                  selectedRole={formData.role}
                  onRoleSelect={handleRoleSelect}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Demo Credentials */}
              <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                <p className="text-sm text-blue-700 font-medium">Credenciales de demostración:</p>
                <div className="text-xs text-blue-600 mt-1 space-y-1">
                  <div>Estudiante: ana@estudiante.com</div>
                  <div>Padre: carlos@padre.com</div>
                  <div>Profesor: maria@profesor.com</div>
                  <div>Moderador: jose@moderador.com</div>
                  <div>Admin: admin@admin.com</div>
                  <div className="font-medium">Contraseña: password123</div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  'Iniciar Sesión'
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center space-y-2">
                <Link
                  to="/forgot-password"
                  className="text-sm text-purple-600 hover:text-purple-500"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
                <p className="text-sm text-gray-600">
                  ¿No tienes cuenta?{' '}
                  <Link to="/register" className="text-purple-600 hover:text-purple-500 font-medium">
                    Regístrate aquí
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}