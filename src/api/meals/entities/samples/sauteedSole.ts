import { CreateMealDto } from '../../dto/create-meal.dto';

export const sauteedSole: CreateMealDto = {
  name: 'Sauteed Sole',
  description:
    'Delicate sole tastes great when sautéed in flavorful, heart-healthy olive oil. First, though, we give it a light coating of flour, which protects the fish and creates just a bit of a browned crust during sautéing. You can substitute flounder for the sole. Fish fillets are sold in a range of sizes. Do not use fillets thinner than ¼ inch, as they will overcook very quickly.',
  image: 'https://www.example.com/sole.jpg',
  prepTime: 10,
  cookTime: 20,
  cookingMethod: ['Frying'],
  calories: 220,
  fat: 16,
  protein: 14,
  carbs: 3,
  sugar: 0,
  cholesterol: 50,
  sodium: 240,
  fiber: 0,
  recipeCategory: 'Entree',
  recipeCuisine: 'French',
  recipeInstructions: [
    {
      name: 'Season the sole',
      text: 'Place flour in shallow dish. Pat sole dry with paper towels and sprinkle with salt and pepper. Working with 1 fillet at a time, dredge in flour to coat, shaking off any excess.',
    },
    {
      name: 'Saute the sole',
      text: 'Heat 2 tablespoons oil in 12-inch nonstick skillet over medium-high heat until shimmering. Place half of sole in skillet and cook until lightly browned on first side, 2 to 3 minutes. Gently flip sole using 2 spatulas and continue to cook until sole flakes apart when gently prodded with paring knife, 30 to 60 seconds.',
    },
    {
      name: 'Serve the sole',
      text: 'Transfer sole to platter and tent loosely with aluminum foil. Wipe out skillet with paper towels and repeat with remaining oil and sole. Serve, passing lemon wedges separately.',
    },
  ],
  recipeYield: 4,
  suitableForDiet: ['Diabetic', 'Halal'],
  recipeIngredient: [
    {
      name: 'All-Purpose Flour',
      quantity: 0.5,
      unit: 'cup',
    },
    {
      name: 'Skinless Sole fillet, 1/4 to 1/2 inch thick',
      quantity: 2,
      unit: 'ounces',
    },
    {
      name: 'Salt',
      quantity: 0.25,
      unit: 'teaspoon',
    },
    {
      name: 'Pepper',
      quantity: 0.025,
      unit: 'teaspoon',
    },
    {
      name: 'Extra-Virgin Olive Oil',
      quantity: 0.25,
      unit: 'cup',
    },
    {
      name: 'Lemon wedges',
      quantity: -1,
      unit: '',
    },
  ],
  aggregateRating: {
    ratingValue: 4.5,
    ratingCount: 2,
  },
  keywords: ['sole', 'fish'],
};
