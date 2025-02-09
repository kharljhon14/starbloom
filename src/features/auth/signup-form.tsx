import Button from '../../components/button';
import Input from '../../components/input';
import Label from '../../components/label';

export function SignUpForm() {
  return (
    <form autoComplete="off">
      <div className="flex flex-col gap-y-3 mb-5">
        <div className="flex gap-x-3">
          <div className="w-full">
            <Label htmlFor="first-name">First name</Label>
            <Input
              id="first-name"
              name="first-name"
              placeholder="First name"
            />
          </div>
          <div className="w-full">
            <Label htmlFor="last-name">Last name</Label>
            <Input
              id="last-name"
              name="last-name"
              placeholder="Last name"
            />
          </div>
        </div>
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
