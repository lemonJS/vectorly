import React from 'react';

import { Element as ProjectElement } from '@type/project';
import { Container } from '@components/builder/svg/container';
import { Text } from '@components/builder/svg/text';
import { useContext } from '@components/builder/store';

interface Props {
  element: ProjectElement;
}

export function Element(props: Props): JSX.Element {
  const [state] = useContext();
  const { id } = state.selectedElement;

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
