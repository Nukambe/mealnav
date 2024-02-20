import LandingHeader from '../features/landing/header/Header';
import Hero from '../features/landing/hero/Hero';
import PrimaryFeatures from '../features/landing/primary/Primary';
import SecondaryFeatures from '../features/landing/secondary/Secondary';
import CallToAction from '../features/landing/call/CallToAction';
import Testimonials from '../features/landing/testimonials/Testimonials';

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        {/* Pricing */}
        {/* FAQ */}
      </main>
      {/* Footer */}
    </>
  );
}
