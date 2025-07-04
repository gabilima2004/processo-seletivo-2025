import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePassageiroDto } from './dto/create-passageiro.dto';
import { UpdatePassageiroDto } from './dto/update-passageiro.dto';

@Injectable()
export class PassageiroService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createPassageiroDto: CreatePassageiroDto) {
    // Verificando o tipo de passageiro
    const tipo = createPassageiroDto.sid ? 'TRIPULANTE' : 'PASSAGEIRO';
    const novoPassageiro = await this.prisma.passageiro.create({
      data: {
        nome_passageiro: createPassageiroDto.nome,
        foto: createPassageiroDto.foto,
        tipo,
        sid: createPassageiroDto.sid,
        nacionalidade: createPassageiroDto.nacionalidade,
      },
    });

    return novoPassageiro;
  }

  findAll() {
    return this.prisma.passageiro.findMany();
  }

  findOne(id: string) {
    return this.prisma.passageiro.findUnique({
      where: { id_passageiro: id },
    });
  }

  update(id: string, updatePassageiroDto: UpdatePassageiroDto) {
    const tipo = updatePassageiroDto.sid ? 'TRIPULANTE' : 'PASSAGEIRO';
    return this.prisma.passageiro.update({
      where: { id_passageiro: id },
      data: {
        nome_passageiro: updatePassageiroDto.nome,
        foto: updatePassageiroDto.foto,
        tipo,
        sid: updatePassageiroDto.sid,
        nacionalidade: updatePassageiroDto.nacionalidade,
      },
    });
  }

  remove(id: string) {
    return this.prisma.passageiro.delete({
      where: { id_passageiro: id.toString() },
    });
  }
}
