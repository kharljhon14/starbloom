import { PropsWithChildren, useEffect } from 'react';
import Header from '../components/header';
import { useQuery } from '@tanstack/react-query';
import agent from '../api/agents';

import { userStore } from '../stores/user';
import { getCookie } from '../utils/utils';

export default function MainLayout({ children }: PropsWithChildren) {
  const query = useQuery({
    queryKey: ['token'],
    queryFn: agent.auth.getUserByToken,
    enabled: !!getCookie('bearer')
  });

  useEffect(() => {
    if (query.isSuccess) {
      userStore.setState((state) => ({ ...state, user: query.data.user }));
    }
  }, [query.data, query.isSuccess]);

  return (
    <>
      <Header />
      <main className=" md:max-w-4xl mx-4 md:mx-auto my-12">{children}</main>
    </>
  );
}
