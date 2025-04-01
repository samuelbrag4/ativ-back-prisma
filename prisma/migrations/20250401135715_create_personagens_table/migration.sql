/*
  Warnings:

  - You are about to drop the `Anime` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Anime";

-- CreateTable
CREATE TABLE "animes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "episodes" INTEGER NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "studio" TEXT NOT NULL,
    "genres" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "animes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personagens" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "alive" BOOLEAN NOT NULL,
    "anime" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "personagens_pkey" PRIMARY KEY ("id")
);
