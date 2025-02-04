import { X } from 'lucide-react';
import Button from './button';
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  open: boolean;
  close: () => void;
}

function ModalHeader({ children }: PropsWithChildren) {
  return (
    <div className="border-b pb-2 pt-4">
      <h1 className=" text-lg">{children}</h1>
    </div>
  );
}

function ModalContent({ children }: PropsWithChildren) {
  return <div className="my-4">{children}</div>;
}

function ModalFooter({ children }: PropsWithChildren) {
  return <div className="border-t pt-2">{children}</div>;
}

function Modal({ open, close, children }: Props) {
  return (
    <div
      className={`
        h-screen w-screen fixed inset-0 bg-black/60 backdrop-blur
        z-10 flex items-center justify-center ${open ? 'scala-100' : 'scale-0 delay-300'}
        `}
    >
      <div
        className={`
            bg-white border pb-4 pt-6 px-3 rounded-md w-full max-h-[620px] 
        mx-4 shadow-black shadow-full overflow-y-auto relative transition-all duration-300
        ${open ? 'scale-100' : 'scale-0'}
        `}
      >
        <div className="absolute right-4 top-3">
          <Button
            showBackground={false}
            className="w-7 h-7 p-0"
            onClick={close}
          >
            <X />
          </Button>
        </div>

        {React.Children.map(children, (child) => {
          if (React.isValidElement<PropsWithChildren>(child)) {
            return React.cloneElement(child);
          }
          return child;
        })}
      </div>
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
