/*
  Warnings:

  - You are about to drop the column `drinkId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `drinkId` on the `Country` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_drinkId_fkey";

-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_drinkId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "drinkId";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "drinkId";

-- CreateTable
CREATE TABLE "CountriesOnDrinks" (
    "drinkId" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CountriesOnDrinks_pkey" PRIMARY KEY ("drinkId","countryId")
);

-- CreateTable
CREATE TABLE "CategoriesOnDrinks" (
    "drinkId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoriesOnDrinks_pkey" PRIMARY KEY ("drinkId","categoryId")
);

-- AddForeignKey
ALTER TABLE "CountriesOnDrinks" ADD CONSTRAINT "CountriesOnDrinks_drinkId_fkey" FOREIGN KEY ("drinkId") REFERENCES "Drink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CountriesOnDrinks" ADD CONSTRAINT "CountriesOnDrinks_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnDrinks" ADD CONSTRAINT "CategoriesOnDrinks_drinkId_fkey" FOREIGN KEY ("drinkId") REFERENCES "Drink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnDrinks" ADD CONSTRAINT "CategoriesOnDrinks_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
