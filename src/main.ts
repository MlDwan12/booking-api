import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule);

  await app.listen(port ?? 3000, () =>
    console.log(`The server is running on ${port} port`),
  );
}
bootstrap();
