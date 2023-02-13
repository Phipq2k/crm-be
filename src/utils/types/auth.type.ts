export type AuthInfo = {
  user_id: number;
  access_token: string;
  refresh_token: string;
};

export type JwtPayload = {
  sub: string;
  email: string;
};
