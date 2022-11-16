/*
  Warnings:

  - Added the required column `exemplo` to the `Modulo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Modulo" ADD COLUMN     "exemplo" TEXT NOT NULL;
