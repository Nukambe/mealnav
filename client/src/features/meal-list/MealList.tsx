import React from 'react';
import { useAppSelector } from '../../app/hooks';
import clsx from 'clsx';
import Button from '../../components/shared/Button/Button';
import { selectMealplan } from '../meal-plan/mealplanSlice';

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

export default function MealList({
  selectedDate = today,
}: {
  selectedDate: Date;
}) {
  const mealplan = useAppSelector(selectMealplan);

  const meals = React.useMemo(
    () =>
      mealplan.filter(
        (plan) =>
          new Date(plan.date).toDateString() === selectedDate.toDateString(),
      ),
    [mealplan, selectedDate],
  );

  return (
    <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
      {meals.map(({ id, meal }) => (
        <li
          key={id}
          className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
        >
          <img
            src={meal.image}
            alt=""
            className="h-10 w-10 flex-none rounded-full"
          />
          <div className="flex-auto">
            <p className="text-gray-900">{meal.name}</p>
            <p className="mt-0.5 truncate">{meal.description}</p>
          </div>
          <div className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
            <div>
              <Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                <span className="sr-only">Open options</span>
                {/* <EllipsisVerticalIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    /> */}
                ...
              </Button>
            </div>

            <ul className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <li>
                  <a
                    href="/"
                    className={clsx(
                      true ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className={clsx(
                      true ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Cancel
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
