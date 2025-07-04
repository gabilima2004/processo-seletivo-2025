import { PrismaService } from '../prisma/prisma.service';
import { CreateNavioDto } from './dto/create-navio.dto';
import { UpdateNavioDto } from './dto/update-navio.dto';
export declare class NavioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createNavioDto: CreateNavioDto): Promise<{
        id_navio: string;
        nome_navio: string;
        imagem: string;
        bandeira: string;
    }>;
    findAll(): Promise<{
        id_navio: string;
        nome_navio: string;
        imagem: string;
        bandeira: string;
    }[]>;
    findOne(id: string): Promise<{
        id_navio: string;
        nome_navio: string;
        imagem: string;
        bandeira: string;
    }>;
    update(id: string, updateNavioDto: UpdateNavioDto): Promise<{
        id_navio: string;
        nome_navio: string;
        imagem: string;
        bandeira: string;
    }>;
    remove(id: string): Promise<{
        id_navio: string;
        nome_navio: string;
        imagem: string;
        bandeira: string;
    }>;
}
