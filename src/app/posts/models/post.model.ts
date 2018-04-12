import { User } from '../../users/models/user.model';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  image?: string;
  user?: User;
}
