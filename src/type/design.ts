import { Image } from '@type/project';

export interface Design {
  id: string;
  title: string;
  description: string;
  image: Image;
  createdAt: string;
  updatedAt: string;
}
