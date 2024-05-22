import React from 'react';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSortOptions, setSortOption } from './searchSlice';
import Button from '../../components/shared/Buttons/Button';
import { SortOption, SortOptions } from './searchTypes';
import SortInput from './SortInput';

export default function SortButton() {
  const sorts = useAppSelector(selectSortOptions);
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <Button
          className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
          onClick={() => setOpen(!open)}
        >
          Sort v
        </Button>
      </div>

      {open && (
        <div className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {Object.entries(sorts).map(([sort, option]) => (
              <SortInput
                key={sort}
                sort={sort as keyof SortOptions}
                option={option}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
