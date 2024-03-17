import { Module } from '@nestjs/common';

import { EventController } from '@/modules/event/event.controller';
import { EventService } from '@/modules/event/event.service';
import { PrismaService } from '@/prisma.service';

@Module({
  imports: [],
  controllers: [EventController],
  providers: [PrismaService, EventService],
})
export class EventModule {}
