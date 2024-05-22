import Container from '../../../components/shared/Container/Container';
import Logo from '../../../components/shared/Logo/Logo';
import Copyright from '../../../components/shared/Copyright/Copyright';

export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <a href="#features">Features</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#pricing">Pricing</a>
            </div>
          </nav>
        </div>
        <Copyright />
      </Container>
    </footer>
  );
}
