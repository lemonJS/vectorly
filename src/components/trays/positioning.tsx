import React from 'react';

import { css } from '@emotion/css';
import { Element } from '@type/project';
import { Label } from '@components/label';
import { Input } from '@components/trays/input';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<Element>) => void;
}

const styles = css`
  .heading {
    padding: 0 1.5rem;  
  }
  
  .grid {
    display: grid;
    grid-gap: .5rem;
    grid-template-columns: repeat(auto-fill, 90px);
    padding: 0 1rem;
  }
`;

export const Positioning = (props: Props): JSX.Element => {
  const { id, transform } = props.element;
  const element = document.getElementById(id);
  const bounds = element.getBoundingClientRect();

  const handleTransform = (property: string) => (value: string) => {
    const update = { ...transform, [property]: Number(value) }
    props.handleUpdate({ transform: update });
  };

  const handleRotate = (value: string) => {
    const update = { ...transform, r: Number(value) + 90 }
    props.handleUpdate({ transform: update });
  };

  return (
    <div className={styles}>
      <Label className='heading'>Size &amp; position</Label>

      <div className='grid'>
        <Input icon='X' value={Math.ceil(transform.x)} handleChange={handleTransform('x')} />

        <Input icon='Y' value={Math.ceil(transform.y)} handleChange={handleTransform('y')} />

        <Input icon='W' value={Math.ceil(bounds.width)} handleChange={console.log} />

        <Input icon='H' value={Math.ceil(bounds.height)} handleChange={console.log} />

        <Input icon={<i className='ri-clockwise-line' />} value={Math.ceil(transform.r)} handleChange={handleRotate} />
      </div>
    </div>
  );
};
