import React from 'react';

import type { EditorElement } from '../../types/editor';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './container';
import { setSelectionId } from '../../lib/selection/actions';
import { selectionSelector } from '../../lib/selection/selectors';

interface Props {
  element: EditorElement;
}

export function Element(props: Props): JSX.Element {
  const dispatch = useDispatch();
  const { id } = useSelector(selectionSelector);

  const [x, y] = props.element.transform;
  const element = React.createElement(props.element.element, props.element.props, props.element.children);

  function setSelection(id: string) {
    dispatch(setSelectionId(id));
  }

  return (
    <Container id={props.element.id} selected={props.element.id === id} defaultCoords={[x, y]} setSelection={setSelection}>
      {element}
    </Container>
  );
}
