import LandingHeader from '../features/landing/header/Header';
import Hero from '../features/landing/hero/Hero';
import PrimaryFeatures from '../features/landing/primary/Primary';

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <main>
        <Hero />
        <PrimaryFeatures />
        {/* SecondaryFeatures */}
        {/* CallToAction */}
        {/* Testimonials */}
        {/* Pricing */}
        {/* FAQ */}
      </main>
      {/* Footer */}
    </>
  );
}
