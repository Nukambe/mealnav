import { CreateMealDto } from '../../dto/create-meal.dto';

export const lemonyPenneChicken: CreateMealDto = {
  name: 'Lemony Penne with Chicken, Sun-Dried Tomatoes, and Artichokes',
  description:
    'For a light and bright pasta dish, we turned to a Mediterranean-inspired flavor profile of lemon, sun-dried tomatoes, and artichoke hearts. We started by cooking lean chicken breast, which only took a few minutes since it was cut into small pieces. We then built a flavorful sauce by sautéing a base of leeks before adding white wine and chicken broth for extra flavor; garlic and fresh thyme provided an aromatic backdrop. Chewy sun-dried tomatoes were a welcome textural contrast and their rich, sweet flavor stood up well to the whole-wheat pasta. We used convenient frozen artichokes, as they are lower in sodium than canned or marinated varieties. Lemon zest and a full ¼ cup of lemon juice added a citrusy pop, while Parmesan cheese enhanced the dish’s seasoning. Shredded basil was the perfect fresh finish and drove home the summery flavors.',
  image: 'https://www.example.com/lemonypenne.jpg',
  prepTime: 20,
  cookTime: 20,
  cookingMethod: ['Boiling'],
  calories: 430,
  fat: 9,
  protein: 30,
  carbs: 51,
  sugar: 4,
  cholesterol: 60,
  sodium: 400,
  fiber: 11,
  recipeCategory: 'Entree',
  recipeCuisine: 'Italian',
  recipeInstructions: [
    {
      name: 'Cook the chicken',
      text: 'Pat chicken dry with paper towels and season with salt and pepper. Heat 1 tablespoon oil in 12-inch nonstick skillet over medium-high heat until just smoking. Add chicken and cook until golden brown and cooked through, 6 to 8 minutes. Transfer to plate and tent with aluminum foil.',
    },
    {
      name: 'Cook the leeks',
      text: 'Add remaining 1 tablespoon oil to now-empty skillet and return to medium heat until shimmering. Add leeks and cook until softened, about 5 minutes. Stir in garlic and thyme and cook until fragrant, about 30 seconds.',
    },
    {
      name: 'Cook the pasta',
      text: 'Meanwhile, bring 4 quarts water to boil in large pot. Add pasta and 1 tablespoon salt and cook, stirring often, until al dente. Reserve ½ cup cooking water, then drain pasta and return it to pot.',
    },
    {
      name: 'Finish the sauce',
      text: 'Stir wine and broth into skillet, scraping up any browned bits. Bring to simmer and cook until slightly thickened, about 5 minutes. Stir in artichokes and sun-dried tomatoes and cook until heated through, about 2 minutes. Off heat, stir in lemon zest and juice and Parmesan. Season with salt and pepper to taste.',
    },
    {
      name: 'Combine the pasta and chicken',
      text: 'Add chicken and sauce to pot with pasta and toss to combine, adding reserved cooking water as needed to adjust consistency. Serve, passing basil and extra Parmesan separately.',
    },
  ],
  recipeYield: 6,
  suitableForDiet: ['Diabetic', 'Halal'],
  recipeIngredient: [
    {
      name: 'Boneless, Skinless Chicken Breast',
      quantity: 1.5,
      unit: 'pounds',
    },
    {
      name: 'Leeks',
      quantity: 2,
      unit: 'pounds',
    },
    {
      name: 'Garlic',
      quantity: 3,
      unit: 'cloves',
    },
    {
      name: 'Fresh Thyme',
      quantity: 1,
      unit: 'tablespoon',
    },
    {
      name: 'Whole-Wheat Penne',
      quantity: 12,
      unit: 'ounces',
    },
    {
      name: 'Dry White Wine',
      quantity: 0.5,
      unit: 'cup',
    },
    {
      name: 'Low-Sodium Chicken Broth',
      quantity: 1,
      unit: 'cup',
    },
    {
      name: 'Sun-Dried Tomatoes',
      quantity: 0.5,
      unit: 'cup',
    },
    {
      name: 'Frozen Artichoke Hearts',
      quantity: 12,
      unit: 'ounces',
    },
    {
      name: 'Lemon',
      quantity: 1,
      unit: '',
    },
    {
      name: 'Parmesan Cheese',
      quantity: 0.5,
      unit: 'cup',
    },
    {
      name: 'Fresh Basil',
      quantity: -1,
      unit: '',
    },
  ],
  aggregateRating: {
    ratingValue: 4.5,
    ratingCount: 2,
  },
  keywords: ['pasta', 'chicken', 'lemon'],
};
