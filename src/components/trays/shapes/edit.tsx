import React from 'react';

import { useDispatch } from 'react-redux';
import { Project, Element, ElementProps } from '@type/project';
import { Close } from '@components/trays/close';
import { Background } from '@components/trays/shapes/background';
import { Border } from '@components/trays/shapes/border';
import { Actions } from '@components/trays/actions';
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
      <Close title='Edit Shape' />
      <Border element={props.element} handleUpdate={handlePropsUpdate} />
      <Background element={props.element} handleUpdate={handlePropsUpdate} />
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Stacking element={props.element} handleUpdate={handleProjectUpdate} />
      <Actions element={props.element} />
    </div>
  );
}
