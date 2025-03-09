import PostCard from './features/posts/post-card';
import { createRandomPosts } from './helpers/helpers';
import MainLayout from './layouts/main-layout';
import Providers from './providers/providers';

const posts = createRandomPosts(5);

function App() {
  return (
    <Providers>
      <MainLayout>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.userID}
              post={post}
            />
          ))}
        </div>
      </MainLayout>
    </Providers>
  );
}

export default App;
