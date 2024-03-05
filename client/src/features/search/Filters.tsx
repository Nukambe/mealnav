import SortButton from './SortButton';
import FilterButton from './FilterButton';
import ActiveFilters from './ActiveFilters';

export default function Filters() {
  return (
    <section aria-labelledby="filter-heading">
      <h2 id="filter-heading" className="sr-only">
        Filters
      </h2>
      <div className="border-b border-gray-200 bg-white pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <SortButton />
          <FilterButton />
        </div>
      </div>
      <ActiveFilters />
    </section>
  );
}
