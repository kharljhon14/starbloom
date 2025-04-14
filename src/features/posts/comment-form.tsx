import { SubmitHandler, useForm } from 'react-hook-form';
import Avatar from '../../components/avatar';
import { zodResolver } from '@hookform/resolvers/zod';
import { commentSchema, CommentSchemaType } from '../../schemas/comment';
import Button from '../../components/button';
import { IoMdSend } from 'react-icons/io';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import agent from '../../api/agents';
import { AddCommentRequest } from '../../types/comment';
import { useStore } from '@tanstack/react-store';
import { userStore } from '../../stores/user';
import { getInitials } from '../../utils/utils';
import Textarea from '../../components/textarea';

interface Props {
  postId: number;
}

export default function CommentForm({ postId }: Props) {
  const queryClient = useQueryClient();
  const user = useStore(userStore, (state) => state.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CommentSchemaType>({ resolver: zodResolver(commentSchema) });

  const mutation = useMutation({
    mutationKey: ['comments'],
    mutationFn: agent.comments.addComment,
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    }
  });

  const onSubmit: SubmitHandler<CommentSchemaType> = ({ comment }) => {
    const body: AddCommentRequest = {
      post_id: postId,
      comment
    };

    mutation.mutate(body);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="flex items-center gap-x-2">
        <div className=" self-start">
          <Avatar fallback={getInitials(user?.first_name, user?.last_name)} />
        </div>
        <div className="w-full">
          <Textarea
            id="comment"
            className="h-24 resize-none"
            register={register('comment')}
            placeholder={`Comment as ${user?.first_name}`}
            error={errors.comment?.message}
          />
        </div>
        <div className="">
          <Button size="icon">
            <IoMdSend size={22} />
          </Button>
        </div>
      </div>
    </form>
  );
}
