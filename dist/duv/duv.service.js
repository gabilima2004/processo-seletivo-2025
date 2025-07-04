"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuvService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DuvService = class DuvService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDuvDto) {
        const { numeroDuv, dataViagem, navioId, passageirosIds } = createDuvDto;
        const duv = await this.prisma.duv.create({
            data: {
                numeroDuv,
                dataViagem: new Date(dataViagem),
                navio: { connect: { id_navio: navioId } },
            },
        });
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
    async findOne(id) {
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
            throw new common_1.NotFoundException(`DUV com id ${id} não encontrada`);
        }
        return duv;
    }
    async update(id, updateDuvDto) {
        await this.findOne(id);
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
            await this.prisma.duvPassageiro.deleteMany({
                where: { duvId: id },
            });
            await this.prisma.duvPassageiro.createMany({
                data: passageirosIds.map((passageiroId) => ({
                    duvId: id,
                    passageiroId,
                })),
            });
        }
        return updatedDuv;
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.duvPassageiro.deleteMany({
            where: { duvId: id },
        });
        return this.prisma.duv.delete({
            where: { id_duv: id },
        });
    }
};
exports.DuvService = DuvService;
exports.DuvService = DuvService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DuvService);
//# sourceMappingURL=duv.service.js.map