import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/button';
import Input from '../../components/input';
import Label from '../../components/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUserSchema, LoginUserSchemaType } from '../../schemas/auth';
import { useMutation } from '@tanstack/react-query';
import agent from '../../api/agents';
import { AxiosError } from 'axios';
import Card from '../../components/card';
import { useState } from 'react';
import { setCookie } from '../../utils/utils';
import { useNavigate } from '@tanstack/react-router';

export type ErrorResponse = { error: string };

export default function LoginForm() {
  const navigate = useNavigate({ from: '/login' });
  const [errorResponse, setErrorResponse] = useState<string | undefined>('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginUserSchemaType>({ resolver: zodResolver(loginUserSchema) });

  const mutation = useMutation({
    mutationFn: agent.auth.login,
    onSuccess: (data) => {
      setCookie(
        'bearer',
        data.authentication_token.plain_text,
        data.authentication_token.expired_at
      );

      navigate({ to: '/' });
    },

    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        const errRes = error.response?.data as ErrorResponse | undefined;
        if (errRes?.error === 'invalid credentials') {
          setErrorResponse('Invalid username or password. Please try again.');
        } else {
          setErrorResponse('Something went wrong!');
        }
      } else {
        setErrorResponse('Something went wrong!');
      }
    }
  });

  const onSubmit: SubmitHandler<LoginUserSchemaType> = (body) => {
    setErrorResponse('');

    mutation.mutate(body);
  };

  return (
    <>
      {errorResponse && (
        <Card
          className="mb-4"
          color="danger"
        >
          {errorResponse}
        </Card>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className="flex flex-col gap-y-3 mb-5">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              register={register('username')}
              disabled={mutation.isPending}
              placeholder="Username"
              error={errors.username?.message}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              register={register('password')}
              disabled={mutation.isPending}
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
          disabled={mutation.isPending}
          secondaryColor="success"
          className="uppercase w-full"
        >
          {mutation.isPending ? 'Loading...' : 'Log in'}
        </Button>
      </form>
    </>
  );
}
