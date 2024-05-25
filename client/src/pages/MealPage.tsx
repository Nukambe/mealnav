import { useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { getMealById } from '../features/meals/mealsSlice';
import MealDetailHeader from '../features/meal-detail/MealDetailHeader';
// import FavoriteButton from '../components/shared/Buttons/FavoriteButton';
import AddMealButton from '../components/shared/Buttons/AddMealButton';
import MealDetailNutrition from '../features/meal-detail/MealDetailNutrition';
import MealDetailInstructions from '../features/meal-detail/MealDetailInstructions';
import MealDetailIngredients from '../features/meal-detail/MealDetailIngredients';
import React from 'react';

export const loader =
  (dispatch: any) =>
  async ({ params }: any) =>
    await dispatch(getMealById(params.id));

export default function MealPage() {
  const { id } = useParams<{ id: string }>();
  const meal = useAppSelector((state) =>
    state.meals.fullMeals.find((meal) => meal.id === Number(id)),
  );

  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-full">
      <main className="py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:space-x-5 lg:max-w-7xl lg:px-8">
          <MealDetailHeader meal={meal} />
          <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
            {/* <FavoriteButton meal={meal} /> */}
            <AddMealButton meal={meal} />
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2 lg:col-start-1">
            <MealDetailNutrition meal={meal} />
            <div className="hidden lg:block">
              <MealDetailInstructions meal={meal} />
            </div>
            <div className="block lg:hidden">
              <MealDetailIngredients meal={meal} />
            </div>
          </div>
          <div className="hidden lg:block">
            <MealDetailIngredients meal={meal} />
          </div>
          <div className="block lg:hidden">
            <MealDetailInstructions meal={meal} />
          </div>
        </div>
      </main>
    </div>
  );
}
