import { Image } from '@type/project';

export interface Design {
  designId: string;
  title: string;
  description: string;
  image: Image;
  createdAt: string;
  updatedAt: string;
}
