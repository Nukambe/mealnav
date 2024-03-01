import { Mealplan } from 'src/api/mealplan/entities/mealplan.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';

@Entity()
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string; // The name of the item.

  @Column()
  description: string; // A description of the item.

  @Column()
  image: string; // An image of the item.

  @Column()
  prepTime: number; // Length of time to prepare the recipe, in minutes.

  @Column()
  cookTime: number; // Length of time to cook the recipe, in minutes.

  @Column('text', { array: true })
  cookingMethod: string[]; // The method of cooking, such as Frying, Steaming, ...

  @Column({ nullable: true })
  calories: number;

  @Column({ nullable: true })
  fat: number;

  @Column({ nullable: true })
  protein: number;

  @Column({ nullable: true })
  carbs: number;

  @Column({ nullable: true })
  sugar: number;

  @Column({ nullable: true })
  fiber: number;

  @Column({ nullable: true })
  cholesterol: number;

  @Column({ nullable: true })
  sodium: number;

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

  @OneToMany(() => Mealplan, (mealplan) => mealplan.meal)
  mealPlans: Mealplan[];
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
