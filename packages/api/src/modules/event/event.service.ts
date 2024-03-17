import { type EventType } from '@cyrilolanolan/bluesight-dto';
import { Injectable } from '@nestjs/common';
import { Event } from '@prisma/client';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async getEvents(): Promise<Event[]> {
    const events = await this.prisma.event.findMany();

    return events;
  }

  async addEvent(eventData: EventType): Promise<Event> {
    const event = await this.prisma.event.create({
      data: eventData,
    });

    return event;
  }
}
