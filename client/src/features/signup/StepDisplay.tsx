import { steps } from './steps';

export default function StepDisplay({ ...props }) {
  return (
    <div>
      <div className="flex h-2 w-full">
        {steps?.map((step: any, index: number) => (
          <StepBar key={index} {...step} />
        ))}
      </div>
    </div>
  );
}

function StepBar({ ...props }) {
  return (
    <div>
      <div className="h-1 w-full bg-green-500" />
    </div>
  );
}
