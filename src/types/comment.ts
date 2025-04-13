import { Meta } from './meta';

export interface Comment {
  id: number;
  post_id: number;
  user_id: number;
  comment: string;
  username: string;
  first_name: string;
  last_name: string;
  created_at: string;
  update_at: string;
}

export interface GetCommentsResoponse extends Meta {
  comments: Comment[];
}

export interface AddCommentRequest {
  post_id: number;
  comment: string;
}
