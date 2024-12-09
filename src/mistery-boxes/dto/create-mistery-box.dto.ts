import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMisteryBoxDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNumber()
  restaurantId: number;
}
