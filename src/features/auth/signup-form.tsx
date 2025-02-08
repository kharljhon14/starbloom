import Button from '../../components/button';
import Input from '../../components/input';
import Label from '../../components/label';

export function SignUpForm() {
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
        <div>
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm Password"
            type="password"
          />
        </div>
      </div>

      <Button
        width="full"
        size="lg"
        secondaryColor="success"
        className="uppercase"
      >
        Sign Up
      </Button>
    </form>
  );
}
