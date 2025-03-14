import { PropsWithChildren, useEffect } from 'react';
import Header from '../components/header';
import { useQuery } from '@tanstack/react-query';
import agent from '../api/agents';
import { userStore } from '../stores/user';

export default function MainLayout({ children }: PropsWithChildren) {
  const query = useQuery({ queryKey: ['user'], queryFn: agent.auth.getUserByToken });

  useEffect(() => {
    if (query.isSuccess) {
      userStore.setState((state) => {
        return {
          ...state,
          user: query.data.user
        };
      });
    }
  }, [query.isSuccess, query.data]);

  return (
    <>
      <Header />
      <main className=" md:max-w-4xl mx-4 md:mx-auto my-12">{children}</main>
    </>
  );
}
