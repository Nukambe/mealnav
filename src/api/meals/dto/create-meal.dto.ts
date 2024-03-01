import { PartialType } from '@nestjs/mapped-types';
import { Meal } from '../entities/meal.entity';

export class CreateMealDto extends PartialType(Meal) {}
