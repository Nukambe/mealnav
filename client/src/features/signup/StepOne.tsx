import Button from '../../components/shared/Buttons/Button';
import FormInput from '../../components/shared/Form/FormInput';

export default function StepOne({
  email,
  setEmail,
  next,
}: {
  email: string;
  setEmail: (email: string) => void;
  next: () => void;
}) {
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

        <div>
          <Button
            type="submit"
            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            onClick={() => {
              const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
              if (validEmail) {
                next();
              } else {
                alert('Please enter a valid email address');
              }
            }}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
