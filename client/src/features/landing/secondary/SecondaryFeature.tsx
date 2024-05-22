import clsx from 'clsx';
import { Feature } from './secondaryFeatures';

export default function SecondaryFeature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature;
  isActive: boolean;
}) {
  return (
    <div className={clsx(className, 'opacity-75')} {...props}>
      <div className={clsx('w-9 rounded-lg', 'bg-green-600')}>
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3 className={clsx('mt-6 text-sm font-medium', 'text-green-600')}>
        {feature.title}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.subtitle}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  );
}
