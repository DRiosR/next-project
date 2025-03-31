// src/app/registro/register/page.jsx
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-6">¡Crea tu cuenta!</h1>
        <p className="text-center mb-4">Ingresa tus datos para registrarte y comenzar a disfrutar de la aplicación.</p>
        
        <form>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              required 
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              placeholder="Contraseña" 
              required 
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              placeholder="Confirmar Contraseña" 
              required 
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
            Registrarme
          </button>
        </form>
        
        <p className="mt-4 text-center">
          ¿Ya tienes cuenta? <Link href="/registro/login" className="text-blue-500">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
}
