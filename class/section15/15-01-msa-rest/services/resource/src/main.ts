import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: { host: 'resource-service', port: 3001 }, // 게이트웨이와 서비스를 똑같이 입력해야됨
    },
  );
  await app.listen();
}
bootstrap();
