import React from 'react'

import type { Element } from '../../../types/project';
import { useDispatch } from 'react-redux';
import { updateProjectElement } from '../../../lib/project/actions';
import { Close } from '../close';
import { Actions } from '../actions';
import { FontAndSize } from './font-and-size';
import { Style } from './style';
import { Alignment } from './alignment';
import { Colors } from './colors';
import { Positioning } from '../positioning';

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
      <Close title='Edit Text' />
      <FontAndSize element={props.element} handleUpdate={handlePropsUpdate} />
      <Style element={props.element} handleUpdate={handlePropsUpdate} />
      <Alignment />
      <Colors element={props.element} handleUpdate={handlePropsUpdate} />
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Actions element={props.element} />
    </div>
  );
}
