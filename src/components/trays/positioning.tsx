import React from 'react';

import type { Element } from '../../types/project';
import { css } from '@emotion/css';
import { Divider } from '../divider';
import { Label } from '../label';
import { Input } from '../input';
import { Scale } from '../scale';
import { Slider } from '../slider';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<React.SVGProps<SVGElement>>) => void;
}

const styles = css`
  hr {
    margin-top: 2rem;
  }
  
  label {
    margin-top: 2rem;
  }
  
  .input-group {
    align-items: center;
    display: flex;
    
    i {
      color: white;
      margin: 0 .5rem;
    }
  }
`;

export function Positioning(props: Props): JSX.Element {
  const { id, transform } = props.element;
  const element = document.getElementById(id);
  const bounds = element.getBoundingClientRect();

  return (
    <div className={styles}>
      <Divider />

      <Label>Dimensions</Label>
      <div className='input-group'>
        <div className='input-x'>
          <Input defaultValue={Math.ceil(bounds.width)} />
        </div>
        <i className='ri-close-line' />
        <div className='input-y'>
          <Input defaultValue={Math.ceil(bounds.height)} />
        </div>
      </div>

      <Label>Position</Label>
      <div className='input-group'>
        <div className='input-x'>
          <Input defaultValue={transform.x} />
        </div>
        <i className='ri-close-line' />
        <div className='input-y'>
          <Input defaultValue={transform.y} />
        </div>
      </div>

      <Label>Rotation</Label>
      <Slider min={-270} max={90} value={transform.r} step={1} onChange={() => ''} />

      <Label>Stacking</Label>
      <Scale max={10} min={0} value={0} handleChange={console.log} />
    </div>
  );
}