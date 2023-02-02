export class UpdateDenuciationDto {
  id: string;
  title: string;
  comment: string;
  isView: boolean;
  userId?: string;
  drinkId?: string;
  createdDate?: Date;
}