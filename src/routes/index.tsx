import { createFileRoute, redirect } from '@tanstack/react-router';
import { getCookie } from '../utils/utils';

import PostCardsContainer from '../features/posts/post-cards-container';
import CreatePostForm from '../features/posts/create-post-form';
import Avatar from '../components/avatar';

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
    <div className="bg-white p-8 rounded-2xl">
      <div className="flex w-full gap-2">
        <div>
          <Avatar fallback="KC" />
        </div>
        <CreatePostForm />
      </div>
      <hr className="border-b-2 border-black my-6" />
      <PostCardsContainer />
    </div>
  );
}
