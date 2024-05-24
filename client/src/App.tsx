import { Outlet, redirect } from 'react-router-dom';
import csrfFetch from './app/fetch';
import Cookies from 'js-cookie';
import Navigation from './features/navigation/Navigation';
import './App.css';

export async function loader(dispatch: any) {
  const refreshToken = Cookies.get('refreshToken');
  if (!refreshToken) return redirect('/signin');

  const data = await csrfFetch('/api/auth/refresh', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${refreshToken}`,
    },
  });

  if (data.accessToken && data.refreshToken) {
    return null;
  }

  return redirect('/signin');
}

function App() {
  return (
    <>
      <Navigation />
      <div className="h-16 lg:h-32" /> {/* Offset nav height */}
      <Outlet />
    </>
  );
}

export default App;
