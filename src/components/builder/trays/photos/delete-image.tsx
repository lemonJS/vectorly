import React from 'react';

import { css } from '@emotion/css';
import { Image } from '@type/project';

interface Props {
  image: Image
}

const styles = css`
  align-items: center;
  background: var(--tertiary-button-border-color);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  height: 2rem;
  justify-content: center;
  padding: 0;
  position: absolute;
  right: -.75rem;
  top: -.75rem;
  width: 2rem;
  
  i {
    font-size: 1rem;
    margin: 0;
  }
  
  &:hover {
    transform: scale(1.25);
  }
`;

export function DeleteImage(_props: Props): JSX.Element {
  function handleClick(_event: React.MouseEvent<HTMLButtonElement>) {
    // event.stopPropagation();
    // dispatch(deleteImage(props.image.id));
    // TODO
  }

  return (
    <button className={styles} onClick={handleClick}>
      <i className='ri-delete-bin-2-line' />
    </button>
  );
}
