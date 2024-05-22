import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';

import App, { loader as appLoader } from './App';
import ErrorPage from './pages/ErrorPage';
import SignUp from './pages/SignUp';
import SignIn, { loader as signInLoader } from './pages/SignIn';
import LandingPage from './pages/LandingPage';
import CalendarPage from './pages/CalendarPage';
import MealsPage, { loader as mealsLoader } from './pages/MealsPage';
import MealPage, { loader as mealLoader } from './pages/MealPage';
import SearchPage from './pages/SearchPage';
import CreateMealPage from './pages/CreateMealPage';

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
          path: 'meals',
          // element: <MealsPage />,
          element: <SearchPage />,
        },
        {
          path: 'meals/:id',
          element: <MealPage />,
          loader: mealLoader(dispatch),
        },
        {
          path: 'search',
          element: <SearchPage />,
        },
        {
          path: 'create',
          element: <CreateMealPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
