import { v4 as uuid } from 'uuid';
import { Image as ProjectImage } from '@type/project';

const loadImage = async (file: File): Promise<ProjectImage> => {
  return new Promise(resolve => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = event => {
      const image = new Image();
      const base64 = event.target.result as string;

      image.src = base64
      image.onload = event => {
        const element = event.target as HTMLImageElement;
        const output = buildImageObject(base64, element, file);
        return resolve(output);
      };
    };
  });
};

const buildImageObject = (base64: string, element: HTMLImageElement, file: File) => ({
  id: uuid(),
  data: base64,
  height: element.height,
  name: file.name,
  width: element.width
});

export const loadImages = async (files: File[]) => {
  const results = files.map(loadImage);
  return Promise.all(results);
};

