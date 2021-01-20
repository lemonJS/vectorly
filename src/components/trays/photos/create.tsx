import React from 'react';

import { useSelector } from 'react-redux';
import { Images } from '@components/trays/photos/images';
import { ImageUpload } from '@components/trays/photos/image-upload';
import { projectSelector } from '@store/project';

export const Create = (): JSX.Element => {
  const { images } = useSelector(projectSelector);

  return images.length > 0
    ? <Images images={images} />
    : <ImageUpload />;
};
