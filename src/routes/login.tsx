import { createFileRoute, redirect } from '@tanstack/react-router';

import LoginForm from '../features/auth/login-form';
import Card from '../components/card';
import { useState } from 'react';
import AuthFormFooter from '../features/auth/auth-form-footer';
import ForgotPasswordForm from '../features/auth/forgot-password.form';
import { SignUpForm } from '../features/auth/signup-form';
import { getCookie } from '../utils/utils';

export const Route = createFileRoute('/login')({
  beforeLoad: () => {
    if (getCookie('bearer')) {
      throw redirect({
        to: '/'
      });
    }
  },
  component: LoginComponent
});
export type FormType = 'login' | 'signup' | 'forgot';

function LoginComponent() {
  const [showFormType, setShowFormType] = useState<FormType>('login');
  return (
    <div className="h-[50rem] flex justify-center items-center">
      <Card size="lg">
        <div className="border-b-4 border-black pb-2 pt-4 mb-4">
          <h1 className="text-xl font-bold uppercase">
            {showFormType === 'login' && 'Sign in to StarBloom'}
            {showFormType === 'signup' && 'Create your account'}
            {showFormType === 'forgot' && 'Reset your password'}
          </h1>
        </div>
        <div className="border-b-4 border-black pb-6 mb-4">
          {showFormType === 'login' && <LoginForm />}
          {showFormType === 'signup' && <SignUpForm />}
          {showFormType === 'forgot' && <ForgotPasswordForm />}
        </div>
        <div>
          <AuthFormFooter
            showFormType={showFormType}
            setShowFormType={setShowFormType}
          />
        </div>
      </Card>
    </div>
  );
}
