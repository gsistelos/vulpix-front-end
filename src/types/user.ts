export type User = {
  id: string;

  username: string;
  email: string;
  password: string;

  emailVerifiedAt: string | null;

  createdAt: string;
  updatedAt: string;
};
