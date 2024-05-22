import {
  Meal,
  howToStep,
  ingredient,
  nutrition,
  rating,
} from '../entities/meal.entity';

export class MealDetailDto {
  id: number;
  name: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  cookingMethod: string[];
  nutrition: nutrition;
  recipeCategory: string;
  recipeCuisine: string;
  recipeInstructions: howToStep[];
  recipeYield: number;
  suitableForDiet: string[];
  recipeIngredient: ingredient[];
  aggregateRating: rating;
  keywords: string[];

  constructor(meal: Meal) {
    this.id = meal.id;
    this.name = meal.name;
    this.description = meal.description;
    this.image = meal.image;
    this.prepTime = meal.prepTime;
    this.cookTime = meal.cookTime;
    this.cookingMethod = meal.cookingMethod;
    this.nutrition = {
      calories: meal.calories,
      fat: meal.fat,
      protein: meal.protein,
      carbs: meal.carbs,
      sugar: meal.sugar,
      fiber: meal.fiber,
      cholesterol: meal.cholesterol,
      sodium: meal.sodium,
    };
    this.recipeCategory = meal.recipeCategory;
    this.recipeCuisine = meal.recipeCuisine;
    this.recipeInstructions = meal.recipeInstructions;
    this.recipeYield = meal.recipeYield;
    this.suitableForDiet = meal.suitableForDiet;
    this.recipeIngredient = meal.recipeIngredient;
    this.aggregateRating = meal.aggregateRating;
    this.keywords = meal.keywords;
  }
}
