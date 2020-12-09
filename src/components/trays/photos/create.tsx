import React from 'react';

import { useSelector } from 'react-redux';
import { ImageUpload } from './image-upload';
import { Images } from './images';
import { ImageDnd } from './image-dnd';
import { projectSelector } from '../../../lib/project/selectors';

export function Create(): JSX.Element {
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
}
