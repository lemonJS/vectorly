import React from 'react';

import { useDispatch } from 'react-redux';
import { Element, Project, ElementProps } from '@type/project';
import { Close } from '@components/trays/close';
import { Actions } from '@components/trays/actions';
import { Colors } from '@components/trays/photos/colors';
import { Positioning } from '@components/trays/positioning';
import { updateProject, updateElement } from '@lib/projects/actions';
import { Stacking } from '@components/trays/stacking';
import { Filters } from '@components/trays/photos/filters/filters';

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
      <Close title='Edit Photo' />
      <Filters element={props.element} handleUpdate={handlePropsUpdate} />
      <Colors element={props.element} handleUpdate={handlePropsUpdate} />
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Stacking element={props.element} handleUpdate={handleProjectUpdate} />
      <Actions element={props.element} />
    </div>
  );
};
