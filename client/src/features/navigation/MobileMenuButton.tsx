import React from 'react';
import Button from '../../components/shared/Buttons/Button';
import HamburgerIcon from '../../components/shared/Icons/HamburgerIcon';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';

export default function MobileMenuButton({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="relative z-10 flex items-center lg:hidden">
        <Button
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open menu</span>
          {!open && <HamburgerIcon />}
        </Button>
      </div>
      <div>
        {open && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>MealNav</div>
                  <div className="-mr-2">
                    <Button
                      className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <img
                        className="h-6 w-6"
                        src="https://upload.wikimedia.org/wikipedia/commons/1/18/OOjs_UI_icon_close-ltr.svg"
                        alt="Close"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <Link
                    to="/app"
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    Calendar
                  </Link>
                </div>
                <div>
                  <Link
                    to="/app/meals"
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    Meals
                  </Link>
                </div>
                <div className="flex justify-end">
                  <ProfileDropdown />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
