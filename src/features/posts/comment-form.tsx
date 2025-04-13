import { useForm } from 'react-hook-form';
import Avatar from '../../components/avatar';
import Input from '../../components/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { commentSchema, CommentSchemaType } from '../../schemas/comment';
import Button from '../../components/button';
import { IoMdSend } from 'react-icons/io';

export default function CommentForm() {
  const {
    register,
    formState: { errors }
  } = useForm<CommentSchemaType>({ resolver: zodResolver(commentSchema) });

  return (
    <form autoComplete="off">
      <div className="flex items-center gap-x-2">
        <div>
          <Avatar fallback={'KC'} />
        </div>
        <div className="w-full">
          <Input
            id="comment"
            className="h-10"
            register={register('comment')}
            placeholder="Comment as Karl"
            error={errors.comment?.message}
          />
        </div>
        <div>
          <Button size="icon">
            <IoMdSend size={22} />
          </Button>
        </div>
      </div>
    </form>
  );
}
