import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Mealplan } from '../meal-plan/mealplanTypes';
import { getFullMeals, selectFullMeals } from '../meals/mealsSlice';

export default function Macros({ plan }: { plan: Mealplan[] }) {
  const dispatch = useAppDispatch();
  const fullMeals = useAppSelector(selectFullMeals);

  const meals = React.useMemo(
    () =>
      plan.map((meal) => {
        const fullMeal = fullMeals?.find(
          (fullMeal) => fullMeal.id === meal.meal.id,
        );
        return { ...meal, fullMeal };
      }),
    [plan, fullMeals],
  );

  React.useEffect(() => {
    if (meals.length === 0) return;

    const missingMeals = meals
      .filter((meal) => !meal.fullMeal)
      .map((meal) => meal.meal.id);

    if (missingMeals.length === 0) return;

    dispatch(getFullMeals(missingMeals));
  }, [meals, dispatch]);

  const totalMacros = React.useMemo(() => {
    if (meals.length === 0)
      return { protein: 0, carbs: 0, fat: 0, calories: 0 };
    if (!meals.every((meal) => meal.fullMeal !== undefined))
      return { protein: 0, carbs: 0, fat: 0, calories: 0 };

    return meals.reduce(
      (acc, curr) => {
        return {
          protein: acc.protein + curr.fullMeal!.protein,
          carbs: acc.carbs + curr.fullMeal!.carbs,
          fat: acc.fat + curr.fullMeal!.fat,
          calories: acc.calories + curr.fullMeal!.calories,
        };
      },
      { protein: 0, carbs: 0, fat: 0, calories: 0 },
    );
  }, [meals]);

  return (
    <div className="flex justify-between divide-x-2 border-2 rounded-md">
      {['Calories', 'Carbs', 'Protein', 'Fat'].map((macro) => (
        <div
          key={macro}
          className="flex flex-col items-center justify-center w-full"
        >
          <p className="text-sm text-gray-500">{macro}</p>
          <p className="text-lg font-semibold">
            {
              totalMacros[
                macro.toLowerCase() as 'calories' | 'carbs' | 'protein' | 'fat'
              ]
            }
          </p>
        </div>
      ))}
    </div>
  );
}
