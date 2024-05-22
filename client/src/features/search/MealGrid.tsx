import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectFullMeals, selectMeals } from '../meals/mealsSlice';
import { MealDto } from '../meals/mealTypes';
import Macros from '../macros/Macros';

export default function MealGrid() {
  const meals = useAppSelector(selectFullMeals);

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
    <Link
      key={meal.id}
      to={`/app/meals/${meal.id}`}
      className="group h-64 flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 ease-in-out"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={meal.image}
          alt={meal.name}
          className="w-full h-32 object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700 px-2">{meal.name}</h3>
      {/* <p className="mt-1 text-lg font-medium text-gray-900 h-24">
        {meal.description}
      </p> */}
      <div className="mt-auto p-2">
        <Macros plan={[{ id: meal.id, date: new Date(), meal: meal }]} />
      </div>
    </Link>
  );
}
