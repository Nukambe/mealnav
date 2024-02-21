import Button from '../../components/shared/Button/Button';
import FormInput from '../../components/shared/Form/FormInput';

export default function StepOne() {
  return (
    <div>
      <form action="#" method="POST" className="space-y-6">
        <FormInput
          title="Email Address"
          label="email"
          type="email"
          autocomplete="email"
          required
        />

        <div>
          <Button
            type="submit"
            link="/signup/step-two"
            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
