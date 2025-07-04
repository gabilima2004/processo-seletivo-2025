import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavioModule } from './navio/navio.module';
import { PassageiroModule } from './passageiro/passageiro.module';
import { DuvModule } from './duv/duv.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [NavioModule, PassageiroModule, DuvModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
