import React from 'react';

import { css } from '@emotion/css';
import { Image as ProjectImage } from '@type/project';
import { Image } from '@components/trays/photos/image';

interface Props {
  images: ProjectImage[];
}

const styles = css`
  display: grid;
  padding-top: 1.5rem;
`;

export const Images = (props: Props): JSX.Element => (
  <div className={styles}>
    {props.images.map(image => (
      <Image key={image.id} image={image} />
    ))}
  </div>
);
