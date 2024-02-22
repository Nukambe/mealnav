import FormInput from '../components/shared/Form/FormInput';
import Sso from '../features/sso/Sso';

export default function SignIn() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form className="space-y-6" action="#" method="POST">
            <FormInput
              title="Email Address"
              label="email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />

            <FormInput
              title="Password"
              label="password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <a
                  href="/"
                  className="font-semibold text-green-600 hover:text-green-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <Sso />
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a
            href="/"
            className="font-semibold leading-6 text-green-600 hover:text-green-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}
