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
}

export interface GetPostsResponse {
  _metadata: {
    current_page: number;
    page_size: number;
    first_page: number;
    last_page: number;
    total_records: number;
  };
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
