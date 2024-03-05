import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFilterOptions, setFilterOption } from './searchSlice';
import { FilterOptions } from './searchTypes';
import { initialState as emptyFilter } from './searchSlice';

export default function FilterInput({
  filter,
  value,
}: {
  filter: keyof FilterOptions;
  value: { min: number; max: number } | string[];
}) {
  const emptyFilterOption = JSON.stringify(
    emptyFilter.filters[filter as keyof FilterOptions],
  );
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilterOptions);

  const dispatchSetFilterOption = (checked: boolean) => {
    // dispatch(setFilterOption());
  };

  return (
    <div key={filter} className="flex items-center">
      <input
        id={`filter-${filter}`}
        name={`${filter}[]`}
        // defaultValue={value}
        type="checkbox"
        // defaultChecked={option.checked}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        checked={JSON.stringify(value) !== emptyFilterOption}
      />
      <label
        htmlFor={`filter-${filter}`}
        className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
      >
        {filter}
      </label>
    </div>
  );
}
