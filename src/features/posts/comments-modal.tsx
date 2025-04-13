import { Bookmark, MessageCircle } from 'lucide-react';
import Button from '../../components/button';
import Modal from '../../components/modal';
import { useModal } from '../../hooks/usemodal';
import { Post } from '../../types/post';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Avatar from '../../components/avatar';
import { localizeDate } from '../../utils/utils';
import { Link } from '@tanstack/react-router';
import CommentForm from './comment-form';

interface Props {
  post: Post;
}

export default function CommentsModal({ post }: Props) {
  const { isOpen, open, close } = useModal(false);
  return (
    <>
      <Button
        onClick={open}
        className=" uppercase"
        variant="secondary"
        secondaryColor="secondary"
      >
        <MessageCircle className="text-purple-500" />
        Comments
      </Button>
      <Modal
        open={isOpen}
        close={close}
        closeOnBackdrop
      >
        <div className="flex flex-col gap-3 mb-5">
          <div className="flex items-center gap-2">
            <Avatar
              image={post.avatar}
              fallback="KC"
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
          </div>
        </div>
        <CommentForm />
      </Modal>
    </>
  );
}
