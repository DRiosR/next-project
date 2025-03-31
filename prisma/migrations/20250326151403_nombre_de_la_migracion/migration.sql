/*
  Warnings:

  - You are about to drop the `LogroRecompensa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "LogroRecompensa";

-- CreateTable
CREATE TABLE "Logro_recompensa" (
    "idRecompensa" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "puntos" INTEGER NOT NULL,

    CONSTRAINT "Logro_recompensa_pkey" PRIMARY KEY ("idRecompensa")
);
