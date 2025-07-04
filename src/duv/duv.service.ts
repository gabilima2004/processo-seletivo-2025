import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDuvDto } from './dto/create-duv.dto';
import { UpdateDuvDto } from './dto/update-duv.dto';

@Injectable()
export class DuvService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDuvDto: CreateDuvDto) {
    const { numeroDuv, dataViagem, navioId, passageirosIds } = createDuvDto;

    const duv = await this.prisma.duv.create({
      data: {
        numeroDuv,
        dataViagem: new Date(dataViagem),
        navio: { connect: { id_navio: navioId } },
      },
    });

    // Cria os vínculos com os passageiros
    await this.prisma.duvPassageiro.createMany({
      data: passageirosIds.map((passageiroId) => ({
        duvId: duv.id_duv,
        passageiroId,
      })),
    });

    return duv;
  }

  async findAll() {
    return this.prisma.duv.findMany({
      include: {
        navio: true,
        passageiros: {
          include: {
            passageiro: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const duv = await this.prisma.duv.findUnique({
      where: { id_duv: id },
      include: {
        navio: true,
        passageiros: {
          include: {
            passageiro: true,
          },
        },
      },
    });

    if (!duv) {
      throw new NotFoundException(`DUV com id ${id} não encontrada`);
    }

    return duv;
  }

  async update(id: string, updateDuvDto: UpdateDuvDto) {
    await this.findOne(id); // Garante que a DUV existe

    const { numeroDuv, dataViagem, navioId, passageirosIds } = updateDuvDto;

    const updatedDuv = await this.prisma.duv.update({
      where: { id_duv: id },
      data: {
        numeroDuv,
        dataViagem: dataViagem ? new Date(dataViagem) : undefined,
        navioId,
      },
    });

    if (passageirosIds && passageirosIds.length > 0) {
      // Remove vínculos antigos
      await this.prisma.duvPassageiro.deleteMany({
        where: { duvId: id },
      });

      // Cria vínculos novos
      await this.prisma.duvPassageiro.createMany({
        data: passageirosIds.map((passageiroId) => ({
          duvId: id,
          passageiroId,
        })),
      });
    }

    return updatedDuv;
  }

  async remove(id: string) {
    await this.findOne(id);

    // Remove os vínculos primeiro
    await this.prisma.duvPassageiro.deleteMany({
      where: { duvId: id },
    });

    return this.prisma.duv.delete({
      where: { id_duv: id },
    });
  }
}
