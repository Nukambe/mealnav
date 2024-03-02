import { MealDto } from '../meals/mealTypes';

export default function MealDetailHeader({ meal }: { meal: MealDto }) {
  return (
    <div className="flex items-center space-x-5">
      <div className="flex-shrink-0">
        <div className="relative">
          <img
            className="h-16 w-16 rounded-full"
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            alt=""
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
