/*
  Warnings:

  - A unique constraint covering the columns `[tag]` on the table `Link` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_conteudoId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Link_tag_key" ON "Link"("tag");

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_conteudoId_fkey" FOREIGN KEY ("conteudoId") REFERENCES "Conteudo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
