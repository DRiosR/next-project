import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import { prisma } from '../../../../prisma'; // Prisma

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Verifica si el usuario existe
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        return res.status(400).json({ message: 'Usuario no encontrado' });
      }

      // Verifica la contraseña (en producción usa bcrypt)
      if (password !== user.password) {  // Debes encriptar y comparar con bcrypt
        return res.status(400).json({ message: 'Contraseña incorrecta' });
      }

      // Genera el JWT
      const token = sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Establece la cookie
      res.setHeader('Set-Cookie', serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Solo en HTTPS en producción
        sameSite: 'Strict',
        path: '/',
        maxAge: 60 * 60, // 1 hora
      }));

      return res.status(200).json({ message: 'Login exitoso' });
    } catch (error) {
      return res.status(500).json({ message: 'Error en el servidor', error });
    }
  } else {
    return res.status(405).json({ message: 'Método no permitido' });
  }
}
