import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header isPublic />
        
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white py-8 px-6 shadow-lg rounded-lg text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Email enviado
              </h2>
              <p className="text-gray-600 mb-6">
                Hemos enviado las instrucciones para restablecer tu contraseña a <strong>{email}</strong>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Si no recibes el email en los próximos minutos, revisa tu carpeta de spam.
              </p>
              <Link
                to="/login"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
              >
                Volver al inicio de sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isPublic />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 mb-4">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">¿Olvidaste tu contraseña?</h1>
            <p className="mt-2 text-gray-600">
              No te preocupes, te ayudaremos a recuperarla
            </p>
          </div>

          <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="tu@email.com"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Ingresa el email asociado a tu cuenta y te enviaremos las instrucciones para restablecer tu contraseña.
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  'Enviar instrucciones'
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                to="/login"
                className="flex items-center justify-center text-sm text-purple-600 hover:text-purple-500"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Volver al inicio de sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}