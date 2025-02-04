import Input from '../../components/input';
import Label from '../../components/label';

export default function LoginForm() {
  return (
    <form action="">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div>
        <Label htmlFor="email">Password</Label>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>
    </form>
  );
}
