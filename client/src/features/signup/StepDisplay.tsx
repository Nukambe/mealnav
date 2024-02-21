import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import ChevronLeft from '../../components/shared/Icons/ChevronLeft';
import { steps } from './steps';
import Button from '../../components/shared/Button/Button';

export default function StepDisplay({ ...props }) {
  const location = useLocation();
  const stepIndex = steps.findIndex((step) => step.path === location.pathname);
  if (stepIndex === undefined) throw new Error('Step not found');

  const step = steps[stepIndex];

  return (
    <div>
      <div className="flex py-2 w-full gap-1">
        {steps?.map((step: any, index: number) => (
          <StepBar key={index} {...step} active={index <= stepIndex} />
        ))}
      </div>
      <div className="flex">
        <ChevronLeft />
        <div>
          <p className="text-gray-400 font-bold">
            Step {stepIndex + 1} of {steps.length}
          </p>
          <h3>{step.title}</h3>
        </div>
      </div>
    </div>
  );
}

function StepBar({ active, ...props }: { active: boolean }) {
  return (
    <div
      className={clsx('h-1 w-full', active ? 'bg-green-500' : 'bg-gray-300')}
    />
  );
}
