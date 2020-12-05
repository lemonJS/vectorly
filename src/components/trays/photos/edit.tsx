import React from 'react';

import type { Element } from '../../../types/project';
import { useDispatch } from 'react-redux';
import { Close } from '../close';
import { Actions } from '../actions';
import { Colors } from './colors';
import { Positioning } from '../positioning';
import { updateProjectElement } from '../../../lib/project/actions';

interface Props {
  element: Element;
}

export function Edit(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function handlePropsUpdate(update: Partial<React.SVGProps<SVGElement>>) {
    dispatch(updateProjectElement(props.element.id, { props: update }));
  }

  function handleUpdate(update: Partial<Element>) {
    dispatch(updateProjectElement(props.element.id, update));
  }

  return (
    <div>
      <Close title='Edit Photo' />
      <Colors element={props.element} handleUpdate={handlePropsUpdate} />
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Actions element={props.element} />
    </div>
  );
}