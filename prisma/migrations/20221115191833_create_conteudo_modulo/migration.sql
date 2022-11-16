-- CreateTable
CREATE TABLE "Conteudo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "corpo" TEXT NOT NULL,
    "links" JSONB[],
    "moduloId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conteudo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modulo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Modulo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Conteudo_nome_key" ON "Conteudo"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Modulo_nome_key" ON "Modulo"("nome");

-- AddForeignKey
ALTER TABLE "Conteudo" ADD CONSTRAINT "Conteudo_moduloId_fkey" FOREIGN KEY ("moduloId") REFERENCES "Modulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
