/*
  Warnings:

  - You are about to drop the `UsuarioLogro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UsuarioLogro";

-- CreateTable
CREATE TABLE "usuario_logro" (
    "idLogro" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idRecompensa" INTEGER NOT NULL,
    "fechaObtenido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_logro_pkey" PRIMARY KEY ("idLogro")
);
