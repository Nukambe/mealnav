import React from 'react';
import clsx from 'clsx';
import ChevronLeft from '../../components/shared/Icons/ChevronLeft';
import { Month } from './month';

const today = new Date();

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = React.useState(today.getMonth());
  const [currentYear, setCurrentYear] = React.useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(today);
  const [month, setMonth] = React.useState<Month | null>(null);

  React.useEffect(() => {
    setMonth(new Month(currentMonth, currentYear));
  }, [currentMonth, currentYear]);

  return (
    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
      <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
        {month?.days.map((day, dayIdx) => (
          <button
            key={dayIdx}
            type="button"
            className={clsx(
              'py-1.5 hover:bg-gray-100 focus:z-10',
              month.isCurrentMonth(day)
                ? 'bg-white'
                : 'bg-gray-50 text-gray-300',
              month.isEqual(selectedDate, day)
                ? 'text-white'
                : month.isEqual(today, day)
                  ? 'text-green-500'
                  : 'text-black',
              (month.isEqual(selectedDate, day) || month.isEqual(today, day)) &&
                'font-bold',
              dayIdx === 0 && 'rounded-tl-lg',
              dayIdx === 6 && 'rounded-tr-lg',
              dayIdx === month.days.length - 7 && 'rounded-bl-lg',
              dayIdx === month.days.length - 1 && 'rounded-br-lg',
            )}
            onClick={() => setSelectedDate(day)}
          >
            <time
              dateTime={day.toISOString()}
              className={clsx(
                'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                month.isEqual(selectedDate, day) && 'bg-green-600',
              )}
            >
              {day.getDate()}
            </time>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add event
      </button>
    </div>
  );
}
