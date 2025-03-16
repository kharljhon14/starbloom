import { createFileRoute, redirect } from '@tanstack/react-router';
import { getCookie } from '../utils/utils';

import PostCardsContainer from '../features/posts/post-cards-container';

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    if (!getCookie('bearer')) {
      throw redirect({
        to: '/login'
      });
    }
  },
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div>
      <PostCardsContainer />
    </div>
  );
}
