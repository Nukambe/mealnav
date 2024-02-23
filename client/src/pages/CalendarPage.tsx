import React from 'react';
import Calendar from '../features/calendar/Calendar';
import Button from '../components/shared/Button/Button';
import clsx from 'clsx';
import MealList from '../features/meal-list/MealList';

const meetings: any = [{}, {}];

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  return (
    <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
      <section className="mt-12 md:mt-0 md:pl-14">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Plan for{' '}
          <time
            dateTime={selectedDate?.toISOString() || new Date().toISOString()}
          >
            {selectedDate?.toLocaleDateString() || 'today'}
          </time>
        </h2>
        <MealList meals={meetings} />
      </section>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
}
