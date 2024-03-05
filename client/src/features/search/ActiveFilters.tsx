import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectFilterOptions } from './searchSlice';
import { initialState as emptySearch } from './searchSlice';
import { FilterOptions } from './searchTypes';
import ActiveFilter from './ActiveFilter';

export default function ActiveFilters() {
  const filters = useAppSelector(selectFilterOptions);
  const activeFilters = React.useMemo(() => {
    return Object.entries(filters).filter(([filter, value]) => {
      const emptyFilter = JSON.stringify(
        emptySearch.filters[filter as keyof FilterOptions],
      );
      const currentFilter = JSON.stringify(value);
      return emptyFilter !== currentFilter;
    }, 0);
  }, [filters]);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
        <h3 className="text-sm font-medium text-gray-500">
          Filters
          <span className="sr-only">, active</span>
        </h3>

        <div
          aria-hidden="true"
          className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
        />

        <div className="mt-2 sm:ml-4 sm:mt-0">
          <ul className="-m-1 flex flex-wrap items-center">
            {activeFilters.map(([filter, value]) => (
              <li className="inline">
                <ActiveFilter key={filter} filter={filter} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
