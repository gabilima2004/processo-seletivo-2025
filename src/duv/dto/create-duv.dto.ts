import { IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateDuvDto {
  @IsString()
  @IsNotEmpty()
  numeroDuv: string;

  @IsDateString()
  dataViagem: string;

  @IsString()
  @IsNotEmpty()
  navioId: string;

  @IsArray()
  passageirosIds: string[]; // lista de IDs dos passageiros
}
