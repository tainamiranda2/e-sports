-- CreateTable
CREATE TABLE "Time" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jogador" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "time_id" INTEGER NOT NULL,

    CONSTRAINT "Jogador_pkey" PRIMARY KEY ("id")
);
