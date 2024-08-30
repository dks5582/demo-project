-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3),
    "createdbyid" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isactive" BOOLEAN NOT NULL DEFAULT true,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdbyid" INTEGER,
    "updatedbyid" INTEGER,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "sortingseq" INTEGER,
    "syncid" TEXT,

    CONSTRAINT "country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "state" (
    "id" SERIAL NOT NULL,
    "countryid" INTEGER,
    "name" TEXT NOT NULL,
    "isactive" BOOLEAN NOT NULL DEFAULT true,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdbyid" INTEGER,
    "updatedbyid" INTEGER,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "sortingseq" INTEGER,
    "syncid" TEXT,

    CONSTRAINT "state_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "city" (
    "id" SERIAL NOT NULL,
    "stateid" INTEGER,
    "countryid" INTEGER,
    "name" TEXT NOT NULL,
    "isactive" BOOLEAN NOT NULL DEFAULT true,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdbyid" INTEGER,
    "updatedbyid" INTEGER,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "sortingseq" INTEGER,
    "syncid" TEXT,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "country_name_key" ON "country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "state_name_key" ON "state"("name");

-- CreateIndex
CREATE UNIQUE INDEX "city_name_key" ON "city"("name");

-- AddForeignKey
ALTER TABLE "country" ADD CONSTRAINT "country_createdbyid_fkey" FOREIGN KEY ("createdbyid") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "state" ADD CONSTRAINT "state_countryid_fkey" FOREIGN KEY ("countryid") REFERENCES "country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "state" ADD CONSTRAINT "state_createdbyid_fkey" FOREIGN KEY ("createdbyid") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "city_stateid_fkey" FOREIGN KEY ("stateid") REFERENCES "state"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "city_countryid_fkey" FOREIGN KEY ("countryid") REFERENCES "country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "city_createdbyid_fkey" FOREIGN KEY ("createdbyid") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
