export interface AuthToken {
  authentication_token: {
    plain_text: string;
    expired_at: Date;
  };
}

export interface NewUser {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  activated: boolean;
  created_at: Date;
}
