import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import SignUp from './pages/SignUp';
import SignIn, { loader as signInLoader } from './pages/SignIn';
import LandingPage from './pages/LandingPage';
import CalendarPage from './pages/CalendarPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signin',
    element: <SignIn />,
    errorElement: <ErrorPage />,
    loader: signInLoader,
  },
  {
    path: '/app',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <CalendarPage /> }],
  },
]);
