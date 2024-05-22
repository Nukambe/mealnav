import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export default function NavigationLink({
  item,
}: {
  item: { to: string; name: string };
}) {
  return (
    <NavLink
      key={item.name}
      to={item.to}
      end
      className={({ isActive, isPending, isTransitioning }) =>
        clsx(
          isActive
            ? 'bg-gray-100 text-gray-900'
            : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
          'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium',
        )
      }
    >
      {item.name}
    </NavLink>
  );
}
