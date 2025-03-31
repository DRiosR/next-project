import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { nombre, correo, contraseña } = await req.json();

    // Validar que los campos no estén vacíos
    if (!nombre || !correo || !contraseña) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 });
    }

    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return NextResponse.json({ error: "Correo electrónico no válido" }, { status: 400 });
    }

    // Validar longitud de la contraseña
    if (contraseña.length < 6) {
      return NextResponse.json({ error: "La contraseña debe tener al menos 6 caracteres" }, { status: 400 });
    }

    // Verificar si el usuario ya existe
    const usuarioExistente = await prisma.usuario.findUnique({ where: { correo } });
    if (usuarioExistente) {
      return NextResponse.json({ error: "El correo ya está registrado" }, { status: 400 });
    }

    // Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Guardar usuario en la base de datos
    await prisma.usuario.create({
      data: {
        nombre,
        correo,
        contraseña: hashedPassword,
      },
    });

    return NextResponse.json({ message: "Usuario registrado exitosamente" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Error al registrar usuario" }, { status: 500 });
  }
}
