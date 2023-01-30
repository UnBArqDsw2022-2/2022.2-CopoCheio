import { PrismaClient, Denuciation } from "@prisma/client";

import { CreateDenuciationDto } from '../Dto/create-denuciation.dto';
import { UpdateDenuciationDto } from "../Dto/update-denuciation";

export class Denuciations {
  constructor(private readonly prismaDenuciation: PrismaClient['denuciation']) {}

    async create(data: CreateDenuciationDto): Promise<CreateDenuciationDto> {
      const { title, comment, drinkId, userId } = data;

      const denuciation = await this.prismaDenuciation.create({
        data: {
          title,
          comment,
          drinkId,
          userId,
          isView: false
        },
         select: {
          id: true,
          title: true,
          comment: true,
          isView: true,
          drinkId: true,
          userId: true,
          createdDate: true,
          drink: {
            select: {
              id: true,
              name: true
            }
          },
          user: {
            select: {
              id: true,
              nameComplete: true,
              email: true
            }
          }
         }
      });
      
      return denuciation;
  }

  async findAll(): Promise<UpdateDenuciationDto[]> {
    return await this.prismaDenuciation.findMany();
  }

  async findOne(id: string): Promise<UpdateDenuciationDto | null> {
    return await this.prismaDenuciation.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(data: UpdateDenuciationDto): Promise<UpdateDenuciationDto> {
    const { id, title, comment, isView } = data;

    const denuciation = await this.prismaDenuciation.update({
      where: {
        id: id
      },
      data: {
        title, 
        comment,
        isView
      }
    });

    return denuciation;
  }

  async delete(id: string): Promise<void> {
    await this.prismaDenuciation.delete({
      where: {
        id
      }
    });
  }
}