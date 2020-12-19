import { Image } from '@type/project';

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  image: Image;
  createdAt: string;
  updatedAt: string;
}
