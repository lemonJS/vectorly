// TODO
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

