import { useAppSelector } from '../../app/hooks';
import { selectActiveFilters } from './searchSlice';
import ActiveFilter from './ActiveFilter';

export default function ActiveFilters() {
  const activeFilters = useAppSelector(selectActiveFilters);

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
            {activeFilters.map((filter) => (
              <li key={filter} className="inline">
                <ActiveFilter key={filter} filter={filter} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
