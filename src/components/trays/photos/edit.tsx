import React from 'react';

import { useDispatch } from 'react-redux';
import { Element, Project, ElementProps } from '@type/project';
import { Close } from '@components/trays/close';
import { Actions } from '@components/trays/actions';
import { Colors } from '@components/trays/photos/colors';
import { Positioning } from '@components/trays/positioning';
import { updateProject, updateProjectElement } from '@lib/projects/actions';
import { Stacking } from '@components/trays/stacking';

interface Props {
  element: Element;
}

export function Edit(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function handlePropsUpdate(update: Partial<ElementProps>) {
    dispatch(updateProjectElement(props.element.id, { props: update }));
  }

  function handleProjectUpdate(update: Partial<Project>) {
    dispatch(updateProject(update));
  }

  function handleUpdate(update: Partial<Element>) {
    dispatch(updateProjectElement(props.element.id, update));
  }

  return (
    <div>
      <Close title='Edit Photo' />
      <Colors element={props.element} handleUpdate={handlePropsUpdate} />
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Stacking element={props.element} handleUpdate={handleProjectUpdate} />
      <Actions element={props.element} />
    </div>
  );
}
