import clsx from 'clsx';
import { Meal, ingredient } from '../meals/mealTypes';
import { UnitPipe } from './unitPipe';
import React from 'react';

const unitPipe = new UnitPipe();

export default function MealDetailIngredients({ meal }: { meal: Meal }) {
  const [servings, setServings] = React.useState(1);

  return (
    <section
      aria-labelledby="timeline-title"
      className="lg:col-span-1 lg:col-start-3"
    >
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
        <div className="flex justify-between items-center">
          <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
            Ingredients
          </h2>
          <h3>
            Servings:{' '}
            <input
              type="number"
              min={1}
              value={servings}
              onChange={(e) => setServings(Number(e.target.value))}
              className="w-16 h-10 px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </h3>
        </div>
        <hr className="mt-4" />
        <div className="mt-6 flow-root">
          <ul className="-mb-8">
            {meal.recipeIngredient.map((ingredient, index) => (
              <li key={index}>
                <Ingredient ingredient={ingredient} servings={servings} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Ingredient({
  ingredient,
  servings,
}: {
  ingredient: ingredient;
  servings: number;
}) {
  return (
    <div className="relative pb-8">
      <div className="relative flex space-x-3">
        <div className="w-16 h-16 rounded-full bg-gray-400 flex flex-col items-center justify-center ring-8 ring-white text-white">
          <p
            className={clsx(
              'font-semibold',
              ingredient.quantity === -1 && 'text-2xl',
              ingredient.quantity !== -1 && 'text-lg',
            )}
          >
            {ingredient.quantity === -1
              ? 'Any'
              : (ingredient.quantity * servings).toFixed(2)}
          </p>
          <p className="text-sm text-white opacity-80">
            {unitPipe.abbreviate(ingredient.unit)}
          </p>
        </div>
        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
          <div className="flex items-center">
            <p className="text-lg text-gray-500">{ingredient.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
