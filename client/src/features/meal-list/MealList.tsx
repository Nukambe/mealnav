import React from 'react';
import { useAppSelector } from '../../app/hooks';
import clsx from 'clsx';
import Button from '../../components/shared/Buttons/Button';
import { selectMealplan } from '../meal-plan/mealplanSlice';
import MealDisplay from './MealDisplay';

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
        <li key={id}>
          <MealDisplay meal={meal} />
        </li>
      ))}
    </ol>
  );
}
