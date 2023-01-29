-- DropForeignKey
ALTER TABLE "CategoriesOnDrinks" DROP CONSTRAINT "CategoriesOnDrinks_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnDrinks" DROP CONSTRAINT "CategoriesOnDrinks_drinkId_fkey";

-- DropForeignKey
ALTER TABLE "CountriesOnDrinks" DROP CONSTRAINT "CountriesOnDrinks_countryId_fkey";

-- DropForeignKey
ALTER TABLE "CountriesOnDrinks" DROP CONSTRAINT "CountriesOnDrinks_drinkId_fkey";

-- AddForeignKey
ALTER TABLE "CountriesOnDrinks" ADD CONSTRAINT "CountriesOnDrinks_drinkId_fkey" FOREIGN KEY ("drinkId") REFERENCES "Drink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CountriesOnDrinks" ADD CONSTRAINT "CountriesOnDrinks_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnDrinks" ADD CONSTRAINT "CategoriesOnDrinks_drinkId_fkey" FOREIGN KEY ("drinkId") REFERENCES "Drink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnDrinks" ADD CONSTRAINT "CategoriesOnDrinks_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
