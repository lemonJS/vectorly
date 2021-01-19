import React from 'react';

import { Element as ProjectElement } from '@type/project';
import { Container } from '@components/svg/elements/container';
import { Text } from '@components/svg/elements/text';

interface Props {
  element: ProjectElement;
  selected: boolean;
}

export const Element = (props: Props): JSX.Element => {
  const element = React.createElement(
    props.element.element,
    props.element.props,
    <Text element={props.element} selected={props.selected} />
  );

  return (
    <Container id={props.element.id} element={props.element} selected={props.selected}>
      {element}
    </Container>
  );
}
