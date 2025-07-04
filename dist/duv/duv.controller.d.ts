import { DuvService } from './duv.service';
import { CreateDuvDto } from './dto/create-duv.dto';
import { UpdateDuvDto } from './dto/update-duv.dto';
export declare class DuvController {
    private readonly duvService;
    constructor(duvService: DuvService);
    create(createDuvDto: CreateDuvDto): Promise<{
        id_duv: string;
        numeroDuv: string;
        dataViagem: Date;
        navioId: string;
    }>;
    findAll(): Promise<({
        navio: {
            id_navio: string;
            nome_navio: string;
            imagem: string;
            bandeira: string;
        };
        passageiros: ({
            passageiro: {
                id_passageiro: string;
                nome_passageiro: string;
                foto: string;
                sid: string | null;
                nacionalidade: string;
                tipo: import(".prisma/client").$Enums.TipoPassageiro;
            };
        } & {
            id: string;
            duvId: string;
            passageiroId: string;
        })[];
    } & {
        id_duv: string;
        numeroDuv: string;
        dataViagem: Date;
        navioId: string;
    })[]>;
    findOne(id: string): Promise<{
        navio: {
            id_navio: string;
            nome_navio: string;
            imagem: string;
            bandeira: string;
        };
        passageiros: ({
            passageiro: {
                id_passageiro: string;
                nome_passageiro: string;
                foto: string;
                sid: string | null;
                nacionalidade: string;
                tipo: import(".prisma/client").$Enums.TipoPassageiro;
            };
        } & {
            id: string;
            duvId: string;
            passageiroId: string;
        })[];
    } & {
        id_duv: string;
        numeroDuv: string;
        dataViagem: Date;
        navioId: string;
    }>;
    update(id: string, updateDuvDto: UpdateDuvDto): Promise<{
        id_duv: string;
        numeroDuv: string;
        dataViagem: Date;
        navioId: string;
    }>;
    remove(id: string): Promise<{
        id_duv: string;
        numeroDuv: string;
        dataViagem: Date;
        navioId: string;
    }>;
}
