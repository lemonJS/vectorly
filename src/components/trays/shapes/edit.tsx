import React from 'react';

import { useDispatch } from 'react-redux';
import { Project, Element, ElementProps } from '@type/project';
import { Close } from '@components/trays/close';
import { Background } from '@components/trays/shapes/background';
import { Border } from '@components/trays/shapes/border';
import { Actions } from '@components/trays/actions';
import { Positioning } from '@components/trays/positioning';
import { updateProject, updateElement } from '@lib/projects/actions';
import { Stacking } from '@components/trays/stacking';

interface Props {
  element: Element;
}

export const Edit = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handlePropsUpdate = (update: Partial<ElementProps>) => {
    dispatch(updateElement(props.element.id, { props: update }));
  };

  const handleProjectUpdate = (update: Partial<Project>) => {
    dispatch(updateProject(update));
  };

  const handleUpdate = (update: Partial<Element>) => {
    dispatch(updateElement(props.element.id, update));
  };

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
};
