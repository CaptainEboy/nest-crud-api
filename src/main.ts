// https://www.topcoder.com/thrive/articles/build-nest-js-crud-api-with-mongodb
//https://docs.nestjs.com/openapi/introduction

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Added this part for swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Added this part for swagger
  const config = new DocumentBuilder()
    .setTitle('Captain Eboy Nestjs CRUD API')
    .setDescription('A nestjs CRUD Api Created by Ogunsanya Emmanuel using Nestjs and Swagger')
    .setVersion('1.0')
    .addTag('Captain Eboy')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);
}
bootstrap();
