import { Link } from '@tanstack/react-router';
import { useStore } from '@tanstack/react-store';
import { userStore } from '../stores/user';

export default function Header() {
  const user = useStore(userStore, (state) => state['user']);

  return (
    <header className="border-b h-20 flex justify-between bg-primary">
      <div className="flex items-center px-4">
        <Link
          to="/"
          className="font-poppins text-xl uppercase font-semibold"
        >
          StarBloom
        </Link>
      </div>
      <div className="bg-danger border-l flex items-center justify-center gap-3 px-4 md:w-52">
        <Link to={`/users/${user?.id}`}>
          {user?.first_name} {user?.last_name}
        </Link>
      </div>
    </header>
  );
}
