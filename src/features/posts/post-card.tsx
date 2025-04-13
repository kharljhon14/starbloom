import { Bookmark } from 'lucide-react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Avatar from '../../components/avatar';
import Button from '../../components/button';
import Card from '../../components/card';
import { getInitials, localizeDate } from '../../utils/utils';
import { Post } from '../../types/post';
import { Link } from '@tanstack/react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import agent from '../../api/agents';
import CommentsModal from './comments-modal';

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationKey: ['posts'],
    mutationFn: agent.likes.likePost,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  const unlikeMutation = useMutation({
    mutationKey: ['posts'],
    mutationFn: agent.likes.unlikePost,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  const likeButtonHandler = () => {
    if (post.liked_by_user) {
      unlikeMutation.mutate(post.id);
    } else {
      likeMutation.mutate(post.id);
    }
  };

  return (
    <Card>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Avatar
            image={post.avatar}
            fallback={getInitials(post.first_name, post.last_name)}
          />
          <div className="flex flex-col">
            <Link
              to={`/users/${post.user_id}`}
              className="text-sm"
            >
              {post.first_name} {post.last_name}
            </Link>
            <span className="text-xs text-gray-500">{localizeDate(post.created_at)}</span>
          </div>
        </div>
        <p>{post.content}</p>
        <div className="flex justify-end border-b pb-2 text-gray-500">
          <div>
            <button className="hover:underline cursor-pointer">10 comments</button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Button
              className="relative"
              variant="secondary"
              secondaryColor="danger"
              size="icon"
              onClick={likeButtonHandler}
            >
              {post.liked_by_user ? (
                <FaHeart className="text-red-500 text-xl" />
              ) : (
                <FaRegHeart className="text-red-500 text-xl" />
              )}
              {post.like_count > 0 && (
                <span className="absolute -right-3 -top-3 h-6 w-6 text-xs flex items-center justify-center text-white bg-red-400  rounded-full">
                  {post.like_count}
                </span>
              )}
            </Button>
            <Button
              variant="secondary"
              secondaryColor="accent"
              size="icon"
            >
              <Bookmark className="text-yellow-500" />
            </Button>
          </div>

          <CommentsModal post={post} />
        </div>
      </div>
    </Card>
  );
}
