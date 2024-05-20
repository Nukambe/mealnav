import React from 'react';
import csrfFetch from '../../app/fetch';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function ProfileDropdown() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const accessToken = Cookies.get('accessToken');

  const handleSignOut = () => {
    csrfFetch('/api/auth/signout', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    })
      .then((_data) => {
        navigate('/signin');
      })
      .catch((_err) => {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        navigate('/signin');
      });
  };

  return (
    <div className="relative ml-4 flex-shrink-0">
      <div>
        <button
          className="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/OOjs_UI_icon_userAvatar.svg"
            alt="User avatar"
          />
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
