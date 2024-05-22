import Button from '../../components/shared/Buttons/Button';
import GoogleIcon from '../../components/shared/Icons/GoogleIcon';
import GitHubIcon from '../../components/shared/Icons/GitHubIcon';

export default function Sso() {
  return (
    <div className="mt-10">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm font-medium leading-6">
          <span className="bg-white px-6 text-gray-900">Or continue with</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <Button
          href="/"
          className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
        >
          <GoogleIcon />
          <span className="text-sm font-semibold leading-6">Google</span>
        </Button>

        <Button
          href="/"
          className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
        >
          <GitHubIcon />
          <span className="text-sm font-semibold leading-6">GitHub</span>
        </Button>
      </div>
    </div>
  );
}
