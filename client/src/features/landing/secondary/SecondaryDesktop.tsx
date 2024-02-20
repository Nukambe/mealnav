import React from 'react';
import clsx from 'clsx';
import { features } from './secondaryFeatures';
import SecondaryFeature from './SecondaryFeature';

export default function FeaturesDesktop() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <div className="hidden lg:mt-20 lg:block">
      <>
        <ul className="grid grid-cols-3 gap-x-8">
          {features.map((feature, featureIndex) => (
            <SecondaryFeature
              key={feature.subtitle}
              feature={{
                ...feature,
              }}
              isActive={featureIndex === selectedIndex}
              className="relative"
            />
          ))}
        </ul>
        <div className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
          <div className="-mx-5 flex">
            {features.map((feature, featureIndex) => (
              <div
                key={feature.subtitle}
                className={clsx(
                  'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                  featureIndex !== selectedIndex && 'opacity-60',
                )}
                style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                aria-hidden={featureIndex !== selectedIndex}
              >
                <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                  <img
                    className="w-full"
                    src={feature.image}
                    alt=""
                    sizes="52.75rem"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
        </div>
      </>
    </div>
  );
}
