import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/button';
import Input from '../../components/input';
import Label from '../../components/label';
import { signupUserSchema, SignupUserSchemaType } from '../../schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import agent from '../../api/agents';

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupUserSchemaType>({ resolver: zodResolver(signupUserSchema) });

  const mutation = useMutation({
    mutationFn: agent.auth.signup,
    onSuccess: (data) => {
      console.info(data);
    }
  });

  const onSubmit: SubmitHandler<SignupUserSchemaType> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="flex flex-col gap-y-3 mb-5">
        <div className="flex gap-x-3">
          <div className="w-full">
            <Label htmlFor="first-name">First name</Label>
            <Input
              id="first-name"
              register={register('first_name')}
              placeholder="First name"
              error={errors.first_name?.message}
            />
          </div>
          <div className="w-full">
            <Label htmlFor="last-name">Last name</Label>
            <Input
              id="last-name"
              register={register('last_name')}
              placeholder="Last name"
              error={errors.last_name?.message}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            register={register('username')}
            placeholder="Username"
            error={errors.username?.message}
          />
        </div>
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
        className="uppercase"
      >
        Sign Up
      </Button>
    </form>
  );
}
