import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import * as morgan from 'morgan';
// import { doubleCsrfProtection } from './csrf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('tiny'));
  app.use(cookieParser(process.env.COOKIE_SECRET));
  // app.use(doubleCsrfProtection);
  app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
  await app.listen(3005);
}
bootstrap();
