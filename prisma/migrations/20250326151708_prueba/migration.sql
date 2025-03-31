/*
  Warnings:

  - You are about to drop the `Logro_recompensa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Logro_recompensa";

-- CreateTable
CREATE TABLE "logro_recompensa" (
    "idRecompensa" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "puntos" INTEGER NOT NULL,

    CONSTRAINT "logro_recompensa_pkey" PRIMARY KEY ("idRecompensa")
);
