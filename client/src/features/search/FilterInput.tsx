import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectActiveFilters,
  setActiveFilter,
  setFilterMinMax,
  setFilterOption,
} from './searchSlice';
import { FilterOptions, MinMax, isMinMax } from './searchTypes';
import React from 'react';

export default function FilterInput({
  filter,
  value,
}: {
  filter: keyof FilterOptions;
  value: MinMax | { options: string[]; selected: string[] };
}) {
  const dispatch = useAppDispatch();
  const activeFilters = useAppSelector(selectActiveFilters);

  const activateFilter = (checked: boolean) => {
    dispatch(setActiveFilter({ filter, checked }));
  };

  return (
    <div key={filter} className="flex items-center justify-between">
      <label
        htmlFor={`filter-${filter}`}
        className="ml-3 whitespace-nowrap pr-6 text-sm font-medium
        text-gray-900"
      >
        <input
          id={`filter-${filter}`}
          name={`${filter}[]`}
          // defaultValue={value}
          type="checkbox"
          // defaultChecked={option.checked}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          checked={activeFilters.includes(filter)}
          onChange={(e) => activateFilter(e.target.checked)}
        />{' '}
        {filter}
      </label>
      {isMinMax(value) ? (
        <FilterMinMaxInput filter={filter} value={value} />
      ) : (
        <FilterSelectInput filter={filter} value={value} />
      )}
    </div>
  );
}

function FilterMinMaxInput({
  filter,
  value,
}: {
  filter: string;
  value: { min: number; max: number };
}) {
  const dispatch = useAppDispatch();
  const changeMinMax = (minMax: 'min' | 'max', value: number) => {
    dispatch(
      setFilterMinMax({ filter: filter as keyof FilterOptions, minMax, value }),
    );
  };

  return (
    <div className="flex justify-between items-center">
      {['min', 'max'].map((minMax) => (
        <label
          key={minMax}
          htmlFor={`filter-${filter}-${minMax}`}
          className="ml-3 whitespace-nowrap text-sm font-medium text-gray-900"
        >
          {minMax}{' '}
          <input
            id={`filter-${filter}-${minMax}`}
            name={`${filter}-${minMax}`}
            type="number"
            className="h-8 w-20 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            min="0"
            value={value[minMax as 'min' | 'max']}
            onChange={(e) =>
              changeMinMax(minMax as 'min' | 'max', Number(e.target.value))
            }
          />
        </label>
      ))}
    </div>
  );
}

function FilterSelectInput({
  filter,
  value,
}: {
  filter: string;
  value: { options: string[]; selected: string[] };
}) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);

  const selected = (option: string) => value.selected.includes(option);

  const selectOption = (option: string) => {
    dispatch(
      setFilterOption({ filter: filter as keyof FilterOptions, option }),
    );
  };

  return (
    <div className="relative w-36">
      <button
        className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onClick={() => setOpen(!open)}
      >
        <span className="block truncate">
          {value.selected.length ? value.selected.join('; ') : 'None'}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          {/* <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                /> */}
        </span>
      </button>

      {open && (
        <ul className="absolute right-0 z-10 mt-1 max-h-60 w-fit overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {value.options.map((option) => (
            <li key={option}>
              <button
                className={clsx(
                  selected(option)
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-900',
                  'flex justify-between pl-3 pr-9 py-2 whitespace-nowrap text-gray-900 w-full',
                )}
                onClick={() => selectOption(option)}
              >
                <span
                  className={clsx(
                    selected(option) ? 'font-semibold' : 'font-normal',
                    'block truncate',
                  )}
                >
                  {option}
                </span>
                <span
                  className={clsx(
                    selected(option) ? 'text-white' : 'text-indigo-600',
                  )}
                >
                  {selected(option) ? '✔' : ' '}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
