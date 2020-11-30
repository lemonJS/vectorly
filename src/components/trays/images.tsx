import React from 'react';

import type { Image } from '../../types/project';
import { css } from '@emotion/css';

interface Props {
  images: Image[];
}

const styles = css`
  display: grid;
  padding-top: 1.5rem;
  
  .image {
    background-color: var(--sidebar-navigation-background-color);
    background-position: center center;
    background-size: cover;
    border-radius: .25rem;
    cursor: pointer;
    height: 200px;
    margin-bottom: 1.5rem;
    width: 100%;
    
    &:hover {
      transform: translate(-2px, -2px);
    }
    
    svg {
      height: 100%;
      width: 100%;
    }
  }
`;

export function Images(props: Props): JSX.Element {
  return (
    <div className={styles}>
      {props.images.map(image => (
        <div
          draggable
          className='image'
          key={image.id}
          style={{ backgroundImage: `url(${image.url})` }}
        />
      ))}
    </div>
  );
}