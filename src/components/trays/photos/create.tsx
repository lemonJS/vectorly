import React from 'react';

import { useSelector } from 'react-redux';
import { ImageUpload } from '@components/trays/photos/image-upload';
import { Images } from '@components/trays/photos/images';
import { ImageDnd } from '@components/trays/photos/image-dnd';
import { projectSelector } from '@lib/projects/selectors';

export const Create = (): JSX.Element => {
  const { images } = useSelector(projectSelector);

  return (
    <React.Fragment>
      <ImageUpload />

      {images.length > 0
        ? <Images images={images} />
        : <ImageDnd />
      }
    </React.Fragment>
  );
};
