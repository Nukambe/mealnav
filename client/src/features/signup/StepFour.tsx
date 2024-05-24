import FormInput from '../../components/shared/Form/FormInput';

export default function StepFour({
  terms,
  setTerms,
  onSubmit,
}: {
  terms: boolean;
  setTerms: (terms: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <div>
      <form action="#" method="POST" className="space-y-6">
        <FormInput
          title="Terms and Conditions"
          label="terms"
          type="checkbox"
          required
          checked={terms}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTerms(e.target.checked)
          }
        />

        <p>
          By signing up, you agree to our{' '}
          <a
            href="https://www.wesleychappell.com/"
            className="text-green-600"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Terms and Conditions
          </a>{' '}
          and{' '}
          <a
            href="https://www.linkedin.com/in/weschap/"
            className="text-green-600"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Privacy Policy
          </a>
        </p>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onSubmit}
            disabled={!terms}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
