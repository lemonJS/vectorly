import { v4 as uuid } from 'uuid';
import { ImageUpload, ImageUploadUrl } from '@type/editor';

export async function getWidthAndHeightOfFile(file: File): Promise<[number, number]> {
  return new Promise(resolve => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = event => {
      const image = new Image();

      image.src = event.target.result as string;
      image.onload = event => {
        const element = event.target as HTMLImageElement;
        return resolve([element.width, element.height]);
      };
    };
  });
}

export async function getImageUploadPayload(files: File[]): Promise<ImageUpload[]> {
  const images = files.map(async file => {
    const [width, height] = await getWidthAndHeightOfFile(file);

    return {
      height,
      width,
      imageId: uuid(),
      name: file.name,
      contentType: file.type
    };
  });

  return Promise.all(images);
}

export async function uploadImagesToS3(files: File[], urls: ImageUploadUrl[]): Promise<void> {
  const results = await files.map(async file => {
    const form = new FormData();
    const { url, fields } = urls.find(url => url.fields.Key.endsWith(file.name));

    for (const [key, value] of Object.entries(fields)) {
      form.append(key, value);
    }

    form.append('file', file);
    await fetch(url, { method: 'POST', body: form });
  });

  await Promise.all(results);
}
