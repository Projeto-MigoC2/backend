/*
  Warnings:

  - You are about to drop the column `links` on the `Conteudo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Conteudo" DROP COLUMN "links";

-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "conteudoId" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_conteudoId_fkey" FOREIGN KEY ("conteudoId") REFERENCES "Conteudo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
