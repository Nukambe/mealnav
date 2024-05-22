export type Meal = {
  id: number;
  name: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  cookingMethod: string[];
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
  sugar: number;
  fiber: number;
  cholesterol: number;
  sodium: number;
  recipeCategory: string;
  recipeCuisine: string;
  recipeInstructions: howToStep[];
  recipeYield: number;
  suitableForDiet: string[];
  recipeIngredient: ingredient[];
  aggregateRating: rating;
  keywords: string[];
};

export type MealDto = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export type nutrition = {
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
  sugar: number;
  fiber: number;
  cholesterol: number;
  sodium: number;
};

export type howToStep = {
  name: string;
  text: string;
};

export type ingredient = {
  name: string;
  quantity: number;
  unit: string;
};

export type rating = {
  ratingValue: number;
  ratingCount: number;
};

export type SearchMealDto = {
  ids?: string;
  name?: string;
  minPrepTime?: string;
  maxPrepTime?: string;
  minCookTime?: string;
  maxCookTime?: string;
  cookingMethod?: string;
  recipeCategory?: string;
  recipeCuisine?: string;
  suitableForDiet?: string;
  recipeIngredient?: string;
  rating?: string;
  keywords?: string;
  limit?: string;
  offset?: string;
  sort?: string;
  order?: string;
  minCalories?: string;
  maxCalories?: string;
  minFat?: string;
  maxFat?: string;
  minProtein?: string;
  maxProtein?: string;
  minCarbs?: string;
  maxCarbs?: string;
  minSugar?: string;
  maxSugar?: string;
  minFiber?: string;
  maxFiber?: string;
  minCholesterol?: string;
  maxCholesterol?: string;
  minSodium?: string;
  maxSodium?: string;
  fullDetails?: string;
};
