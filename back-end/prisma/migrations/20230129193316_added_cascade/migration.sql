-- DropForeignKey
ALTER TABLE "Denuciation" DROP CONSTRAINT "Denuciation_drinkId_fkey";

-- AddForeignKey
ALTER TABLE "Denuciation" ADD CONSTRAINT "Denuciation_drinkId_fkey" FOREIGN KEY ("drinkId") REFERENCES "Drink"("id") ON DELETE CASCADE ON UPDATE CASCADE;
