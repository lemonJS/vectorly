import React from 'react';

import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { Image, deleteImage } from '@store/project';

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

export const DeleteImage = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(deleteImage(props.image.id));
  };

  return (
    <button className={styles} onClick={handleClick}>
      <i className='ri-delete-bin-2-line' />
    </button>
  );
};
