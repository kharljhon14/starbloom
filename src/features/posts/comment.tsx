import { Link } from '@tanstack/react-router';
import Avatar from '../../components/avatar';
import { Comment as CommentType } from '../../types/comment';
import Card from '../../components/card';
import { getInitials, localizeDate } from '../../utils/utils';

interface Props {
  comment: CommentType;
}

export default function Comment({ comment }: Props) {
  return (
    <Card>
      <div className="flex items-center gap-x-2 mb-3">
        <Avatar fallback={getInitials(comment.first_name, comment.last_name)} />
        <div className="flex flex-col">
          <Link
            to={`/users/${comment.user_id}`}
            className="text-sm"
          >
            {comment.first_name} {comment.last_name}
          </Link>
          <span className="text-xs text-gray-500">{localizeDate(comment.created_at)}</span>
        </div>
      </div>
      <div>
        <p>{comment.comment}</p>
      </div>
    </Card>
  );
}
