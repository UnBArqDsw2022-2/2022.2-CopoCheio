import { PrismaClient, Favorite } from "@prisma/client";

import { FavoriteDto } from '../Dto/favorite.dto';

export class Favorites {
  constructor(private readonly prismaFavorite: PrismaClient['favorite']) { }

  async create(data: FavoriteDto): Promise<Favorite> {
    const { userId, drinId } = data;
    
    const favorite = this.prismaFavorite.create({
      data: {
        userId: userId!,
        drinkId: drinId,
      }
    });
    return favorite;
  }

  async findByUserIdAndDrinkId(data: FavoriteDto): Promise<Favorite | null> {
    return this.prismaFavorite.findUnique({
      where: {
        userId_drinkId: {
          userId: data.userId!,
          drinkId: data.drinId
        }
      }
    });
  }

  async delete(data: FavoriteDto): Promise<void> {
    this.prismaFavorite.delete({
      where: {
        userId_drinkId: {
          userId: data.userId!,
          drinkId: data.drinId
        }
      }
    })
  }
}