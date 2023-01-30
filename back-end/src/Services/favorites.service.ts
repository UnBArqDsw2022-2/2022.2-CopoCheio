
import Prisma from "../prismaConection";

import { Favorites } from "../models/favorite.model";
import { FavoriteDto } from "../Dto/favorite.dto";
import { BadRequestException } from "../Middlewares/httpExceptions";

const favorite = new Favorites(Prisma.favorite);

export default class FavoritesService {

  static async favoriteDrink(favoriteData: FavoriteDto): Promise<void> {
    if (!(favoriteData.userId && favoriteData.drinkId))
      throw new BadRequestException('Parameters invalid');

    const alreadyExists = await favorite.findByUserIdAndDrinkId(favoriteData);
    console.log('aqui')
    console.log(alreadyExists)
    if (alreadyExists)
      await favorite.delete(favoriteData);
    else 
      await favorite.create(favoriteData);
  }
}