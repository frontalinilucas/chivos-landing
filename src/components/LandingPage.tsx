import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Instagram, Twitter, Facebook, ArrowRight, Users, Store, DollarSign, Send } from 'lucide-react'

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('¡Gracias por contactarnos! Te responderemos pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Store className="w-8 h-8" />
          <span className="text-2xl font-bold">Chivos</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-purple-200 transition">Inicio</a>
          <a href="#how-it-works" className="hover:text-purple-200 transition">Cómo funciona</a>
          <a href="#benefits" className="hover:text-purple-200 transition">Beneficios</a>
          <a href="#contact" className="hover:text-purple-200 transition">Contacto</a>
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-purple-800 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="hover:text-purple-200 transition">Inicio</a>
            <a href="#how-it-works" className="hover:text-purple-200 transition">Cómo funciona</a>
            <a href="#benefits" className="hover:text-purple-200 transition">Beneficios</a>
            <a href="#contact" className="hover:text-purple-200 transition">Contacto</a>
          </nav>
        </div>
      )}

      <main>
        <section id="home" className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Conecta. Crea. Gana.</h1>
          <p className="text-xl md:text-2xl mb-10">Chivos une a creadores de contenido con restaurantes para campañas publicitarias impactantes.</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link to="/login/creator" className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition">Soy Creador</Link>
            <Link to="/login/restaurant" className="bg-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 transition">Soy Restaurante</Link>
          </div>
        </section>

        <section id="how-it-works" className="bg-white text-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Cómo funciona Chivos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                <h3 className="text-2xl font-semibold mb-2">Conecta</h3>
                <p>Únete a nuestra plataforma y conecta con marcas o creadores que se alineen con tus objetivos.</p>
              </div>
              <div className="text-center">
                <Store className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                <h3 className="text-2xl font-semibold mb-2">Colabora</h3>
                <p>Crea campañas publicitarias únicas y atractivas que resonarán con tu audiencia.</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                <h3 className="text-2xl font-semibold mb-2">Crece</h3>
                <p>Aumenta tus ingresos y expande tu alcance con colaboraciones estratégicas.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Beneficios de usar Chivos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-purple-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Para Creadores</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><ArrowRight className="mr-2" /> Monetiza tu audiencia</li>
                  <li className="flex items-center"><ArrowRight className="mr-2" /> Colabora con marcas reconocidas</li>
                  <li className="flex items-center"><ArrowRight className="mr-2" /> Crea contenido auténtico</li>
                </ul>
              </div>
              <div className="bg-purple-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Para Restaurantes</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><ArrowRight className="mr-2" /> Alcanza nuevas audiencias</li>
                  <li className="flex items-center"><ArrowRight className="mr-2" /> Publicidad orgánica y efectiva</li>
                  <li className="flex items-center"><ArrowRight className="mr-2" /> Aumenta tus ventas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-purple-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">¿Listo para empezar?</h2>
            <p className="text-xl mb-8">Contáctanos hoy y lleva tus colaboraciones al siguiente nivel</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nombre"
                  className="w-full px-4 py-2 rounded-md bg-white text-purple-900 placeholder-purple-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md bg-white text-purple-900 placeholder-purple-400"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Mensaje"
                  className="w-full px-4 py-2 rounded-md bg-white text-purple-900 placeholder-purple-400 h-32"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition flex items-center justify-center w-full">
                Enviar <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Store className="w-6 h-6" />
              <span className="text-xl font-bold">Chivos</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-200 transition"><Instagram /></a>
              <a href="#" className="hover:text-purple-200 transition"><Twitter /></a>
              <a href="#" className="hover:text-purple-200 transition"><Facebook /></a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm">
            © 2024 Chivos. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage