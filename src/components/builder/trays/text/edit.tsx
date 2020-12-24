import React from 'react'

import { useDispatch } from 'react-redux';
import { Element, Project, ElementProps } from '@type/project';
import { Close } from '@components/builder/trays/close';
import { Actions } from '@components/builder/trays/actions';
import { FontAndSize } from '@components/builder/trays/text/font-and-size';
import { Style } from '@components/builder/trays/text/style';
import { Alignment } from '@components/builder/trays/text/alignment';
import { Colors } from '@components/builder/trays/text/colors';
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
      <Close title='Edit Text' />
      <FontAndSize element={props.element} handleUpdate={handlePropsUpdate} />
      <Style element={props.element} handleUpdate={handlePropsUpdate} />
      <Alignment element={props.element} handleUpdate={handlePropsUpdate} />
      <Colors element={props.element} handleUpdate={handlePropsUpdate} />
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Stacking element={props.element} handleUpdate={handleProjectUpdate} />
      <Actions element={props.element} />
    </div>
  );
}
