import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';
export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;

}
