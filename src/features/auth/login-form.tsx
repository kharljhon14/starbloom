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
    </form>
  );
}
