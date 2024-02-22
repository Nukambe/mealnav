import { Outlet } from 'react-router-dom';
import Button from '../components/shared/Button/Button';
import GitHubIcon from '../components/shared/Icons/GitHubIcon';
import GoogleIcon from '../components/shared/Icons/GoogleIcon';
import StepDisplay from '../features/signup/StepDisplay';
import Sso from '../features/sso/Sso';

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
              <Sso />
              <p className="text-sm text-center leading-6 text-gray-500 mt-8">
                Already a member?{' '}
                <Button
                  link="/signin"
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
