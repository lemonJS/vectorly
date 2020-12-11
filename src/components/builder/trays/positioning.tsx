import React from 'react';

import { css } from '@emotion/css';
import { Element } from '@type/project';
import { Divider } from '@components/common/divider';
import { Label } from '@components/common/label';
import { Input } from '@components/common/input';
import { Scale } from '@components/common/scale';
import { Slider } from '@components/common/slider';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<Element>) => void;
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
    
    .inputs {
      flex: 1;
    }
    
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

  function handleTransform(property: string) {
    return function(event: React.ChangeEvent<HTMLInputElement>) {
      const element = event.target as HTMLInputElement;
      const value = Number(element.value);

      const update = { ...transform, [property]: Math.ceil(value) }
      props.handleUpdate({ transform: update });
    }
  }

  function handleRotate(event: React.ChangeEvent<HTMLInputElement>) {
    const element = event.target as HTMLInputElement;
    const value = Number(element.value);

    const update = { ...transform, r: Math.ceil(value) + 90 }
    props.handleUpdate({ transform: update });
  }

  return (
    <div className={styles}>
      <Divider />

      <Label>Dimensions</Label>
      <div className='input-group'>
        <div className='input-x'>
          <Input readOnly defaultValue={Math.ceil(bounds.width)} />
        </div>
        <i className='ri-close-line' />
        <div className='input-y'>
          <Input readOnly defaultValue={Math.ceil(bounds.height)} />
        </div>
      </div>

      <Label>Position</Label>
      <div className='input-group'>
        <div className='inputs input-x'>
          <Input value={transform.x} onChange={handleTransform('x')} />
        </div>
        <i className='ri-close-line' />
        <div className='inputs input-y'>
          <Input value={transform.y} onChange={handleTransform('y')} />
        </div>
      </div>

      <Label>Rotation</Label>
      <Slider min={-270} max={90} value={transform.r - 90} step={1} onChange={handleRotate} />

      <Label>Stacking</Label>
      <Scale max={10} min={0} value={0} handleChange={console.log} />
    </div>
  );
}