// src/passageiro/dto/create-passageiro.dto.ts

import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePassageiroDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  foto: string;

  @IsString()
  @IsOptional()
  sid?: string; // só obrigatório se for tripulante

  @IsString()
  @IsNotEmpty()
  nacionalidade: string;
}
