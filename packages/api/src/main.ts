import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from '@/app.module';

const SWAGGER_ENVS = ['development'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // All routes must have an /api route prefix
  app.setGlobalPrefix('api');

  // TODO: Remove localhost when deploying to production
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
  });

  // Only allow Swagger UI in development
  if (SWAGGER_ENVS.includes(process.env.ENVIRONMENT as string)) {
    // Bootstrap Swagger UI
    const config = new DocumentBuilder()
      .setTitle('BlueSight API')
      .setDescription('The API of BlueSight.')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
  }

  await app.listen(process.env.PORT || 3001);

  // eslint-disable-next-line no-console
  console.log(`RUNNING ON PORT ${process.env.PORT || 3001}`);
}

void bootstrap();
