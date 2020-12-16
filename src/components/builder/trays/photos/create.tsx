import React from 'react';

import { ImageUpload } from '@components/builder/trays/photos/image-upload';
import { Images } from '@components/builder/trays/photos/images';
import { ImageDnd } from '@components/builder/trays/photos/image-dnd';
import { useContext } from '@components/builder/store';

export function Create(): JSX.Element {
  const [state] = useContext();

  return (
    <React.Fragment>
      <ImageUpload />

      {state.project.images.length > 0
        ? <Images images={state.project.images} />
        : <ImageDnd />
      }
    </React.Fragment>
  );
}
