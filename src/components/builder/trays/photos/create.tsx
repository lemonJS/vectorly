import React from 'react';

import { useSelector } from 'react-redux';
import { ImageUpload } from '@components/builder/trays/photos/image-upload';
import { Images } from '@components/builder/trays/photos/images';
import { ImageDnd } from '@components/builder/trays/photos/image-dnd';
import { projectSelector } from '@lib/projects/selectors';

export function Create(): JSX.Element {
  const { images } = useSelector(projectSelector());

  return (
    <React.Fragment>
      <ImageUpload />

      {images.length > 0
        ? <Images images={images} />
        : <ImageDnd />
      }
    </React.Fragment>
  );
}
