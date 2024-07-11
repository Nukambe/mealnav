import FormInput from '../../components/shared/Form/FormInput';
import Button from '../../components/shared/Buttons/Button';
import React from 'react';

export default function StepTwo({
  password,
  setPassword,
  next,
}: {
  password: string;
  setPassword: (password: string) => void;
  next: () => void;
}) {
  const [error, setError] = React.useState(false);

  return (
    <div>
      <form action="#" method="#" className="space-y-6">
        <FormInput
          title="Password"
          label="password"
          type="password"
          autoComplete="off"
          required
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        <div>
          <p>Your password must contain at least:</p>
          <ul className="list-disc list-inside">
            <li>10 characters</li>
            <li>1 letter</li>
            <li>1 number</li>
          </ul>
          {error && (
            <p className="text-red-500 text-sm mt-4">
              Please enter a valid password
            </p>
          )}
        </div>

        <Button
          type="button"
          className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          onClick={() => {
            setError(false);
            const validPassword =
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/.test(password);
            if (validPassword) {
              next();
            } else {
              setError(true);
            }
          }}
        >
          Next
        </Button>
      </form>
    </div>
  );
}
