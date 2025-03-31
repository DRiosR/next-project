// src/app/registro/login/page.jsx
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">Bienvenido de nuevo</h1>
        <p className="text-center text-gray-400 mb-4">Por favor ingresa tus credenciales para acceder a tu cuenta.</p>
        
        <form>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              required 
              className="w-full p-3 bg-gray-700 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              placeholder="Contraseña" 
              required 
              className="w-full p-3 bg-gray-700 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            Iniciar sesión
          </button>
        </form>
        
        <p className="mt-4 text-center text-gray-400">
          ¿No tienes cuenta? <Link href="/registro/register" className="text-blue-400 hover:text-blue-500">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}
