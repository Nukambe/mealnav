import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectStatus, signin, Status } from '../features/user/userSlice';
import Button from '../components/shared/Buttons/Button';
import FormInput from '../components/shared/Form/FormInput';
// import Sso from '../features/sso/Sso';
import csrfFetch from '../app/fetch';
import Cookies from 'js-cookie';
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

export async function loader() {
  const refreshToken = Cookies.get('refreshToken');
  if (!refreshToken) return null;

  const data = await csrfFetch('/api/auth/refresh', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${refreshToken}`,
    },
  });

  if (data.accessToken && data.refreshToken) {
    return redirect('/app');
  }

  return null;
}

export default function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const status = useAppSelector(selectStatus);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    dispatch(signin({ username: email, password }));
  };

  React.useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');
    if (accessToken && refreshToken) {
      navigate('/app');
    }
    if (status === Status.failed) {
      setError(true);
    }
  }, [status, navigate]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <a
        href="/"
        className="flex items-center justify-center bg-green-500 rounded-full p-2 text-white w-fit-content mx-auto mt-4 px-4 py-2 text-sm font-semibold leading-6 shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Return Home
      </a>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <FormInput
              title="Email Address"
              label="email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormInput
              title="Password"
              label="password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign in
              </Button>
            </div>
          </form>

          {error && (
            <p className="text-red-500 text-sm mt-4">
              Invalid Email Address or Password
            </p>
          )}
          {/* <Sso /> */}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link
            to={'/signup'}
            className="font-semibold leading-6 text-green-600 hover:text-green-500"
          >
            Start a 14 day free trial
          </Link>
        </p>
      </div>
    </div>
  );
}
