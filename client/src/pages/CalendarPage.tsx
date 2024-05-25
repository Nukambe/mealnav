import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  selectMealplan,
  getMealplan,
} from '../features/meal-plan/mealplanSlice';
import Calendar from '../features/calendar/Calendar';
import MealList from '../features/meal-list/MealList';
import Macros from '../features/macros/Macros';
import ShoppingList from '../features/shopping-list/ShoppingList';

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

export default function CalendarPage() {
  const dispatch = useAppDispatch();
  const mealplan = useAppSelector(selectMealplan);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(today);
  const [servings, setServings] = React.useState<
    { mealId: number; servings: number }[]
  >([]);

  const plan = React.useMemo(
    () =>
      mealplan.filter((plan) => {
        const date = new Date(plan.date).toUTCString().slice(0, 16);
        const selected = selectedDate!.toUTCString().slice(0, 16);
        return date === selected;
      }),
    [mealplan, selectedDate],
  );

  React.useEffect(() => {
    dispatch(getMealplan());
  }, [dispatch]);

  React.useMemo(() => {
    setServings(
      plan.reduce(
        (acc, mealPlan) => {
          const existing = acc.find((s) => s.mealId === mealPlan.meal.id);
          if (existing) {
            return acc;
          }
          return acc.concat({ mealId: mealPlan.meal.id, servings: 1 });
        },
        [] as { mealId: number; servings: number }[],
      ),
    );
  }, [plan]);

  return (
    <div className="flex flex-col-reverse gap-2 md:flex-row mt-10 mx-auto px-4 w-full md:w-11/12 lg:w-3/4 xl:w-3/5">
      <section className="w-full md:w-1/2 mt-8 md:mt-0">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Plan for{' '}
          <time
            dateTime={selectedDate?.toISOString() || new Date().toISOString()}
          >
            {selectedDate?.toLocaleDateString() || 'today'}
          </time>
        </h2>
        <Macros plan={plan} />
        <MealList selectedDate={selectedDate || today} />
        <div className="md:hidden">
          <ShoppingList
            plan={plan}
            servings={servings}
            setServings={setServings}
          />
        </div>
      </section>
      <div className="md:pl-4 w-full md:w-1/2">
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div className="hidden md:block">
          <ShoppingList
            plan={plan}
            servings={servings}
            setServings={setServings}
          />
        </div>
      </div>
    </div>
  );
}
