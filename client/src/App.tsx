import { Outlet, redirect } from 'react-router-dom';
import csrfFetch from './app/fetch';
import Cookies from 'js-cookie';
import './App.css';

export async function loader() {
  const refreshToken = Cookies.get('refreshToken');
  if (!refreshToken) return redirect('/signin');

  const data = await csrfFetch('/api/auth/refresh', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${refreshToken}`,
    },
  });

  if (data.accessToken && data.refreshToken) {
    console.log('refresh token', data.refreshToken);
    return null;
  }

  return redirect('/signin');
}

function App() {
  return <Outlet />;
}

export default App;
