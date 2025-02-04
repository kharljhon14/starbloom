import Header from './components/header';
import Modal from './components/modal';
import PostCard from './features/posts/post-card';

function App() {
  return (
    <div>
      <Header />
      <div className=" m-4 flex flex-col gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <Modal />
    </div>
  );
}

export default App;
