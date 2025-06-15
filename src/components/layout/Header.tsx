import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface HeaderProps {
  isPublic?: boolean;
}

export function Header({ isPublic = false }: HeaderProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const publicNavItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Noticias', href: '/noticias' },
    { label: 'Misión y Visión', href: '/mision-vision' },
    { label: 'Contacto', href: '/contacto' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-purple-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Prediversa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isPublic ? (
              <>
                {publicNavItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/login"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Iniciar Sesión
                </Link>
              </>
            ) : (
              <>
                {user && (
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700 font-medium">{user.name}</span>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full capitalize">
                        {user.role}
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Salir</span>
                    </button>
                  </div>
                )}
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {isPublic ? (
              <div className="flex flex-col space-y-4">
                {publicNavItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/login"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-fit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Iniciar Sesión
                </Link>
              </div>
            ) : (
              user && (
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700 font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors w-fit"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Salir</span>
                  </button>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
}