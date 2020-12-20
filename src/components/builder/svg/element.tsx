import React from 'react';

import { useSelector } from 'react-redux';
import { Element as ProjectElement } from '@type/project';
import { Container } from '@components/builder/svg/container';
import { Text } from '@components/builder/svg/text';
import { selectedElementSelector } from '@lib/selection/selectors';

interface Props {
  element: ProjectElement;
}

export function Element(props: Props): JSX.Element {
  const selected = useSelector(selectedElementSelector);

  const element = React.createElement(
    props.element.element,
    props.element.props,
    <Text element={props.element} />
  );

  return (
    <Container id={props.element.elementId} selected={props.element.elementId === selected?.elementId} element={props.element}>
      {element}
    </Container>
  );
}
