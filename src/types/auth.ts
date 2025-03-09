export interface AuthToken {
  authentication_token: {
    plain_text: string;
    expired_at: Date;
  };
}
