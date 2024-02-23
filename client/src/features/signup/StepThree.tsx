import FormInput from '../../components/shared/Form/FormInput';
import Button from '../../components/shared/Button/Button';

export default function StepThree({
  name,
  setName,
  next,
}: {
  name: string;
  setName: (name: string) => void;
  next: () => void;
}) {
  return (
    <div>
      <form action="#" method="POST" className="space-y-6">
        <FormInput
          title="Name"
          label="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />

        <Button
          type="submit"
          className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          onClick={next}
        >
          Next
        </Button>
      </form>
    </div>
  );
}
