import { PrismaService } from '../prisma/prisma.service';
import { CreatePassageiroDto } from './dto/create-passageiro.dto';
import { UpdatePassageiroDto } from './dto/update-passageiro.dto';
export declare class PassageiroService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPassageiroDto: CreatePassageiroDto): Promise<{
        id_passageiro: string;
        nome_passageiro: string;
        foto: string;
        sid: string | null;
        nacionalidade: string;
        tipo: import(".prisma/client").$Enums.TipoPassageiro;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id_passageiro: string;
        nome_passageiro: string;
        foto: string;
        sid: string | null;
        nacionalidade: string;
        tipo: import(".prisma/client").$Enums.TipoPassageiro;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PassageiroClient<{
        id_passageiro: string;
        nome_passageiro: string;
        foto: string;
        sid: string | null;
        nacionalidade: string;
        tipo: import(".prisma/client").$Enums.TipoPassageiro;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updatePassageiroDto: UpdatePassageiroDto): import(".prisma/client").Prisma.Prisma__PassageiroClient<{
        id_passageiro: string;
        nome_passageiro: string;
        foto: string;
        sid: string | null;
        nacionalidade: string;
        tipo: import(".prisma/client").$Enums.TipoPassageiro;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PassageiroClient<{
        id_passageiro: string;
        nome_passageiro: string;
        foto: string;
        sid: string | null;
        nacionalidade: string;
        tipo: import(".prisma/client").$Enums.TipoPassageiro;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
