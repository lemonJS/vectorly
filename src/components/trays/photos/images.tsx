import React from 'react';

import { css } from '@emotion/css';
import { Image as ProjectImage } from '@store/project';
import { Image } from '@components/trays/photos/image';

interface Props {
  images: ProjectImage[];
}

const styles = css`
  display: grid;
  padding: 1.5rem;
`;

export const Images = (props: Props): JSX.Element => (
  <div className={styles}>
    {props.images.map(image => (
      <Image key={image.id} image={image} />
    ))}
  </div>
);
