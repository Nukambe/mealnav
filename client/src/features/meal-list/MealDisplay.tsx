import { MealDto } from '../meals/mealTypes';
import { Link } from 'react-router-dom';

export default function MealDisplay({ meal }: { meal: MealDto }) {
  return (
    <Link
      className="flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
      to={`/app/meals/${meal.id}`}
    >
      <img
        src={meal.image}
        alt=""
        className="h-10 w-10 flex-none rounded-full"
      />
      <div className="flex-auto">
        <h3 className="text-gray-900">{meal.name}</h3>
        <p
          className="mt-0.5"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {meal.description}
        </p>
      </div>
    </Link>
  );
}
