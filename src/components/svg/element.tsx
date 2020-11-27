import React from 'react';

import type { EditorElement } from '../../types/editor-element';
import { Container } from './container';

interface Props {
  element: EditorElement;
}

export function Element(props: Props): JSX.Element {
  const [x, y] = props.element.transform;
  const element = React.createElement(props.element.element, props.element.props, props.element.children);

  return (
    <Container id={props.element.id} transform={`translate(${x}, ${y})`}>
      {element}
    </Container>
  );
}
