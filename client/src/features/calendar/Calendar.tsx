import React from 'react';
import clsx from 'clsx';
import CalendarNav from './CalendarNav';
import { Month } from './month';

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

export default function Calendar({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
}) {
  const [currentMonth, setCurrentMonth] = React.useState(today.getMonth());
  const [currentYear, setCurrentYear] = React.useState(today.getFullYear());
  const [month, setMonth] = React.useState<Month | null>(null);

  React.useEffect(() => {
    setSelectedDate(today);
  }, [setSelectedDate]);

  React.useEffect(() => {
    setMonth(new Month(currentMonth, currentYear));
  }, [currentMonth, currentYear]);

  return (
    <div className="text-center">
      <CalendarNav
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
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
    </div>
  );
}
