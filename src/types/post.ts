export interface Post {
  id: number;
  userID: number;
  username: string;
  first_name: string;
  last_name: string;
  content: string;
  avatar: string;
  created_at: string;
  updted_at: string;
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
