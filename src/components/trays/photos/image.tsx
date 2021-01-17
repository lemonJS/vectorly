import React from 'react';

import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { Image as ProjectImage } from '@type/project';
import { DeleteImage } from '@components/trays/photos/delete-image';
import { createElement } from '@lib/projects/actions';

interface Props {
  image: ProjectImage;
}

const styles = css`
  background-color: var(--primary);
  background-position: center center;
  background-size: cover;
  border: 2px solid transparent;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  height: 200px;
  margin-bottom: 1.5rem;
  position: relative;
  width: 100%;
  
  &:hover {
    border-color: var(--primary);
    
    button {
      display: flex;
    }
  }
`;

export const Image = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const formatImageForCreation = () => {
    const ratio = props.image.height / props.image.width;
    const width = props.image.width > 300 ? 300 : props.image.width;
    const height = width * ratio;

    return {
      element: 'image',
      type: 'photo',
      transform: {
        x: 50,
        y: 50,
        r: 0,
        s: [1, 1] as [number, number] // it kicks off with number[]
      },
      props: {
        'data-id': props.image.id,
        height: height,
        href: props.image.data,
        width: width
      }
    };
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const text = formatImageForCreation();
    event.dataTransfer.setData('element', JSON.stringify(text));
  };

  const handleClick = () => {
    const image = formatImageForCreation();
    dispatch(createElement(image));
  };

  return (
    <div
      draggable
      className={styles}
      key={props.image.id}
      style={{ backgroundImage: `url(${props.image.data})` }}
      onClick={handleClick}
      onDragStart={handleDragStart}
    >
      <DeleteImage image={props.image} />
    </div>
  );
};
