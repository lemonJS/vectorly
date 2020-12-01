import React from 'react';

import { css } from '@emotion/css';
import { Button } from '../../button';
import { Label } from '../../label';

const styles = css`
  label {
    margin-top: 2rem;
  }
  
  .groups {
    display: flex;
    justify-content: space-between;
    
    .group {
      display: flex;
    }
    
    button {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      width: 31px;
      
      i {
        margin: 0;
      }
      
      &:nth-of-type(1) {
        border-radius: .25rem 0 0 .25rem;
        border-right-width: 0;
      }
      
      &:nth-of-type(2) { 
        border-radius: 0;
        border-left-width: 0;
        border-right-width: 0;
      }
      
      &:nth-of-type(3) {
        border-radius: 0 .25rem .25rem 0;
        border-left-width: 0;
      }
    }
  }
`;

export function Alignment(): JSX.Element {
  return (
    <div className={styles}>
      <Label>Text Alignment</Label>

      <div className='groups'>
        <div className='group'>
          <Button className='secondary'>
            <i className='ri-align-left' />
          </Button>
          <Button className='secondary'>
            <i className='ri-align-center' />
          </Button>
          <Button className='secondary'>
            <i className='ri-align-right' />
          </Button>
        </div>

        <div className='group'>
          <Button className='secondary'>
            <i className='ri-align-top' />
          </Button>
          <Button className='secondary'>
            <i className='ri-align-vertically' />
          </Button>
          <Button className='secondary'>
            <i className='ri-align-bottom' />
          </Button>
        </div>
      </div>
    </div>
  );
}