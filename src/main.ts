import { AccessTokenGuard } from './common/guards/access-token.guard';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as morgan from 'morgan';
import { Request } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*'
  });

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AccessTokenGuard(new Reflector()));
  // morgan.token('body', (req: Request) => {
  //   return JSON.stringify(req.body);
  // });
  // app.use(morgan(':method :url :status\n - :response-time ms -\n :body'));

  const config = new DocumentBuilder()
    .setTitle('Sex-adapt')
    .setDescription('API Routes and datas')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 5500, () => {
    console.log(`Serviço iniciado em ${new Date()}`);
  });
}
bootstrap();
