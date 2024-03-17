import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseType {
  @ApiProperty({
    example: 200,
  })
  status: number;

  @ApiProperty({
    example: 'OK',
  })
  message: string;
}

export class ApiCreatedResponseType implements ApiResponseType {
  @ApiProperty({
    example: 200,
  })
  status: number;

  @ApiProperty({
    example: 'OK',
  })
  message: string;

  @ApiProperty({
    example: {
      id: 1,
      name: 'Event 1',
      date: '2021-01-01',
    },
  })
  data: any;
}
