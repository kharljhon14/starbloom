import { useState } from 'react';
import Button from '../../components/button';
import Modal from '../../components/modal';
import { useModal } from '../../hooks/usemodal';
import LoginForm from './login-form';
import { SignUpForm } from './signup-form';
import AuthModalFooter from './auth-modal-footer';

export default function LoginButton() {
  const { isOpen, open, close } = useModal();
  const [isLogin, setIsLogin] = useState(true);

  document.body.style.overflowY = isOpen ? 'hidden' : 'auto';

  const reset = () => {
    setIsLogin(true);
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
        <Modal.Header>Log in to StarBloom</Modal.Header>
        <Modal.Content>{isLogin ? <LoginForm /> : <SignUpForm />}</Modal.Content>
        <Modal.Footer>
          <AuthModalFooter
            isLogin={isLogin}
            setIslogin={setIsLogin}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}
