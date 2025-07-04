import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNavioDto } from './dto/create-navio.dto';
import { UpdateNavioDto } from './dto/update-navio.dto';

@Injectable()
export class NavioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createNavioDto: CreateNavioDto) {
    return this.prisma.navio.create({
      data: {
        nome_navio: createNavioDto.nome,
        imagem: createNavioDto.imagem,
        bandeira: createNavioDto.bandeira,
      },
    });
  }

  async findAll() {
    return this.prisma.navio.findMany();
  }

  async findOne(id: string) {
    const navio = await this.prisma.navio.findUnique({
      where: { id_navio: id },
    });

    if (!navio) {
      throw new NotFoundException(`Navio com id ${id} não encontrado`);
    }

    return navio;
  }

  async update(id: string, updateNavioDto: UpdateNavioDto) {
    await this.findOne(id); // lança erro se não encontrar

    return this.prisma.navio.update({
      where: { id_navio: id },
      data: {
        nome_navio: updateNavioDto.nome,
        imagem: updateNavioDto.imagem,
        bandeira: updateNavioDto.bandeira,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id); // lança erro se não encontrar

    return this.prisma.navio.delete({
      where: { id_navio: id },
    });
  }
}
