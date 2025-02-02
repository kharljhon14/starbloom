import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export default function Button({ children }: Props) {
  return <button>{children}</button>;
}
