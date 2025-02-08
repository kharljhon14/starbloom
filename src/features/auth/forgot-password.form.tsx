import Button from '../../components/button';
import Input from '../../components/input';
import Label from '../../components/label';

export default function ForgotPasswordForm() {
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
      </div>

      <Button
        width="full"
        size="lg"
        secondaryColor="success"
        className="uppercase w-full"
      >
        Submit
      </Button>
    </form>
  );
}
