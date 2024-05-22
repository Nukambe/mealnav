import Container from '../../../components/shared/Container/Container';
import Button from '../../../components/shared/Buttons/Button';

export default function LandingHeader() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            {/* <Button to="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Button> */}
            <div className="hidden md:flex md:gap-x-6">
              <a href="#features">Features</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#pricing">Pricing</a>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <Button to="/signin">Sign in</Button>
            </div>
            <Button to="/signup" color="blue">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">{/* <MobileNavigation /> */}</div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
