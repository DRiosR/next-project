// src/app/registro/register/page.jsx
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">¡Crea tu cuenta!</h1>
        <p className="text-center text-gray-400 mb-4">Ingresa tus datos para registrarte y comenzar a disfrutar de la aplicación.</p>
        
        <form>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              required 
              className="w-full p-3 bg-gray-700 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              placeholder="Contraseña" 
              required 
              className="w-full p-3 bg-gray-700 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              placeholder="Confirmar Contraseña" 
              required 
              className="w-full p-3 bg-gray-700 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
            Registrarme
          </button>
        </form>
        
        <p className="mt-4 text-center text-gray-400">
          ¿Ya tienes cuenta? <Link href="/registro/login" className="text-blue-400 hover:text-blue-500">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
}
