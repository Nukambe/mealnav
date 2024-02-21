import FormInput from '../../components/shared/Form/FormInput';
import Button from '../../components/shared/Button/Button';

export default function StepTwo() {
  return (
    <div>
      <form action="#" method="POST" className="space-y-6">
        <FormInput
          title="Password"
          label="password"
          type="password"
          autocomplete="off"
          required
        />

        <div>
          <p>Your password must contain at least</p>
          <ul>
            <li>10 characters</li>
            <li>1 letter</li>
            <li>1 number or special character (example: # ? ! &)</li>
          </ul>
        </div>

        <Button
          type="submit"
          link="/signup/step-three"
          className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Next
        </Button>
      </form>
    </div>
  );
}
