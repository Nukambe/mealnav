import React from 'react';
import Button from '../components/shared/Button/Button';
import StepDisplay from '../features/signup/StepDisplay';
import Sso from '../features/sso/Sso';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectStatus, signup, Status } from '../features/user/userSlice';
import StepOne from '../features/signup/StepOne';
import StepTwo from '../features/signup/StepTwo';
import StepThree from '../features/signup/StepThree';
import StepFour from '../features/signup/StepFour';

export default function SignUp() {
  const dispatch = useAppDispatch();
  const userStatus = useAppSelector(selectStatus);

  const [step, setStep] = React.useState(1);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [terms, setTerms] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    setLoading(userStatus === Status.loading);
    setError(userStatus === Status.failed ? 'Failed to sign up' : '');
  }, [userStatus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    dispatch(signup({ email, password, name }));
  };

  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up to start planning
            </h2>
          </div>

          <StepDisplay step={step} setStep={setStep} />

          <div className="mt-10">
            {step === 1 && (
              <StepOne
                email={email}
                setEmail={setEmail}
                next={() => setStep(2)}
              />
            )}
            {step === 2 && (
              <StepTwo
                password={password}
                setPassword={setPassword}
                next={() => setStep(3)}
              />
            )}
            {step === 3 && (
              <StepThree
                name={name}
                setName={setName}
                next={() => setStep(4)}
              />
            )}
            {step === 4 && (
              <StepFour
                terms={terms}
                setTerms={setTerms}
                onSubmit={handleSubmit}
              />
            )}

            <div className="mt-10">
              <Sso />
              <p className="text-sm text-center leading-6 text-gray-500 mt-8">
                Already a member?{' '}
                <Button
                  to="/signin"
                  className="font-semibold text-green-600 hover:text-green-500"
                >
                  Sign In
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
