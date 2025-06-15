import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactReason: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Correo Electrónico',
      details: ['info@prediversa.edu', 'soporte@prediversa.edu'],
      description: 'Respuesta en 24 horas'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: 'Lunes a Viernes, 8:00 AM - 6:00 PM'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      details: ['123 Calle Educación', 'Ciudad, Estado 12345'],
      description: 'Oficinas principales'
    },
    {
      icon: Clock,
      title: 'Horarios de Atención',
      details: ['Lunes - Viernes: 8:00 AM - 6:00 PM', 'Sábados: 9:00 AM - 2:00 PM'],
      description: 'Zona horaria local'
    }
  ];

  const departments = [
    { value: 'general', label: 'Consulta General' },
    { value: 'support', label: 'Soporte Técnico' },
    { value: 'psychology', label: 'Consulta Psicológica' },
    { value: 'training', label: 'Capacitación y Talleres' },
    { value: 'partnership', label: 'Alianzas Institucionales' },
    { value: 'media', label: 'Medios de Comunicación' }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header isPublic />
        
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¡Mensaje Enviado!
              </h2>
              <p className="text-gray-600 mb-6">
                Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Enviar Otro Mensaje
              </button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header isPublic />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo 
              para cualquier consulta, soporte o información adicional
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Envíanos un Mensaje
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y nos pondremos en contacto contigo lo antes posible
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="contactReason" className="block text-sm font-medium text-gray-700 mb-2">
                    Motivo de Contacto *
                  </label>
                  <select
                    id="contactReason"
                    name="contactReason"
                    required
                    value={formData.contactReason}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    {departments.map((dept) => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Breve descripción del tema"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Describe tu consulta o mensaje en detalle..."
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>Nota:</strong> Para consultas urgentes relacionadas con situaciones de bullying activo, 
                  por favor contacta directamente a nuestro equipo de emergencia al +1 (555) 123-4567.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Necesitas Ayuda Inmediata?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Si estás enfrentando una situación de bullying que requiere atención inmediata, 
            no dudes en contactar a nuestro equipo de emergencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Llamar Ahora: +1 (555) 123-4567
            </a>
            <a
              href="mailto:emergencia@prediversa.edu"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-colors font-semibold inline-flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email de Emergencia
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}