import { PrismaService } from '../prisma/prisma.service';
import { CreateDuvDto } from './dto/create-duv.dto';
import { UpdateDuvDto } from './dto/update-duv.dto';
export declare class DuvService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createDuvDto: CreateDuvDto): Promise<{
        numeroDuv: string;
        dataViagem: Date;
        navioId: string;
        id_duv: string;
    }>;
    findAll(): Promise<({
        navio: {
            imagem: string;
            bandeira: string;
            id_navio: string;
            nome_navio: string;
        };
        passageiros: ({
            passageiro: {
                foto: string;
                tipo: import(".prisma/client").$Enums.TipoPassageiro;
                sid: string | null;
                nacionalidade: string;
                id_passageiro: string;
                nome_passageiro: string;
            };
        } & {
            id: string;
            duvId: string;
            passageiroId: string;
        })[];
    } & {
        numeroDuv: string;
        dataViagem: Date;
        navioId: string;
        id_duv: string;
    })[]>;
    findOne(id: string): Promise<{
        navio: {
            imagem: string;
            bandeira: string;
            id_navio: string;
            nome_navio: string;
        };
        passageiros: ({
            passageiro: {
                foto: string;
                tipo: import(".prisma/client").$Enums.TipoPassageiro;
                sid: string | null;
                nacionalidade: string;
                id_passageiro: string;
                nome_passageiro: string;
            };
        } & {
            id: string;
            duvId: string;
            passageiroId: string;
        })[];
    } & {
        numeroDuv: string;
        dataViagem: Date;
        navioId: string;
        id_duv: string;
    }>;
    update(id: string, updateDuvDto: UpdateDuvDto): Promise<{
        numeroDuv: string;
        dataViagem: Date;
        navioId: string;
        id_duv: string;
    }>;
    remove(id: string): Promise<{
        numeroDuv: string;
        dataViagem: Date;
        navioId: string;
        id_duv: string;
    }>;
}
