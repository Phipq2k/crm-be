import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationError } from 'class-validator';
import { AppModule } from './app.module';
import { Ultils } from './utils/templates/utils.template';
import { ExceptionResponse } from './utils/exceptions/response.exception';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(process.env.CONFIG_PREFIX || 'api/v1');

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('CRM Swagger')
    .setDescription('CRM API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: false,
    }),
  );

  await app.listen(process.env.CONFIG_PORT);

  console.log(
    `Application is running on: http://localhost:${process.env.CONFIG_PORT}/docs`,
  );
}
bootstrap();
