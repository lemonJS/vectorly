import React from 'react';

import { clone } from 'lodash';
import { Element, Project } from '@type/project';
import { Label } from '@components/common/label';
import { Scale } from '@components/common/scale';
import { useSelector } from 'react-redux';
import { projectSelector } from '@lib/projects/selectors';

interface Props {
  element: Element;
  handleUpdate: (value: Partial<Project>) => void;
}

export function Stacking(props: Props): JSX.Element {
  const { elements } = useSelector(projectSelector());

  const index = elements.findIndex(element => element.elementId === props.element.elementId);

  function handleClick(value: number) {
    const array = clone(elements);
    [array[index], array[value]] = [array[value], array[index]]
    props.handleUpdate({ elements: array });
  }

  return (
    <React.Fragment>
      <Label>Stacking</Label>
      <Scale max={elements.length} min={0} value={index} handleChange={handleClick} />
    </React.Fragment>
  );
}
