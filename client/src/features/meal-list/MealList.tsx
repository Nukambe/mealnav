import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectMealplan, updateMealplan } from '../meal-plan/mealplanSlice';
import MealDisplay from './MealDisplay';

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

export default function MealList({
  selectedDate = today,
}: {
  selectedDate: Date;
}) {
  const dispatch = useAppDispatch();
  const mealplan = useAppSelector(selectMealplan);

  const meals = React.useMemo(
    () =>
      mealplan.filter((plan) => {
        const date = new Date(plan.date).toUTCString().slice(0, 16);
        const selected = selectedDate!.toUTCString().slice(0, 16);
        return date === selected;
      }),
    [mealplan, selectedDate],
  );

  const handleRemoveMeal = (mealId: number) => {
    dispatch(
      updateMealplan({
        date: selectedDate!.toUTCString(),
        mealId,
        add: false,
      }),
    );
  };

  return (
    <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
      {meals.map(({ id, meal }) => (
        <li key={id} className="flex justify-between items-center">
          <MealDisplay meal={meal} />
          <button
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label={`Remove ${meal.name}`}
            onClick={() => handleRemoveMeal(meal.id)}
          >
            <img
              className="w-8 h-8"
              src="https://upload.wikimedia.org/wikipedia/commons/7/74/Deepin_Icon_Theme_%E2%80%93_user-trash_%2823%29.svg"
              alt="Trashcan"
            />
          </button>
        </li>
      ))}
    </ol>
  );
}
