import { MealDto } from '../meals/mealTypes';

export default function MealDetailHeader({ meal }: { meal: MealDto }) {
  return (
    <div className="flex items-center space-x-5 flex-col lg:flex-row">
      <div className="flex-shrink-0">
        <div className="relative">
          <img
            className="h-64 w-64 rounded-full"
            src={meal.image}
            alt={meal.name}
          />
          <span
            className="absolute inset-0 rounded-full shadow-inner"
            aria-hidden="true"
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{meal.name}</h1>
        <p className="text-sm font-medium text-gray-500">{meal.description}</p>
      </div>
    </div>
  );
}
