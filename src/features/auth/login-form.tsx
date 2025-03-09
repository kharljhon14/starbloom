import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/button';
import Input from '../../components/input';
import Label from '../../components/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUserSchema, LoginUserSchemaType } from '../../schemas/auth';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginUserSchemaType>({ resolver: zodResolver(loginUserSchema) });

  const onSubmit: SubmitHandler<LoginUserSchemaType> = (body) => {
    console.info(body);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="flex flex-col gap-y-3 mb-5">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            register={register('email')}
            placeholder="Email"
            error={errors.email?.message}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            register={register('password')}
            placeholder="Password"
            type="password"
            error={errors.password?.message}
          />
        </div>
      </div>

      <Button
        type="submit"
        width="full"
        size="lg"
        secondaryColor="success"
        className="uppercase w-full"
      >
        Log in
      </Button>
    </form>
  );
}
