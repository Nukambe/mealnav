import FormInput from '../../components/shared/Form/FormInput';
import Button from '../../components/shared/Button/Button';

export default function StepThree() {
  return (
    <div>
      <form action="#" method="POST" className="space-y-6">
        <FormInput
          title="Name"
          label="name"
          type="text"
          autocomplete="name"
          required
        />

        <Button
          type="submit"
          link="/signup/step-four"
          className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Next
        </Button>
      </form>
    </div>
  );
}
