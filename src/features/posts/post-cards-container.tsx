import { useQuery } from '@tanstack/react-query';

import PostCard from './post-card';
import agent from '../../api/agents';
import { useStore } from '@tanstack/react-store';
import { userStore } from '../../stores/user';

export default function PostCardsContainer() {
  const user = useStore(userStore, (state) => state.user);

  const query = useQuery({
    queryKey: ['posts'],
    queryFn: () => agent.posts.getFollowingPosts(user?.id || 0, 1, 10)
  });

  return (
    <div className="flex flex-col gap-6">
      {query.data?.posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}
