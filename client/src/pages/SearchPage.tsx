import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Filters from '../features/search/Filters';
import MealGrid from '../features/search/MealGrid';
import {
  selectActiveFilters,
  selectFilterOptions,
  selectName,
} from '../features/search/searchSlice';
import { getAllMeals } from '../features/meals/mealsSlice';
import { FilterOptions, isMinMax } from '../features/search/searchTypes';

export default function SearchPage() {
  const dispatch = useAppDispatch();
  const filters: any = useAppSelector(selectFilterOptions);
  const activeFilters = useAppSelector(selectActiveFilters);
  const name = useAppSelector(selectName);

  React.useEffect(() => {
    const query: any = activeFilters.reduce((params, filter) => {
      if (isMinMax(filters[filter as keyof FilterOptions])) {
        const minMax: any = {};
        const filterQuery = filter.charAt(0).toUpperCase() + filter.slice(1);
        if (filters[filter]['min']) {
          minMax[`min${filterQuery}`] = filters[filter]['min'];
        }
        if (filters[filter]['max']) {
          minMax[`max${filterQuery}`] = filters[filter]['max'];
        }
        return {
          ...params,
          ...minMax,
        };
      } else {
        return {
          ...params,
          [filter]: filters[filter].selected.join(','),
        };
      }
    }, {});
    query.name = name;
    dispatch(getAllMeals({ ...query, fullDetails: '1' }));
  }, [activeFilters, filters, dispatch, name]);

  return (
    <div className="bg-gray-50">
      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Meals {name && `for ${name}`}
            </h1>
            <p className="mt-4 max-w-xl text-sm text-gray-700">
              Simplify your meal planning with our curated recipes and meal
              suggestions. Enhance your culinary journey and enjoy a healthier
              lifestyle with our tailored meal plans.
            </p>
          </div>
        </div>
        <Filters />
        <MealGrid />
      </main>
    </div>
  );
}
