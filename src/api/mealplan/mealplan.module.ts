import { Module } from '@nestjs/common';
import { MealplanService } from './mealplan.service';
import { MealplanController } from './mealplan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mealplan } from './entities/mealplan.entity';
import { Meal } from '../meals/entities/meal.entity';
import { User } from '../users/entities/user.entity';
import { JwtAccessStrategy } from '../auth/strategies/at.strategy';
import { JwtRefreshStrategy } from '../auth/strategies/rt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Mealplan, Meal, User])],
  controllers: [MealplanController],
  providers: [MealplanService, JwtAccessStrategy, JwtRefreshStrategy],
  exports: [TypeOrmModule],
})
export class MealplanModule {}
