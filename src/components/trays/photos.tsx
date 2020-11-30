import React from 'react';

import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import { ImageUpload } from './image-upload';
import { Images } from './images';
import { ImageDnd } from './image-dnd';
import { projectSelector } from '../../lib/project/selectors';

const styles = css`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1.5rem;
  width: 100%;
`;

export function Photos(): JSX.Element {
  const { images } = useSelector(projectSelector);

  return (
    <div className={styles}>
      <ImageUpload />

      {images.length > 0
        ? <Images images={images} />
        : <ImageDnd />
      }
    </div>
  );
}
