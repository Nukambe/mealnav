import Container from '../../../components/shared/Container/Container';
import SwirlyDoodle from './SwirlyDoodle';
import Plan from './Plan';

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-green-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              {/* <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-green-400" /> */}
              <span className="relative">Simple pricing,</span>
            </span>{' '}
            for everyone.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            It doesn’t matter what size your budget is, we have something for
            everyone.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Starter"
            price="FREE"
            description="Good for anyone who is just getting started."
            href="/signup"
            features={[
              'Access to the full database of recipes',
              'Test out the meal calendar',
            ]}
          />
          <Plan
            featured
            name="Basic"
            price="$5"
            description="For people ready to commit to the meal planning lifestyle."
            href="/signup"
            features={[
              'Access to the full database of recipes',
              'Save an unlimited number of recipes in the meal calendar',
              'Share your meal calendar with friends and family',
            ]}
          />
          <Plan
            name="Pro"
            price="$15"
            description="For the serious meal planner who wants it all."
            href="/signup"
            features={[
              'Access to the full database of recipes',
              'Save an unlimited number of recipes in the meal calendar',
              'Share your meal calendar with friends and family',
              'Get suggestions for meals based on your preferences',
              'Connect with nutritionists for personalized meal plans',
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
