import { ApiProperty } from '@nestjs/swagger';

import type { ApiCreatedResponseType } from '@/common';

export class EventType {
  @ApiProperty({
    example: 'Sample Event',
  })
  title: string;

  @ApiProperty({
    example: 'This is a sample event.',
  })
  description: string;

  @ApiProperty({
    example: 'An Official Organization',
  })
  organizer: string;

  @ApiProperty({
    example: '2021-01-01T00:00:00Z',
  })
  dateStart: string | Date;

  @ApiProperty({
    example: '2021-01-02T00:00:00Z',
  })
  dateEnd: string | Date;

  @ApiProperty({
    example: 'Campus',
  })
  @ApiProperty()
  location: string;

  @ApiProperty({
    example: 'https://www.google.com/',
  })
  @ApiProperty()
  url: string;
}

export class EventResponseType {
  @ApiProperty({
    example: 200,
  })
  status: number;

  @ApiProperty({
    example: 'OK',
  })
  message: string;

  @ApiProperty({
    type: EventType,
    isArray: true,
  })
  data: EventType;
}

export class EventCreatedResponseType implements ApiCreatedResponseType {
  @ApiProperty({
    example: 201,
  })
  status: number;

  @ApiProperty({
    example: 'Created',
  })
  message: string;

  @ApiProperty({
    type: EventType,
  })
  data: EventType;
}
