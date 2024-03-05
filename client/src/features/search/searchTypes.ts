export type SortOption = {
  current: boolean;
  order: 'ASC' | 'DESC';
};

export type SortOptions = {
  mostPopular: SortOption;
  bestRating: SortOption;
  newest: SortOption;
  calories: SortOption;
  fat: SortOption;
  protein: SortOption;
  carbs: SortOption;
};

export type FilterOptions = {
  prepTime: { min: number; max: number };
  cookTime: { min: number; max: number };
  cookingMethod: string[];
  recipeCategory: string[];
  recipeCuisine: string[];
  suitableForDiet: string[];
  recipeIngredient: string[];
  calories: { min: number; max: number };
  fat: { min: number; max: number };
  protein: { min: number; max: number };
  carbs: { min: number; max: number };
  sugar: { min: number; max: number };
  fiber: { min: number; max: number };
  cholesterol: { min: number; max: number };
  sodium: { min: number; max: number };
};
