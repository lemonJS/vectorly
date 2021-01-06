import React from 'react';

import { css } from '@emotion/css';
import { Label } from '@components/label';
import { Input } from '@components/input';

interface Props {
  height: number;
  width: number;
  handleChange: (width: number, height: number) => void;
}

const styles = css`
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

export const Size = (props: Props): JSX.Element => {
  const handleWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const width = Number(event.target.value);
    props.handleChange(width, props.height);
  };

  const handleHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    const height = Number(event.target.value);
    props.handleChange(props.width, height);
  };

  return (
    <div className={styles}>
      <Label>Size</Label>

      <div className='input-group'>
        <div className='input-x'>
          <Input value={props.width || 0} onChange={handleWidth} />
        </div>
        <i className='ri-close-line' />
        <div className='input-y'>
          <Input value={props.height || 0} onChange={handleHeight} />
        </div>
      </div>
    </div>
  );
};
