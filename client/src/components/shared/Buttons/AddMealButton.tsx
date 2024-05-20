import React from 'react';
import { MealDto } from '../../../features/meals/mealTypes';
import CalendarModal from '../../../features/calendar/CalendarModal';

export default function AddMealButton({ meal }: { meal: MealDto }) {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="flex flex-col relative w-full">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => setModalOpen(!modalOpen)}
      >
        Add Meal
      </button>
      {modalOpen && (
        <div className="absolute h-fit right-0 lg:right-16 top-10 lg:top-0 z-40 bg-white border-2 p-8">
          <CalendarModal meal={meal} />
        </div>
      )}
    </div>
  );
}
