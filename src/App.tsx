import Card from './components/card';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header />
      <div className=" m-4 flex flex-col gap-4">
        <Card>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, aliquid beatae
          quisquam temporibus, nemo doloribus veniam porro libero, sint eius tenetur amet fuga animi
          fugiat dignissimos voluptatibus ipsum nostrum omnis.
        </Card>
      </div>
    </div>
  );
}

export default App;
