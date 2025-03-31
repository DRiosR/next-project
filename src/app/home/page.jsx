"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/registro/login"); // Redirige si no hay sesión
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Cierra sesión
    router.push("/registro/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">Bienvenido a Home</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded mt-4">
        Cerrar Sesión
      </button>
    </div>
  );
}
