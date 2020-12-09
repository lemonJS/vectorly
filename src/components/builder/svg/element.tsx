import React from 'react';

import { Element as ProjectElement } from '@type/project';
import { useSelector } from 'react-redux';
import { Container } from './container';
import { Text } from './text';
import { selectionSelector } from '@lib/selection/selectors';

interface Props {
  element: ProjectElement;
}

export function Element(props: Props): JSX.Element {
  const { id } = useSelector(selectionSelector);

  const element = React.createElement(
    props.element.element,
    props.element.props,
    <Text element={props.element} />
  );

  return (
    <Container id={props.element.id} selected={props.element.id === id} element={props.element}>
      {element}
    </Container>
  );
}
