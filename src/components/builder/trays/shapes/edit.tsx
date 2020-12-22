import React from 'react';

import { useDispatch } from 'react-redux';
import { Project, Element, ElementProps } from '@type/project';
import { Close } from '@components/builder/trays/close';
import { Background } from '@components/builder/trays/shapes/background';
import { Border } from '@components/builder/trays/shapes/border';
import { Actions } from '@components/builder/trays/actions';
import { Positioning } from '@components/builder/trays/positioning';
import { updateProject, updateProjectElement } from '@lib/projects/actions';
import { Stacking } from '@components/builder/trays/stacking';

interface Props {
  element: Element;
}

export function Edit(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function handlePropsUpdate(update: Partial<ElementProps>) {
    dispatch(updateProjectElement(props.element.elementId, { props: update }));
  }

  function handleProjectUpdate(update: Partial<Project>) {
    dispatch(updateProject(update));
  }

  function handleUpdate(update: Partial<Element>) {
    dispatch(updateProjectElement(props.element.elementId, update));
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
