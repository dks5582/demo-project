/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `city` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `country` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `state` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "city_name_key" ON "city"("name");

-- CreateIndex
CREATE UNIQUE INDEX "country_name_key" ON "country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "state_name_key" ON "state"("name");
