import { useState } from 'react';
import Button from '../../components/button';
import Modal from '../../components/modal';
import { useModal } from '../../hooks/usemodal';
import LoginForm from './login-form';
import { SignUpForm } from './signup-form';
import AuthModalFooter from './auth-modal-footer';
import ForgotPasswordForm from './forgot-password.form';

export type FormType = 'login' | 'signup' | 'forgot';

export default function LoginButton() {
  const { isOpen, open, close } = useModal();
  const [showFormType, setShowFormType] = useState<FormType>('login');

  document.body.style.overflowY = isOpen ? 'hidden' : 'auto';

  const reset = () => {
    setTimeout(() => {
      setShowFormType('login');
    }, 300);
  };

  return (
    <>
      <Button
        size="lg"
        onClick={open}
      >
        Log In
      </Button>
      <Modal
        open={isOpen}
        close={() => close(reset)}
      >
        <Modal.Header>
          {showFormType === 'login' && 'Sign in to StarBloom'}
          {showFormType === 'signup' && 'Create your account'}
          {showFormType === 'forgot' && 'Reset your password'}
        </Modal.Header>
        <Modal.Content>
          {showFormType === 'login' && <LoginForm />}
          {showFormType === 'signup' && <SignUpForm />}
          {showFormType === 'forgot' && <ForgotPasswordForm />}
        </Modal.Content>
        <Modal.Footer>
          <AuthModalFooter
            showFormType={showFormType}
            setShowFormType={setShowFormType}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}
