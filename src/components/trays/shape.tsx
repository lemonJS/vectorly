import React from 'react';

import type { SidebarElement } from '../../types/editor';
import { clone } from 'lodash';
import { useDispatch } from 'react-redux';
import { createProjectElement } from '../../lib/project/actions';

interface Props {
  shape: SidebarElement;
}

export function Shape(props: Props): JSX.Element {
  const dispatch = useDispatch();
  const element = React.createElement(props.shape.type, props.shape.props);

  function formatShapeForCreation() {
    const shape = clone(props.shape);
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
    const shape = formatShapeForCreation();
    dispatch(createProjectElement(shape));
  }

  return (
    <div className='shape' draggable onClick={handleClick} onDragStart={handleDragStart}>
      <svg>
        {element}
      </svg>
    </div>
  );
}