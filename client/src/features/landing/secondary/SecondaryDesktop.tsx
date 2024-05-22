import React from 'react';
import clsx from 'clsx';
import { features } from './secondaryFeatures';
import SecondaryFeature from './SecondaryFeature';

export default function FeaturesDesktop() {
  const [selectedIndex] = React.useState(0);

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
      </>
    </div>
  );
}
