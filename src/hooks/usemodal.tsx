import { useState } from 'react';

export function useModal(value: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(value);

  const close = (...callbacks: (() => void)[]) => {
    setIsOpen(false);
    document.body.classList.remove('overflow-hidden');

    callbacks.forEach((cb) => {
      if (cb) cb();
    });
  };

  const open = () => {
    setIsOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  return {
    isOpen,
    open,
    close
  };
}
