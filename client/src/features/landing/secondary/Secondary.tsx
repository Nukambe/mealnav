import Container from '../../../components/shared/Container/Container';
import FeaturesMobile from './SecondaryMobile';
import FeaturesDesktop from './SecondaryDesktop';

export default function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Streamline your daily meal planning.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because enhancing your health journey should simplify your life, not
            complicate it.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  );
}
