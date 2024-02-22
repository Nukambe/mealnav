import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import SignUp from './pages/SignUp';
import StepOne from './features/signup/StepOne';
import StepTwo from './features/signup/StepTwo';
import StepThree from './features/signup/StepThree';
import StepFour from './features/signup/StepFour';
import SignIn from './pages/SignIn';
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
    children: [
      { path: '', element: <StepOne /> },
      { path: 'step-two', element: <StepTwo /> },
      { path: 'step-three', element: <StepThree /> },
      { path: 'step-four', element: <StepFour /> },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/app',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ path: 'calendar', element: <CalendarPage /> }],
  },
]);
