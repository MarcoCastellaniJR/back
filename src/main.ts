import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
//import * as passaport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    name:'MARC-INT',
    secret:'PalavraSecretaParaSession',
    resave:false,
    saveUninitialized:false,
    cookie:{
      maxAge:3000,
    }
  }))
  await app.listen(3030);
}
bootstrap();
