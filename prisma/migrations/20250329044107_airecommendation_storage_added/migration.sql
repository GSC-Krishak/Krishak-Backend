/*
  Warnings:

  - Added the required column `userId` to the `soilReport` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "recommendations_requestId_key";

-- AlterTable
ALTER TABLE "soilReport" ADD COLUMN     "generation" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AIrecomendation" (
    "id" TEXT NOT NULL,
    "request" JSONB NOT NULL,
    "response" JSONB NOT NULL,

    CONSTRAINT "AIrecomendation_pkey" PRIMARY KEY ("id")
);
