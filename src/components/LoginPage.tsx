import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { LogIn, ArrowLeft } from 'lucide-react'

const LoginPage: React.FC = () => {
  const { userType } = useParams<{ userType: string }>();
  const navigate = useNavigate();

  const simulateLogin = () => {
    // Simular inicio de sesión
    console.log("Usuario logueado");
    navigate('/marketplace');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col items-center justify-center px-4">
      <Link to="/" className="absolute top-4 left-4 text-white hover:text-purple-200 transition flex items-center">
        <ArrowLeft className="mr-2" /> Volver
      </Link>
      <h1 className="text-4xl font-bold mb-8">
        {userType === 'creator' ? 'Iniciar sesión como Creador' : 'Iniciar sesión como Restaurante'}
      </h1>
      <button
        onClick={simulateLogin}
        className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition flex items-center"
      >
        <LogIn className="mr-2" /> Iniciar sesión con Google
      </button>
    </div>
  )
}

export default LoginPage