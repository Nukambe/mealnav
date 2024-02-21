import { useRouteError } from 'react-router-dom';
import SlimLayout from '../components/shared/SlimLayout/SlimLayout';

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <SlimLayout>
      <div className="flex">
        <a href="/" aria-label="Home">
          {/* Logo */}
        </a>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">Oops!</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Sorry, an unexpected error has occurred.
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="mt-10">Go back home</button>
    </SlimLayout>
  );
}
