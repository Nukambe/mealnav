import React from 'react';
import Logo from '../../components/shared/Logo/Logo';
import MobileMenuButton from './MobileMenuButton';
import ProfileDropdown from './ProfileDropdown';
import Search from './Search';
import { navigation } from './navigation';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="bg-white shadow fixed w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="relative z-10 flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <Logo />
            </div>
          </div>
          <Search />
          <MobileMenuButton open={open} setOpen={setOpen} />
          <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
            {/* Other buttons... */}
            <ProfileDropdown />
          </div>
        </div>
        <nav
          className="hidden lg:flex lg:space-x-8 lg:py-2"
          aria-label="Global"
        >
          {navigation.map((item) => (
            <NavigationLink key={item.name} item={item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
