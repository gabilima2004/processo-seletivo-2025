import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNavioDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  imagem: string;

  @IsString()
  @IsNotEmpty()
  bandeira: string;
}
