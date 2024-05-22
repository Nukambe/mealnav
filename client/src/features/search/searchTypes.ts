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
  cookingMethod: { options: string[]; selected: string[] };
  recipeCategory: { options: string[]; selected: string[] };
  recipeCuisine: { options: string[]; selected: string[] };
  suitableForDiet: { options: string[]; selected: string[] };
  recipeIngredient: { options: string[]; selected: string[] };
  calories: { min: number; max: number };
  fat: { min: number; max: number };
  protein: { min: number; max: number };
  carbs: { min: number; max: number };
  sugar: { min: number; max: number };
  fiber: { min: number; max: number };
  cholesterol: { min: number; max: number };
  sodium: { min: number; max: number };
};

export interface MinMax {
  min: number;
  max: number;
}

export function isMinMax(
  value: MinMax | { options: string[]; selected: string[] },
): value is MinMax {
  return (value as MinMax).min !== undefined;
}
