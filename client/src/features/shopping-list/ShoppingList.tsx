import React from 'react';
import { Mealplan } from '../meal-plan/mealplanTypes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getFullMeals, selectFullMeals } from '../meals/mealsSlice';
import Cookies from 'js-cookie';

export default function ShoppingList({
  plan,
  servings,
  setServings,
}: {
  plan: Mealplan[];
  servings: { mealId: number; servings: number }[];
  setServings: React.Dispatch<
    React.SetStateAction<{ mealId: number; servings: number }[]>
  >;
}) {
  const dispatch = useAppDispatch();
  const meals = useAppSelector(selectFullMeals);
  const [cookie, setCookie] = React.useState(`shopped-${plan[0]?.date}`);
  const [shopped, setShopped] = React.useState<
    { name: string; checked: boolean }[]
  >(JSON.parse(Cookies.get(`shopped-${plan[0]?.date}`) || '[]'));

  React.useEffect(() => {
    const missingMeals = plan.filter(
      (mealPlan) => !meals.find((meal) => meal.id === mealPlan.meal.id),
    );
    if (missingMeals.length) {
      dispatch(getFullMeals(missingMeals.map((mealPlan) => mealPlan.meal.id)));
    }
  }, [plan, dispatch, meals]);

  // Update the cookie key whenever the plan changes
  React.useEffect(() => {
    const newCookieKey = `shopped-${plan[0]?.date}`;
    setCookie(newCookieKey);
    const savedShopped = JSON.parse(Cookies.get(newCookieKey) || '[]');
    setShopped(savedShopped);
  }, [plan]);

  // Update the cookie whenever shopped changes
  React.useEffect(() => {
    if (cookie) {
      Cookies.set(cookie, JSON.stringify(shopped), {
        expires: 32,
      });
      console.log('Cookie set:', cookie, shopped);
    }
  }, [shopped, cookie]);

  const totalIngredients = React.useMemo(() => {
    return plan.reduce(
      (acc, mealPlan, index) => {
        const meal = meals.find((meal) => meal.id === mealPlan.meal.id);
        if (!meal) return acc;
        const ingredients = meal.recipeIngredient.map((ingredient) => ({
          ...ingredient,
          quantity: ingredient.quantity * servings[index].servings,
        }));
        ingredients.forEach((ingredient) => {
          const accIngredient = acc.find(
            (accIngredient) => accIngredient.name === ingredient.name,
          );
          if (accIngredient) {
            accIngredient.quantity += ingredient.quantity;
          } else {
            acc.push(ingredient);
          }
        });
        return acc;
      },
      [] as { name: string; quantity: number; unit: string }[],
    );
  }, [meals, plan, servings]);

  const handleServingsChange = (index: number, value: number) => {
    setServings((prev) => {
      const next = [...prev];
      next[index].servings = value;
      return next;
    });
  };

  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold leading-6 text-gray-900 mt-4">
        Shopping List ({totalIngredients.length} items)
      </h3>
      <ul>
        {servings.map((serving, index) => (
          <li key={index} className="mt-4 flex justify-between items-center">
            <h4 className="text-sm font-semibold leading-6 text-gray-900">
              {meals.find((meal) => meal.id === serving.mealId)?.name ||
                serving.mealId}
            </h4>
            <div className="flex items-center mt-2">
              <label
                htmlFor={`servings-${serving.mealId}`}
                className="text-sm text-gray-900"
              >
                Servings:
              </label>
              <input
                type="number"
                min={1}
                id={`servings-${serving.mealId}`}
                className="w-16 h-8 text-sm text-center border border-gray-300 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none ml-2"
                value={servings[index].servings}
                onChange={(e) =>
                  handleServingsChange(index, parseInt(e.target.value, 10))
                }
              />
            </div>
          </li>
        ))}
      </ul>
      <hr className="my-4 border-gray-300" />
      <ul className="mt-2 flex flex-col gap-2">
        {totalIngredients.map((ingredient) => (
          <li key={ingredient.name} className="flex items-center">
            <input
              type="checkbox"
              className="w-8 h-8 text-sm text-center border border-gray-300 rounded-md text-green-500 ring-1 ring-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
              checked={
                shopped.find((item) => item.name === ingredient.name)
                  ?.checked || false
              }
              onChange={(e) =>
                setShopped((prev) => {
                  const next = [...prev];
                  const item = next.find(
                    (item) => item.name === ingredient.name,
                  );
                  if (item) {
                    item.checked = e.target.checked;
                  } else {
                    next.push({
                      name: ingredient.name,
                      checked: e.target.checked,
                    });
                  }
                  return next;
                })
              }
            />
            <span className="ml-2 text-sm text-gray-900">
              {ingredient.name} -{' '}
              {ingredient.quantity > 0
                ? ingredient.quantity.toFixed(2)
                : 'Preference'}{' '}
              {ingredient.unit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
