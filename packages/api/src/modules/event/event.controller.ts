import {
  EventCreatedResponseType,
  EventResponseType,
  EventType,
} from '@cyrilolanolan/bluesight-dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { Event } from '@prisma/client';

import { EventService } from '@/modules/event/event.service';

@Controller('/events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  @ApiResponse({ type: EventResponseType, isArray: true })
  getEvents(): Promise<EventType[]> {
    return this.eventService.getEvents();
  }

  @Post()
  @ApiCreatedResponse({ type: EventCreatedResponseType })
  addEvent(@Body() eventData: EventType): Promise<Event> {
    return this.eventService.addEvent(eventData);
  }
}
