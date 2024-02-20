import Container from '../../../components/shared/Container/Container';
import Button from '../../../components/shared/Button/Button';

export default function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <img
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        //   src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It's time to revolutionize your meal planning and embrace a
            healthier, more organized lifestyle.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Get 2 months free
          </Button>
        </div>
      </Container>
    </section>
  );
}
