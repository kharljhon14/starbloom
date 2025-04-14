import { Meta } from './meta';

export interface Post {
  id: number;
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
  content: string;
  avatar: string;
  created_at: string;
  updted_at: string;
  like_count: number;
  liked_by_user: boolean;
  comment_count: number;
}

export interface GetPostsResponse extends Meta {
  posts: Post[];
}

export interface CreatePostResponse {
  post: {
    id: number;
    user_id: number;
    content: string;
    created_at: string;
    updted_at: string;
  };
}
