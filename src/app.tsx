import InnerApp from './inner-app';
import Providers from './providers/providers';

export default function App() {
  return (
    <Providers>
      <InnerApp />
    </Providers>
  );
}
