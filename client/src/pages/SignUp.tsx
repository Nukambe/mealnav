import React from 'react';
import Button from '../components/shared/Buttons/Button';
import StepDisplay from '../features/signup/StepDisplay';
import Sso from '../features/sso/Sso';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectStatus, signup, Status } from '../features/user/userSlice';
import StepOne from '../features/signup/StepOne';
import StepTwo from '../features/signup/StepTwo';
import StepThree from '../features/signup/StepThree';
import StepFour from '../features/signup/StepFour';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');
    if (accessToken && refreshToken) {
      navigate('/app');
    }
  }, [userStatus, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    dispatch(signup({ email, password, name }));
  };

  return (
    <div
      className="flex min-h-full flex-1"
      style={{
        pointerEvents: loading ? 'none' : 'auto',
        opacity: loading ? 0.5 : 1,
      }}
    >
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
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
                next={() =>
                  email ? setStep(2) : setError('Email is required')
                }
              />
            )}
            {step === 2 && (
              <StepTwo
                password={password}
                setPassword={setPassword}
                next={() =>
                  password ? setStep(3) : setError('Password is required')
                }
              />
            )}
            {step === 3 && (
              <StepThree
                name={name}
                setName={setName}
                next={() => (name ? setStep(4) : setError('Name is required'))}
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
              {/* <Sso /> */}
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
          src="https://i.insider.com/5cd000e4e9f08a3acd0b310b?width=700"
          alt=""
        />
      </div>
    </div>
  );
}
