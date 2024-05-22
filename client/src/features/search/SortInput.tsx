import clsx from 'clsx';
import { useAppDispatch } from '../../app/hooks';
import { setSortOption } from './searchSlice';
import { SortOption, SortOptions } from './searchTypes';

export default function SortInput({
  sort,
  option,
}: {
  sort: keyof SortOptions;
  option: SortOption;
}) {
  const dispatch = useAppDispatch();

  const dispatchSortOption = () => {
    dispatch(setSortOption({ sort }));
  };

  return (
    <button
      className={clsx(
        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
        option.current ? 'bg-gray-100' : '',
        'flex justify-between px-4 py-2 text-sm w-full text-left hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900',
      )}
      onClick={dispatchSortOption}
    >
      {sort}
      <span>{option.order === 'ASC' ? '↑' : '↓'}</span>
    </button>
  );
}
