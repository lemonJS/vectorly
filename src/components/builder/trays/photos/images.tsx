import React from 'react';

import { css } from '@emotion/css';
import { Image as ProjectImage } from '@type/project';
import { Image } from '@components/builder/trays/photos/image';

interface Props {
  images: ProjectImage[];
}

const styles = css`
  display: grid;
  padding-top: 1.5rem;
`;

export function Images(props: Props): JSX.Element {
  return (
    <div className={styles}>
      {props.images.map(image => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
}