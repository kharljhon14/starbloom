import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/button';
import Textarea from '../../components/textarea';
import { createPostSchema, CreatePostSchemaType } from '../../schemas/post';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import agent from '../../api/agents';
import { useStore } from '@tanstack/react-store';
import { userStore } from '../../stores/user';

export default function CreatePostForm() {
  const queryClient = useQueryClient();
  const user = useStore(userStore, (state) => state.user);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<CreatePostSchemaType>({ resolver: zodResolver(createPostSchema) });

  const mutation = useMutation({
    mutationKey: ['posts'],
    mutationFn: agent.posts.createPost,
    onSuccess: () => {
      reset();
      return queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  const onSubmit: SubmitHandler<CreatePostSchemaType> = (value) => {
    mutation.mutate(value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full"
      action=""
    >
      <Textarea
        id="content"
        className="h-36"
        register={register('content')}
        placeholder={`What's on your mind, ${user?.first_name}?`}
        error={errors.content?.message}
      />
      <Button
        className="mt-2"
        size="lg"
      >
        Post
      </Button>
    </form>
  );
}
