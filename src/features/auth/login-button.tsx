import Button from '../../components/button';
import Modal from '../../components/modal';
import { useModal } from '../../hooks/usemodal';

export default function LoginButton() {
  const { isOpen, open, close } = useModal(true);
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus beatae totam corrupti
            nobis laboriosam, perspiciatis cupiditate illum. Quo dolorum dignissimos quaerat,
          </p>
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
