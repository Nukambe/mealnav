export interface Feature {
  title: string;
  subtitle: string;
  description: string;
  image: any;
  icon: any;
}

export const features: Feature[] = [
  {
    title: 'Meal Insights',
    subtitle:
      'Gain insights into your eating habits with comprehensive meal tracking.',
    description:
      'Our discussion on features already highlights the importance of understanding your dietary patterns. Reiterating it here underscores its value in achieving your nutrition goals.',
    image: 'meal-insights.png',
    icon: 'meal-insights-icon.png',
  },
  {
    title: 'Ingredient Tracking',
    subtitle:
      'Keep a precise inventory of your kitchen staples with our ingredient tracking feature.',
    description:
      "While we've focused on meal planning and recipes, the ability to track your ingredients ensures you're always prepared to create your next meal without the worry of missing items.",
    image: 'ingredient-tracking.png',
    icon: 'ingredient-tracking-icon.png',
  },
  {
    title: 'Recipe Management',
    subtitle:
      'Effortlessly compile, categorize, and access your favorite recipes in a centralized location.',
    description:
      'Our recipe management feature is designed to make your life easier. It allows you to store and categorize your favorite recipes, making them easily accessible when you need them.',
    image: 'recipe-management.png',
    icon: 'recipe-management-icon.png',
  },
];
