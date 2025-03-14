import { createFileRoute, redirect } from '@tanstack/react-router';
import { getCookie } from '../utils/utils';
import PostCard from '../features/posts/post-card';
import { createRandomPosts } from '../helpers/helpers';

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
const posts = createRandomPosts(5);

function RouteComponent() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.userID}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}
