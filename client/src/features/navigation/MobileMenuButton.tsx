import React from 'react';
import Button from '../../components/shared/Buttons/Button';
import HamburgerIcon from '../../components/shared/Icons/HamburgerIcon';

export default function MobileMenuButton({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="relative z-10 flex items-center lg:hidden">
      <Button
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Open menu</span>
        {open ? <HamburgerIcon /> : <HamburgerIcon />}
      </Button>
    </div>
  );
}
