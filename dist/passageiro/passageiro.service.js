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
exports.PassageiroService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PassageiroService = class PassageiroService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPassageiroDto) {
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
    findOne(id) {
        return this.prisma.passageiro.findUnique({
            where: { id_passageiro: id },
        });
    }
    update(id, updatePassageiroDto) {
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
    remove(id) {
        return this.prisma.passageiro.delete({
            where: { id_passageiro: id.toString() },
        });
    }
};
exports.PassageiroService = PassageiroService;
exports.PassageiroService = PassageiroService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PassageiroService);
//# sourceMappingURL=passageiro.service.js.map