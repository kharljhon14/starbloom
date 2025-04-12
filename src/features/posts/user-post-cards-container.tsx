import { useQuery } from '@tanstack/react-query';

import PostCard from './post-card';
import agent from '../../api/agents';
import { Route } from '../../routes/users.$id';

export default function UserPostCardsContainer() {
  const { id } = Route.useParams();
  console.log(id);

  const query = useQuery({
    queryKey: ['posts', id],
    queryFn: () => agent.posts.getPosts(id, 1, 10)
  });

  return (
    <div>
      <div className="flex flex-col gap-6">
        {query.data?.posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}
