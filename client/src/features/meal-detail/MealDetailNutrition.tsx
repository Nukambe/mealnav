import React from 'react';
import Macro from '../../components/shared/Macros/Macro';
import { Meal } from '../meals/mealTypes';

export default function MealDetailNutrition({ meal }: { meal: Meal }) {
  const [showMore, setShowMore] = React.useState(false);

  const nutrition = React.useMemo(() => {
    return {
      protein: meal.protein,
      carbs: meal.carbs,
      fat: meal.fat,
      calories: meal.calories,
      sugar: meal.sugar,
      fiber: meal.fiber,
      cholesterol: meal.cholesterol,
      sodium: meal.sodium,
    };
  }, [meal]);

  return (
    <section aria-labelledby="applicant-information-title">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2
            id="applicant-information-title"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Nutrition Information
          </h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
            {Object.entries(nutrition).map(([macro, value], index) =>
              index < 4 ? (
                <Macro key={macro} macro={macro} value={value} />
              ) : (
                showMore && <Macro key={macro} macro={macro} value={value} />
              ),
            )}
          </dl>
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="text-sm font-medium text-green-600 hover:text-green-500 mt-4"
          >
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
    </section>
  );
}
