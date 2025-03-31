import bcrypt from 'bcrypt';
import { prisma } from "@/lib/prisma"; // Conexión a la base de datos

const prisma = new PrismaClient();

// Método POST para registro
export async function POST(req, res) {
  try {
    const { username, email, password } = await req.json();

    // Verificar que los campos no estén vacíos
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    // Verificar si el usuario o correo ya existen
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch {
    return res.status(500).json({ message: 'Error en el registro del usuario' });
  }
}
