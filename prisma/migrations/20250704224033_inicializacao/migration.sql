-- CreateTable
CREATE TABLE "Navio" (
    "id_navio" TEXT NOT NULL PRIMARY KEY,
    "nome_navio" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "bandeira" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Passageiro" (
    "id_passageiro" TEXT NOT NULL PRIMARY KEY,
    "nome_passageiro" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "sid" TEXT,
    "nacionalidade" TEXT NOT NULL,
    "tipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Duv" (
    "id_duv" TEXT NOT NULL PRIMARY KEY,
    "numeroDuv" TEXT NOT NULL,
    "dataViagem" DATETIME NOT NULL,
    "navioId" TEXT NOT NULL,
    CONSTRAINT "Duv_navioId_fkey" FOREIGN KEY ("navioId") REFERENCES "Navio" ("id_navio") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DuvPassageiro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "duvId" TEXT NOT NULL,
    "passageiroId" TEXT NOT NULL,
    CONSTRAINT "DuvPassageiro_duvId_fkey" FOREIGN KEY ("duvId") REFERENCES "Duv" ("id_duv") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DuvPassageiro_passageiroId_fkey" FOREIGN KEY ("passageiroId") REFERENCES "Passageiro" ("id_passageiro") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "DuvPassageiro_duvId_passageiroId_key" ON "DuvPassageiro"("duvId", "passageiroId");
