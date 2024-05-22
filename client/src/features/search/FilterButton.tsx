import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectActiveFilters, selectFilterOptions } from './searchSlice';
import { FilterOptions } from './searchTypes';
import FilterInput from './FilterInput';

export default function FilterButton() {
  const filters = useAppSelector(selectFilterOptions);
  const [open, setOpen] = React.useState(false);
  const activeFilters = useAppSelector(selectActiveFilters);

  return (
    <>
      <button
        type="button"
        className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
        onClick={() => setOpen(!open)}
      >
        Filters
      </button>

      <div className="hidden sm:block">
        <div className="flow-root">
          <div className="-mx-4 flex items-center divide-x divide-gray-200">
            <div className="relative inline-block px-4 text-left">
              <button
                className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setOpen(!open)}
              >
                <span>Filters</span>
                {activeFilters.length > 0 ? (
                  <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                    {activeFilters.length}
                  </span>
                ) : null}
                {/* <ChevronDownIcon
                              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            /> */}
              </button>
              {open && (
                <div className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <ul className="space-y-4">
                    {Object.entries(filters).map(([filter, value]) => (
                      <li key={filter}>
                        <FilterInput
                          filter={filter as keyof FilterOptions}
                          value={value}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
