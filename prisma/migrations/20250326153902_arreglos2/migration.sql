/*
  Warnings:

  - You are about to drop the `Ejercicio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nivel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Progreso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Respuesta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Ejercicio";

-- DropTable
DROP TABLE "Nivel";

-- DropTable
DROP TABLE "Progreso";

-- DropTable
DROP TABLE "Respuesta";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "usuario" (
    "idUsuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "ejercicio" (
    "idEjercicio" SERIAL NOT NULL,
    "idNivel" INTEGER NOT NULL,
    "pregunta" TEXT NOT NULL,
    "respuestaCorrecta" TEXT NOT NULL,
    "opciones" TEXT NOT NULL,

    CONSTRAINT "ejercicio_pkey" PRIMARY KEY ("idEjercicio")
);

-- CreateTable
CREATE TABLE "nivel" (
    "idNivel" SERIAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL,

    CONSTRAINT "nivel_pkey" PRIMARY KEY ("idNivel")
);

-- CreateTable
CREATE TABLE "progreso" (
    "idProgreso" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idNivel" INTEGER NOT NULL,
    "completado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "progreso_pkey" PRIMARY KEY ("idProgreso")
);

-- CreateTable
CREATE TABLE "respuesta" (
    "idRespuesta" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idEjercicio" INTEGER NOT NULL,
    "respuestaUsuario" TEXT NOT NULL,
    "esCorrecta" BOOLEAN NOT NULL,

    CONSTRAINT "respuesta_pkey" PRIMARY KEY ("idRespuesta")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_correo_key" ON "usuario"("correo");
