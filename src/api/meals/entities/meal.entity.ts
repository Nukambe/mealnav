import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // The name of the item.

  @Column()
  description: string; // A description of the item.

  @Column()
  image: string; // An image of the item.

  @Column()
  prepTime: string; // ISO 8601 duration format.

  @Column()
  cookTime: string; // ISO 8601 duration format.

  @Column('text', { array: true })
  cookingMethod: string[]; // The method of cooking, such as Frying, Steaming, ...

  @Column('json')
  nutrition: nutrition; // Nutrition information about the recipe or menu item.

  @Column()
  recipeCategory: string; // The category of the recipe—for example, appetizer, entree, etc.

  @Column()
  recipeCuisine: string; // The cuisine of the recipe (for example, French or Ethiopian).

  @Column('json')
  recipeInstructions: howToStep[]; // an ordered list with HowToStep and/or HowToSection items.

  @Column()
  recipeYield: number; // The quantity produced by the recipe (for example, number of people served, number of servings, etc).

  @Column('text', { array: true })
  suitableForDiet: string[]; // Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.

  @Column('json')
  recipeIngredient: ingredient[]; // An ingredient used in the recipe.

  @Column('json')
  aggregateRating: rating; // The overall rating, based on a collection of reviews or ratings, of the item.

  @Column('text', { array: true })
  keywords: string[]; /*
    Other terms for your recipe such as the season ("summer"), the holiday ("Halloween"), or other descriptors ("quick", "easy", "authentic").

Additional guidelines
Separate multiple entries in a keywords list with commas.
Don't use a tag that's actually a recipeCategory or recipeCuisine.

Not recommended:
"keywords": "dessert, American"

Recommended:
"keywords": "winter apple pie, nutmeg crust"
    */
}

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
