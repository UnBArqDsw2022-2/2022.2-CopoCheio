import { UserDto } from './user.dto';
import { DrinkDto } from './drink.dto';

export class CreateDenuciationDto {
  id: string;
  title: string;
  comment: string;
  isView?: boolean;
  userId: string;
  drinkId: string;
  createdDate?: Date;
}