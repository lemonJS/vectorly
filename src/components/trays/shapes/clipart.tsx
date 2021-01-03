import React from 'react';

import { cloneDeep } from 'lodash';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { ClipArtListItem } from '@components/trays/data/clipart';
import { createElement } from '@lib/projects/actions';

interface Props {
  clipart: ClipArtListItem;
}

const styles = css`
  background: var(--sidebar-navigation-background-color);
  border: 2px solid var(--sidebar-navigation-background-color);
  border-radius: .25rem;
  cursor: pointer;
  height: 88px;
  
  &:hover {
    border-color: var(--primary-accent-color);
  }
  
  svg {
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    height: 150px;    
  }
`;

export const Clipart = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const element = React.createElement(props.clipart.shape.element, props.clipart.shape.props);

  const formatShapeForCreation = () => {
    const clipart = cloneDeep(props.clipart.shape);
    delete clipart.props.transform;
    return clipart;
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const shape = formatShapeForCreation();
    event.dataTransfer.setData('element', JSON.stringify(shape));
  };

  const handleClick = () => {
    const shape = formatShapeForCreation();
    dispatch(createElement(shape));
  };


  return (
    <div className={styles} draggable onClick={handleClick} onDragStart={handleDragStart}>
      <svg viewBox='0 0 88 88'>
        {element}
      </svg>
    </div>
  );
};
