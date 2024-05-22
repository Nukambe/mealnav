import React from 'react';
import Calendar from './Calendar';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectMealplan, updateMealplan } from '../meal-plan/mealplanSlice';
import { MealDto } from '../meals/mealTypes';
import Macros from '../macros/Macros';

const now = new Date();

export default function CalendarModal({ meal }: { meal: MealDto }) {
  const dispatch = useAppDispatch();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(now);
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

  const mealCount = React.useMemo(
    () =>
      meals.reduce(
        (acc, curr) => (meal.id === curr.meal.id ? acc + 1 : acc),
        0,
      ),
    [meals, meal.id],
  );

  const handleAddMeal = () => {
    dispatch(
      updateMealplan({
        date: selectedDate!.toUTCString(),
        mealId: meal.id,
        add: true,
      }),
    );
  };

  const handleRemoveMeal = () => {
    dispatch(
      updateMealplan({
        date: selectedDate!.toUTCString(),
        mealId: meal.id,
        add: false,
      }),
    );
  };

  return (
    <div className="relative m-auto" style={{ width: 300 }}>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <div className="flex justify-center border w-fit mx-auto rounded my-8">
        <button
          className="flex justify-center items-center px-4 border-r"
          onClick={handleRemoveMeal}
          disabled={mealCount === 0}
        >
          -
        </button>
        <div className="flex justify-center w-16 items-center">{mealCount}</div>
        <button
          className="flex justify-center px-4 border-l items-center"
          onClick={handleAddMeal}
        >
          +
        </button>
      </div>
      <Macros plan={meals} />
    </div>
  );
}
