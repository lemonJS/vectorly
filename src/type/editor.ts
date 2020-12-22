export type Transform = {
  x: number,
  y: number,
  r: number,
  s: [number, number]
};

export type SVG = HTMLElement & SVGSVGElement;

export interface ImageUpload {
  contentType: string;
  imageId: string;
  height: number;
  name: string;
  width: number;
}

export interface ImageUploadUrl {
  url: string;
  fields: {
    Key: string;
    Policy: string;
    bucket: string;
  }
}
