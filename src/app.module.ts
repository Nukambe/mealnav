import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './api/auth/auth.module';
import { UsersModule } from './api/users/users.module';
import { MealsModule } from './api/meals/meals.module';
import { MealplanModule } from './api/mealplan/mealplan.module';
import { CategoriesModule } from './api/categories/categories.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_URL,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV === 'development',
    }),
    AuthModule,
    UsersModule,
    MealsModule,
    MealplanModule,
    CategoriesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'build'),
      exclude: ['/api/(.*)'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
