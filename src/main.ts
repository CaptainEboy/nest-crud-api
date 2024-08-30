// https://www.topcoder.com/thrive/articles/build-nest-js-crud-api-with-mongodb

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
