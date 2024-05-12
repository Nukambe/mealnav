import React from 'react';
import clsx from 'clsx';
import Container from '../../../components/shared/Container/Container';
import { features } from './primaryFeatures';

export default function PrimaryFeatures() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-green-600 pb-28 pt-20 sm:py-32"
    >
      <img
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        // src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            All the tools you need for effortless meal planning.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Designed for those who value both health and taste, without the
            complexity of tracking every detail. Perfect for your busy
            lifestyle.
          </p>
        </div>
        <div className="mt-16 flex flex-col items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
          {features.map((feature, featureIndex) => (
            <div
              key={feature.title}
              className={clsx(
                'group relative rounded-full px-4 py-1 lg:p-6 w-full text-center',
                'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10',
              )}
            >
              <h3>
                <div
                  className={clsx(
                    'font-display text-lg ui-not-focus-visible:outline-none text-green-600 lg:text-white',
                  )}
                >
                  <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                  {feature.title}
                </div>
              </h3>
              <p className={clsx('mt-2 hidden text-sm lg:block text-white')}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
