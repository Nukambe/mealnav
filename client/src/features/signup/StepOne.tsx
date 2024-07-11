import React from 'react';
import Button from '../../components/shared/Buttons/Button';
import FormInput from '../../components/shared/Form/FormInput';
import csrfFetch from '../../app/fetch';

export default function StepOne({
  email,
  setEmail,
  next,
}: {
  email: string;
  setEmail: (email: string) => void;
  next: () => void;
}) {
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const checkExistingEmail = async (email: string) => {
    const data = await csrfFetch(`/api/users/email/${email}`);
    return data.exists;
  };

  const validateEmail = async () => {
    setError(false);
    setErrorMessage('');

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (validEmail) {
      const exists = await checkExistingEmail(email);

      if (exists) {
        setError(true);
        setErrorMessage('Email already exists');
      } else {
        next();
      }
    } else {
      setError(true);
      setErrorMessage('Invalid email');
    }
  };

  return (
    <div>
      <form className="space-y-6">
        <FormInput
          title="Email Address"
          label="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        {error && (
          <p className="text-red-500 text-sm font-semibold">{errorMessage}</p>
        )}

        <div>
          <Button
            type="button"
            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            onClick={validateEmail}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
