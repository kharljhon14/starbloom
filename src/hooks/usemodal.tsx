import { useState } from 'react';

export function useModal(value: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(value);

  const close = (...callbacks: (() => void)[]) => {
    setIsOpen(false);
    callbacks.forEach((cb) => {
      if (cb) cb();
    });
  };

  return {
    isOpen,
    open: () => setIsOpen(true),
    close
  };
}
