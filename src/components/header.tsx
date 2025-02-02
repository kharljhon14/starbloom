import Button from './button';

export default function Header() {
  return (
    <header className="border-b flex h-h-20 items-center justify-between py-4 px-6 bg-primary">
      <div>
        <a
          href="/"
          className="font-poppins text-xl"
        >
          StarBloom
        </a>
      </div>
      <div>
        <Button>Sign in</Button>
      </div>
    </header>
  );
}
