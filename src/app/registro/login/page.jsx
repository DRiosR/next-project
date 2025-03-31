// src/app/registro/login/page.jsx
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-6">Bienvenido de nuevo</h1>
        <p className="text-center mb-4">Por favor ingresa tus credenciales para acceder a tu cuenta.</p>
        
        <form>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              required 
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              placeholder="Contraseña" 
              required 
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            Iniciar sesión
          </button>
        </form>
        
        <p className="mt-4 text-center">
          ¿No tienes cuenta? <Link href="/registro/register" className="text-blue-500">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}
