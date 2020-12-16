import React from 'react';

import { cloneDeep } from 'lodash';
import { css } from '@emotion/css';
import { ShapeListItem } from '@components/builder/trays/data/shapes';

interface Props {
  shape: ShapeListItem;
}

const styles = css`
  background: var(--sidebar-navigation-background-color);
  border: 2px solid var(--sidebar-navigation-background-color);
  border-radius: .25rem;
  cursor: pointer;
  height: 88px;
  
  &:hover {
    border-color: white;
  }
  
  svg {
    height: 100%;
    width: 100%;
  }
 `;

export function Shape(props: Props): JSX.Element {
  const element = React.createElement(props.shape.shape.element, props.shape.shape.props);

  function formatShapeForCreation() {
    const shape = cloneDeep(props.shape.shape);
    delete shape.props.x;
    delete shape.props.y;
    delete shape.props.transform;
    shape.props.stroke = '#283037';
    return shape;
  }

  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    const shape = formatShapeForCreation();
    event.dataTransfer.setData('element', JSON.stringify(shape));
  }

  function handleClick() {
    // const shape = formatShapeForCreation();
    // dispatch(createProjectElement(shape));
    // TODO
  }

  return (
    <div className={styles} draggable onClick={handleClick} onDragStart={handleDragStart}>
      <svg viewBox='0 0 88 88'>
        {element}
      </svg>
    </div>
  );
}
