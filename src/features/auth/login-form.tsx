import Button from '../../components/button';
import Input from '../../components/input';
import Label from '../../components/label';

export default function LoginForm() {
  return (
    <form autoComplete="off">
      <div className="flex flex-col gap-y-3 mb-5">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />
        </div>
      </div>
      <div className="w-full">
        <Button
          size="lg"
          secondaryColor="success"
          className="uppercase w-full"
        >
          Log in
        </Button>
      </div>
    </form>
  );
}
