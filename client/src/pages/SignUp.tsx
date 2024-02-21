import { Outlet } from 'react-router-dom';
import StepOne from '../features/signup/StepOne';
import Button from '../components/shared/Button/Button';
import GitHubIcon from '../components/shared/Icons/GitHubIcon';
import GoogleIcon from '../components/shared/Icons/GoogleIcon';
import StepDisplay from '../features/signup/StepDisplay';

export default function SignUp() {
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up to start planning
            </h2>
          </div>

          <StepDisplay />

          <div className="mt-10">
            <Outlet />

            <div className="mt-10">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button
                  href="/"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  <GoogleIcon />
                  <span className="text-sm font-semibold leading-6">
                    Google
                  </span>
                </Button>

                <Button
                  href="/"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  <GitHubIcon />
                  <span className="text-sm font-semibold leading-6">
                    GitHub
                  </span>
                </Button>
              </div>
              <p className="text-sm text-center leading-6 text-gray-500 mt-8">
                Already a member?{' '}
                <Button
                  href="/"
                  className="font-semibold text-green-600 hover:text-green-500"
                >
                  Sign In
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
