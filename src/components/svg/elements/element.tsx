import React from 'react';

import { useSelector } from 'react-redux';
import { Element as ProjectElement } from '@type/project';
import { Container } from '@components/svg/elements/container';
import { Text } from '@components/svg/elements/text';
import { editorSelector } from '@lib/editor/selectors';

interface Props {
  element: ProjectElement;
}

export const Element = (props: Props): JSX.Element => {
  const { selectedElement } = useSelector(editorSelector);

  const selected = selectedElement?.id === props.element.id;

  const element = React.createElement(
    props.element.element,
    props.element.props,
    <Text element={props.element} selected={selected} />
  );

  return (
    <Container id={props.element.id} element={props.element} selected={selected}>
      {element}
    </Container>
  );
}
