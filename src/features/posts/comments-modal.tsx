import { MessageCircle } from 'lucide-react';
import Button from '../../components/button';
import Modal from '../../components/modal';
import { useModal } from '../../hooks/usemodal';
import { Post } from '../../types/post';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Avatar from '../../components/avatar';
import { localizeDate } from '../../utils/utils';
import { Link } from '@tanstack/react-router';
import CommentForm from './comment-form';
import { useQuery } from '@tanstack/react-query';
import agent from '../../api/agents';
import Comment from './comment';

interface Props {
  post: Post;
  likeButtonHandler: () => void;
}

export default function CommentsModal({ post, likeButtonHandler }: Props) {
  const { isOpen, open, close } = useModal(false);

  const query = useQuery({
    queryKey: ['comments', post.id],
    queryFn: () => agent.comments.getComments(post.id)
  });

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
        {query.data?._metadata.total_records && query.data?._metadata.total_records > 0 && (
          <span className="absolute -right-3 -top-3 h-6 w-6 text-xs flex items-center justify-center text-white bg-gray-500  rounded-full">
            {query.data._metadata.total_records}
          </span>
        )}
      </Button>

      <Modal
        open={isOpen}
        close={close}
        closeOnBackdrop
      >
        <Modal.Header>{post.first_name}'s post</Modal.Header>
        <Modal.Content>
          <div className="flex flex-col gap-3">
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
              {query.data?._metadata.total_records && query.data._metadata.total_records > 0 && (
                <div>
                  <button className="hover:underline cursor-pointer">
                    {query.data?._metadata.total_records} comment
                    {query.data._metadata.total_records > 1 ? 's' : ''}
                  </button>
                </div>
              )}
            </div>
            <div className="flex justify-between">
              <div className="flex gap-3">
                <Button
                  onClick={likeButtonHandler}
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
                {/* <Button
                  variant="secondary"
                  secondaryColor="accent"
                  size="icon"
                >
                  <Bookmark className="text-yellow-500" />
                </Button> */}
              </div>
            </div>
          </div>
          <div className="p-4 space-y-4">
            {query.data?.comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
              />
            ))}
          </div>
        </Modal.Content>

        <Modal.Footer>
          <div>
            <CommentForm postId={post.id} />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
