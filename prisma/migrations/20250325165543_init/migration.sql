-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "Ejercicio" (
    "idEjercicio" SERIAL NOT NULL,
    "idNivel" INTEGER NOT NULL,
    "pregunta" TEXT NOT NULL,
    "respuestaCorrecta" TEXT NOT NULL,
    "opciones" TEXT NOT NULL,

    CONSTRAINT "Ejercicio_pkey" PRIMARY KEY ("idEjercicio")
);

-- CreateTable
CREATE TABLE "LogroRecompensa" (
    "idRecompensa" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "puntos" INTEGER NOT NULL,

    CONSTRAINT "LogroRecompensa_pkey" PRIMARY KEY ("idRecompensa")
);

-- CreateTable
CREATE TABLE "Nivel" (
    "idNivel" SERIAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL,

    CONSTRAINT "Nivel_pkey" PRIMARY KEY ("idNivel")
);

-- CreateTable
CREATE TABLE "Progreso" (
    "idProgreso" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idNivel" INTEGER NOT NULL,
    "completado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Progreso_pkey" PRIMARY KEY ("idProgreso")
);

-- CreateTable
CREATE TABLE "Respuesta" (
    "idRespuesta" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idEjercicio" INTEGER NOT NULL,
    "respuestaUsuario" TEXT NOT NULL,
    "esCorrecta" BOOLEAN NOT NULL,

    CONSTRAINT "Respuesta_pkey" PRIMARY KEY ("idRespuesta")
);

-- CreateTable
CREATE TABLE "UsuarioLogro" (
    "idLogro" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idRecompensa" INTEGER NOT NULL,
    "fechaObtenido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsuarioLogro_pkey" PRIMARY KEY ("idLogro")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");
