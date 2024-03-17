import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EventModule } from '@/modules/event/event.module';
import { PrismaService } from '@/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), EventModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
