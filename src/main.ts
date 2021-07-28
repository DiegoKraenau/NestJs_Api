import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Validate body if accept any other field in json
    }),
  );

  await app.listen(3000);
  logger.log(`Server rendering in ${await app.getUrl()}`);
}
bootstrap();
