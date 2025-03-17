import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/button';
import Textarea from '../../components/textarea';
import { createPostSchema, CreatePostSchemaType } from '../../schemas/post';
import { zodResolver } from '@hookform/resolvers/zod';

export default function CreatePostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreatePostSchemaType>({ resolver: zodResolver(createPostSchema) });

  const onSubmit: SubmitHandler<CreatePostSchemaType> = (value) => {
    console.info(value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full"
      action=""
    >
      <Textarea
        id="content"
        register={register('content')}
        placeholder="What's on your mind?"
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
