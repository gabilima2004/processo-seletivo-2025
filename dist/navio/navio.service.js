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
exports.NavioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NavioService = class NavioService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createNavioDto) {
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
    async findOne(id) {
        const navio = await this.prisma.navio.findUnique({
            where: { id_navio: id },
        });
        if (!navio) {
            throw new common_1.NotFoundException(`Navio com id ${id} não encontrado`);
        }
        return navio;
    }
    async update(id, updateNavioDto) {
        await this.findOne(id);
        return this.prisma.navio.update({
            where: { id_navio: id },
            data: {
                nome_navio: updateNavioDto.nome,
                imagem: updateNavioDto.imagem,
                bandeira: updateNavioDto.bandeira,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.navio.delete({
            where: { id_navio: id },
        });
    }
};
exports.NavioService = NavioService;
exports.NavioService = NavioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NavioService);
//# sourceMappingURL=navio.service.js.map