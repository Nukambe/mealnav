import React from 'react';
import Calendar from './Calendar';
import { useAppSelector } from '../../app/hooks';
import { selectMealplan } from '../meal-plan/mealplanSlice';
import { MealDto } from '../meals/mealTypes';

const now = new Date();

export default function CalendarModal({ meal }: { meal: MealDto }) {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(now);
  const mealplan = useAppSelector(selectMealplan);

  const meals = React.useMemo(
    () =>
      mealplan.filter(
        (plan) =>
          new Date(plan.date).toDateString() === selectedDate!.toDateString(),
      ),
    [mealplan, selectedDate],
  );

  const mealCount = meals.reduce(
    (acc, curr) => (meal.id === curr.meal.id ? acc + 1 : acc),
    0,
  );

  return (
    <div className="relative" style={{ width: 300 }}>
      <ul>
        {meals.map((m) => (
          <li key={m.id}>{m.meal.name}</li>
        ))}
      </ul>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <div className="flex justify-center border w-fit mx-auto rounded">
        <button className="flex justify-center items-center px-4 border-r">
          -
        </button>
        <div className="flex justify-center w-16 items-center">{mealCount}</div>
        <button className="flex justify-center px-4 border-l items-center">
          +
        </button>
      </div>
    </div>
  );
}
