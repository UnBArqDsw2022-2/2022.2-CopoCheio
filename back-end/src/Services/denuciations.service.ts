import Prisma from '../prismaConection';

import { Denuciations } from '../Models/denuciation.model';
import { CreateDenuciationDto } from '../Dto/create-denuciation.dto';
import { UpdateDenuciationDto } from '../Dto/update-denuciation';
import { NotFoundRequestException } from '../Middlewares/httpExceptions';

const denuciation = new Denuciations(Prisma.denuciation);

export default class DenuciationsService {

  static async create(denuciationData: CreateDenuciationDto): Promise<CreateDenuciationDto> {
    return await denuciation.create(denuciationData);
  }

  static async update(denuciationData: UpdateDenuciationDto): Promise<UpdateDenuciationDto> {
    const denuciationExists = await this.findOne(denuciationData.id);
    if (!denuciationExists)
      throw new NotFoundRequestException('Denuciation not found');
    return await denuciation.update(denuciationData);
  }

  static async delete(id: string): Promise<void> {
    const denuciationExists = await denuciation.findOne(id);
    if (!denuciationExists)
      throw new NotFoundRequestException('Denuciation not found');
    await denuciation.delete(id);
  }

  static async findAll(): Promise<UpdateDenuciationDto[]> {
    return await denuciation.findAll();
  }

  static async findOne(id: string): Promise<UpdateDenuciationDto | null> {
    const result = await denuciation.findOne(id);
    if (!result)
      throw new NotFoundRequestException('Denuciation not found');
    return result;
  } 
}
