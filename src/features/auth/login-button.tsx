import Button from '../../components/button';
import Modal from '../../components/modal';
import { useModal } from '../../hooks/usemodal';
import LoginForm from './login-form';

export default function LoginButton() {
  const { isOpen, open, close } = useModal();

  document.body.style.overflowY = isOpen ? 'hidden' : 'auto';

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
        close={close}
      >
        <Modal.Header>This is the header</Modal.Header>
        <Modal.Content>
          <LoginForm />
        </Modal.Content>
        <Modal.Footer>
          <div className="flex justify-end">
            <Button onClick={close}>Close</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
