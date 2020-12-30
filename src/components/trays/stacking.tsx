import React from 'react';

import { clone } from 'lodash';
import { Element, Project } from '@type/project';
import { Label } from '@components/label';
import { Scale } from '@components/scale';
import { useSelector } from 'react-redux';
import { projectSelector } from '@lib/projects/selectors';

interface Props {
  element: Element;
  handleUpdate: (value: Partial<Project>) => void;
}

export const Stacking = (props: Props): JSX.Element => {
  const { elements } = useSelector(projectSelector);

  const index = elements.findIndex(element => element.id === props.element.id);

  const handleClick = (value: number) => {
    const array = clone(elements);
    [array[index], array[value]] = [array[value], array[index]]
    props.handleUpdate({ elements: array });
  };

  return (
    <React.Fragment>
      <Label>Stacking</Label>
      <Scale max={elements.length} min={0} value={index} handleChange={handleClick} />
    </React.Fragment>
  );
};
