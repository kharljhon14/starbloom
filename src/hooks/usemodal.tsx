import { useState } from 'react';

export function useModal(value: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(value);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  };
}
