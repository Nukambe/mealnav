import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  selectMealplan,
  getMealplan,
} from '../features/meal-plan/mealplanSlice';
import Calendar from '../features/calendar/Calendar';
import Button from '../components/shared/Buttons/Button';
import clsx from 'clsx';
import MealList from '../features/meal-list/MealList';

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

export default function CalendarPage() {
  const dispatch = useAppDispatch();
  const mealplan = useAppSelector(selectMealplan);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  React.useEffect(() => {
    dispatch(getMealplan());
  }, [dispatch]);

  return (
    <div className="flex flex-col-reverse gap-2 md:divide-x md:flex-row mt-10 mx-auto px-4 w-full md:w-11/12 lg:w-3/4 xl:w-3/5">
      <section className="w-full md:w-1/2">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Plan for{' '}
          <time
            dateTime={selectedDate?.toISOString() || new Date().toISOString()}
          >
            {selectedDate?.toLocaleDateString() || 'today'}
          </time>
        </h2>
        <MealList selectedDate={selectedDate || today} />
      </section>
      <div className="md:pl-4 w-full md:w-1/2">
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </div>
  );
}
