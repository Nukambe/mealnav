import React from 'react';
import { Mealplan } from '../meal-plan/mealplanTypes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getFullMeals, selectFullMeals } from '../meals/mealsSlice';
import Cookies from 'js-cookie';

export default function ShoppingList({ plan }: { plan: Mealplan[] }) {
  const dispatch = useAppDispatch();
  const meals = useAppSelector(selectFullMeals);
  const [servings, setServings] = React.useState<number[]>(plan.map(() => 1));
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
    setServings(plan.map(() => 1));
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
          quantity: ingredient.quantity * servings[index],
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
      next[index] = value;
      return next;
    });
  };

  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold leading-6 text-gray-900 mt-4">
        Shopping List ({totalIngredients.length} items)
      </h3>
      <ul className="mt-2 flex flex-col gap-2">
        {totalIngredients.map((ingredient, index) => (
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
              {ingredient.quantity > 0 ? ingredient.quantity : 'Preference'}{' '}
              {ingredient.unit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
