import { useQuery } from '@tanstack/react-query';

import PostCard from './post-card';
import agent from '../../api/agents';

export default function PostCardsContainer() {
  const query = useQuery({ queryKey: ['posts'], queryFn: () => agent.posts.getPosts(2, 1, 10) });

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
