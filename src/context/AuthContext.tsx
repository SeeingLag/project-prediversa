import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType, UserRole, RegisterData } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Datos de ejemplo para demostración
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ana García',
    email: 'ana@estudiante.com',
    role: 'estudiante',
    createdAt: new Date()
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    email: 'carlos@padre.com',
    role: 'padre',
    createdAt: new Date()
  },
  {
    id: '3',
    name: 'María López',
    email: 'maria@profesor.com',
    role: 'profesor',
    createdAt: new Date()
  },
  {
    id: '4',
    name: 'Dr. José Martínez',
    email: 'jose@moderador.com',
    role: 'moderador',
    createdAt: new Date()
  },
  {
    id: '5',
    name: 'Admin Sistema',
    email: 'admin@admin.com',
    role: 'administrador',
    createdAt: new Date()
  }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga inicial desde localStorage
    const savedUser = localStorage.getItem('prediversa_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('prediversa_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    setIsLoading(true);
    
    // Simular llamada a API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find(u => u.email === email && u.role === role);
    
    if (foundUser && password === 'password123') {
      setUser(foundUser);
      localStorage.setItem('prediversa_user', JSON.stringify(foundUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (data: RegisterData): Promise<boolean> => {
    setIsLoading(true);
    
    // Simular llamada a API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Verificar si el email ya existe
    const existingUser = mockUsers.find(u => u.email === data.email);
    if (existingUser) {
      setIsLoading(false);
      return false;
    }
    
    const newUser: User = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      role: data.role,
      createdAt: new Date()
    };
    
    mockUsers.push(newUser);
    setUser(newUser);
    localStorage.setItem('prediversa_user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('prediversa_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}