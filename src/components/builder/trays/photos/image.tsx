import React from 'react';

import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { Image as ProjectImage } from '@type/project';
import { DeleteImage } from '@components/builder/trays/photos/delete-image';
import { createProjectElement } from '@lib/project/actions';

interface Props {
  image: ProjectImage;
}

const styles = css`
  background-color: var(--sidebar-navigation-background-color);
  background-position: center center;
  background-size: cover;
  border: 2px solid var(--sidebar-navigation-background-color);
  border-radius: .25rem;
  cursor: pointer;
  height: 200px;
  margin-bottom: 1.5rem;
  position: relative;
  width: 100%;
  
  &:hover {
    border-color: white;
    
    button {
      display: flex;
    }
  }
`;

export function Image(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function formatImageForCreation() {
    const ratio = props.image.height / props.image.width;
    const width = props.image.width > 300 ? 300 : props.image.width;
    const height = width * ratio;

    return {
      element: 'image',
      type: 'photo',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1] as [number, number] // it kicks off with number[]
      },
      props: {
        'data-id': props.image.id,
        height: height,
        href: props.image.url,
        width: width
      }
    };
  }

  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    const text = formatImageForCreation();
    event.dataTransfer.setData('element', JSON.stringify(text));
  }

  function handleClick() {
    const image = formatImageForCreation();
    dispatch(createProjectElement(image));
  }

  return (
    <div
      draggable
      className={styles}
      key={props.image.id}
      style={{ backgroundImage: `url(${props.image.url})` }}
      onClick={handleClick}
      onDragStart={handleDragStart}
    >
      <DeleteImage image={props.image} />
    </div>
  );
}
