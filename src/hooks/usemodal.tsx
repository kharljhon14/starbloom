import { useState } from 'react';

export function useModal(value: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(value);

  const close = (...callbacks: (() => void)[]) => {
    setIsOpen(false);
    callbacks.forEach((cb) => {
      if (cb) cb();
    });
    document.body.classList.remove('overflow-hidden');
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
