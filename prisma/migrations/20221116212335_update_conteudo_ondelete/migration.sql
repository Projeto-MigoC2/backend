-- DropForeignKey
ALTER TABLE "Conteudo" DROP CONSTRAINT "Conteudo_moduloId_fkey";

-- AddForeignKey
ALTER TABLE "Conteudo" ADD CONSTRAINT "Conteudo_moduloId_fkey" FOREIGN KEY ("moduloId") REFERENCES "Modulo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
