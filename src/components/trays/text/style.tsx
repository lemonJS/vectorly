import React from 'react';

import { css } from '@emotion/css';
import { Label } from '../../label';
import { Button } from '../../button';

const styles = css`
  label {
    margin-top: 2rem;
  }
  
  .styles {
    display: flex;
    justify-content: space-between;
    
    button {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      width: 42px;
      
      i {
        margin: 0;
      }
    }
  } 
`;

export function Style(): JSX.Element {
  return (
    <div className={styles}>
      <Label>Font Style</Label>

      <div className='styles'>
        <Button className='secondary'>
          <i className='ri-bold' />
        </Button>
        <Button className='secondary'>
          <i className='ri-italic' />
        </Button>
        <Button className='secondary'>
          <i className='ri-underline' />
        </Button>
        <Button className='secondary'>
          <i className='ri-strikethrough' />
        </Button>
      </div>
    </div>
  );
}