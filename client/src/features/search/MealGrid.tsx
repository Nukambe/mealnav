import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectMeals } from '../meals/mealsSlice';
import { MealDto } from '../meals/mealTypes';

export default function MealGrid() {
  const meals = useAppSelector(selectMeals);

  return (
    <section
      aria-labelledby="meals-heading"
      className="mx-auto max-w-2xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:px-8"
    >
      <h2 id="meals-heading" className="sr-only">
        Meals
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </section>
  );
}

function MealCard({ meal }: { meal: MealDto }) {
  return (
    <Link key={meal.id} to={`/app/meals/${meal.id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={meal.image}
          alt={meal.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{meal.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {meal.description}
      </p>
    </Link>
  );
}
