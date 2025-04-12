import { createFileRoute } from '@tanstack/react-router';
import Avatar from '../components/avatar';
import CreatePostForm from '../features/posts/create-post-form';
import UserPostCardsContainer from '../features/posts/user-post-cards-container';

export const Route = createFileRoute('/users/$id')({
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
      <UserPostCardsContainer />
    </div>
  );
}
