import { Heart, Bookmark, MessageCircle } from 'lucide-react';
import Avatar from '../../components/avatar';
import Button from '../../components/button';
import Card from '../../components/card';
import { localizeDate } from '../../utils/utils';
import { Post } from '../../types/post';
import { Link } from '@tanstack/react-router';

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Card>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Avatar
            image={post.avatar}
            fallback="KC"
          />
          <div className="flex flex-col">
            <Link
              to="/"
              className="text-sm"
            >
              {post.first_name} {post.last_name}
            </Link>
            <span className="text-xs text-gray-500">{localizeDate(post.created_at)}</span>
          </div>
        </div>
        <p>{post.content}</p>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Button
              variant="secondary"
              secondaryColor="danger"
              size="icon"
            >
              <Heart className="text-red-500" />
            </Button>
            <Button
              variant="secondary"
              secondaryColor="accent"
              size="icon"
            >
              <Bookmark className="text-yellow-500" />
            </Button>
          </div>

          <Button
            className=" uppercase"
            variant="secondary"
            secondaryColor="secondary"
          >
            <MessageCircle className="text-purple-500" />
            Comments
          </Button>
        </div>
      </div>
    </Card>
  );
}
