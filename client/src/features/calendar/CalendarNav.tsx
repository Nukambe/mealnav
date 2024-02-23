import ChevronLeft from '../../components/shared/Icons/ChevronLeft';
import ChevronRight from '../../components/shared/Icons/ChevronRight';

export enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export default function CalendarNav({
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear,
}: {
  currentMonth: number;
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
  currentYear: number;
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>;
}) {
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear((prev) => prev + 1);
    }
    setCurrentMonth((prev) => (prev + 1 + 12) % 12);
  };
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear((prev) => prev - 1);
    }
    setCurrentMonth((prev) => (prev - 1 + 12) % 12);
  };

  return (
    <div className="flex items-center text-gray-900">
      <button
        type="button"
        className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        onClick={prevMonth}
      >
        <span className="sr-only">Previous month</span>
        <ChevronLeft />
      </button>
      <div className="flex-auto text-sm font-semibold">
        {Month[currentMonth]} {currentYear}
      </div>
      <button
        type="button"
        className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        onClick={nextMonth}
      >
        <span className="sr-only">Next month</span>
        <ChevronRight />
      </button>
    </div>
  );
}
