import { PrismaClient, Favorite } from "@prisma/client";

import { FavoriteDto } from '../Dto/favorite.dto';

export class Favorites {
  constructor(private readonly prismaFavorite: PrismaClient['favorite']) { }

  async create(data: FavoriteDto): Promise<Favorite> {
    const { userId, drinkId } = data;
    
    const favorite = await this.prismaFavorite.create({
      data: {
        userId: userId!,
        drinkId: drinkId,
      }
    });
    return favorite;
  }

  async findByUserIdAndDrinkId(data: FavoriteDto): Promise<Favorite | null> {
    return await this.prismaFavorite.findUnique({
      where: {
        userId_drinkId: {
          userId: data.userId!,
          drinkId: data.drinkId
        }
      }
    });
  }

  async delete(data: FavoriteDto): Promise<void> {
    console.log(data)
    data.drinkId = 'fd542d06-78fb-407f-bca4-6d7416e46c31';
    data.userId = '72c8b16f-2e7d-4beb-baff-f88fbea8654c';
    await this.prismaFavorite.delete({
      where: {
        userId_drinkId: {
          drinkId: data.drinkId,
          userId: data.userId
        }
      }
    })
  }
}