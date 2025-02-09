import { PropsWithChildren } from 'react';
import Header from '../components/header';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className=" md:max-w-4xl mx-4 md:mx-auto my-12">{children}</main>
    </>
  );
}
