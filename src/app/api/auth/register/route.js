import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const register = async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Desestructurar datos de la solicitud
      const { username, email, password } = req.body;

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
      const newUser = await prisma.user.create({
        data: {
          username: username,
          email: email,
          password: hashedPassword,
        },
      });

      return res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      // Capturar el error y devolver un mensaje genérico
      return res.status(500).json({ message: 'Error en el registro del usuario' });
    }
  } else {
    // Si el método no es POST
    return res.status(405).json({ message: 'Método no permitido' });
  }
};

export default register;
