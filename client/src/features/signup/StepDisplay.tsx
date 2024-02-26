import clsx from 'clsx';
import ChevronLeft from '../../components/shared/Icons/ChevronLeft';
import { steps } from './steps';
import Button from '../../components/shared/Button/Button';

export default function StepDisplay({
  step,
  setStep,
}: {
  step: number;
  setStep: (step: number) => void;
}) {
  return (
    <div>
      <div className="flex py-2 w-full gap-1">
        {steps?.map((signUpStep: any, index: number) => (
          <StepBar key={index} {...signUpStep} active={index < step} />
        ))}
      </div>
      <div className="flex">
        <Button disabled={step === 1} onClick={() => setStep(step - 1)}>
          <ChevronLeft />
        </Button>
        <div>
          <p className="text-gray-400 font-bold">
            Step {step} of {steps.length}
          </p>
          <h3>{steps[step - 1].title}</h3>
        </div>
      </div>
    </div>
  );
}

function StepBar({ active }: { active: boolean }) {
  return (
    <div
      className={clsx('h-1 w-full', active ? 'bg-green-500' : 'bg-gray-300')}
    />
  );
}
