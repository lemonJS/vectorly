import React from 'react';

import { useSelector } from 'react-redux';
import { Element as ProjectElement } from '@type/project';
import { Container } from '@components/builder/svg/container';
import { Text } from '@components/builder/svg/text';
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