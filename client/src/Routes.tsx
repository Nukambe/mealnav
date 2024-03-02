import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';

import App, { loader as appLoader } from './App';
import ErrorPage from './pages/ErrorPage';
import SignUp from './pages/SignUp';
import SignIn, { loader as signInLoader } from './pages/SignIn';
import LandingPage from './pages/LandingPage';
import CalendarPage from './pages/CalendarPage';
import MealPage, { loader as MealLoader } from './pages/MealPage';

export default function Routes() {
  const dispatch = useAppDispatch();

  const routes = createBrowserRouter([
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
      // errorElement: <ErrorPage />,
      loader: signInLoader,
    },
    {
      path: '/app',
      element: <App />,
      errorElement: <ErrorPage />,
      loader: appLoader,
      children: [
        { path: '', element: <CalendarPage /> },
        {
          path: 'meals/:id',
          element: <MealPage />,
          loader: MealLoader(dispatch),
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
