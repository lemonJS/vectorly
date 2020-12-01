import React from 'react'

import type { Element } from '../../../types/project';
import { useDispatch } from 'react-redux';
import { updateProjectElement } from '../../../lib/project/actions';
import { Close } from '../close';
import { Actions } from './actions';
import { FontAndSize } from './font-and-size';
import { Style } from './style';
import { Alignment } from './alignment';
import { Colors } from './colors';

interface Props {
  element: Element;
}

export function Edit(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function handleUpdate(update: Partial<React.SVGProps<SVGElement>>) {
    const { element } = props;
    element.props = { ...element.props, ...update };
    dispatch(updateProjectElement(element));
  }

  return (
    <div>
      <Close title='Edit Text' />
      <FontAndSize element={props.element} handleUpdate={handleUpdate} />
      <Style element={props.element} handleUpdate={handleUpdate} />
      <Alignment />
      <Colors element={props.element} handleUpdate={handleUpdate} />
      <Actions element={props.element} />
    </div>
  );
}