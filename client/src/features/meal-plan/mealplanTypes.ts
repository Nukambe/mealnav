import { MealDto } from '../meals/mealTypes';

export type Mealplan = {
  id: number;
  date: Date;
  meal: MealDto;
};
