import Button from './button';

export default function Header() {
  return (
    <header className="border-b h-20 flex justify-between bg-primary">
      <div className="flex items-center px-4">
        <a
          href="/"
          className="font-poppins text-xl"
        >
          StarBloom
        </a>
      </div>
      <div className="bg-danger border-l flex items-center justify-center gap-3 px-4">
        <Button size="lg">Log In</Button>
      </div>
    </header>
  );
}
