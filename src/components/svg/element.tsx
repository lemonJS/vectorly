import React from 'react';

import type { EditorElement } from '../../types/editor';
import { useSelector } from 'react-redux';
import { Container } from './container';
import { selectionSelector } from '../../lib/selection/selectors';

interface Props {
  element: EditorElement;
}

export function Element(props: Props): JSX.Element {
  const { id } = useSelector(selectionSelector);

  const r = props.element.rotate;
  const [x, y] = props.element.transform;
  const element = React.createElement(props.element.element, props.element.props, props.element.children);

  return (
    <Container id={props.element.id} selected={props.element.id === id} defaultTransform={{ x, y, r }}>
      {element}
    </Container>
  );
}
