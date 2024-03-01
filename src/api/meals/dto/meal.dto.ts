import { Meal } from '../entities/meal.entity';

export class MealDto {
  id: number;
  name: string;
  description: string;
  image: string;

  constructor(meal: Meal) {
    this.id = meal.id;
    this.name = meal.name;
    this.description = meal.description;
    this.image = meal.image;
  }
}
