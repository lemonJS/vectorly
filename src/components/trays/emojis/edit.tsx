import React from 'react';

import type { Element } from '../../../types/project';
import { useDispatch } from 'react-redux';
import { Close } from '../close';
import { Size } from './size';
import { Actions } from '../actions';
import { updateProjectElement } from '../../../lib/project/actions';

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
      <Close title='Edit emoji' />
      <Size element={props.element} handleUpdate={handleUpdate} />
      <Actions element={props.element} />
    </div>
  );
}