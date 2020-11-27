import React from 'react';

import { css } from '@emotion/css';
import { Button } from '../button';

const styles = css`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 100%;
  
  .drag-and-drop-upload {
    align-items: center;
    border: 2px dashed var(--secondary-button-border-color);
    border-radius: .25rem;
    color: var(--secondary-button-text-color);
    cursor: pointer;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin-top: 1.5rem;
    padding: 1.5rem;
    text-align: center;
    
    i {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 14px;
    }
  }
`;

export function Photos(): JSX.Element {
  return (
    <div className={styles}>
      <Button className='secondary'>
        Add Photos
        <i className='ri-add-line' />
      </Button>

      <div className='drag-and-drop-upload'>
        <i className='ri-image-add-line' />
        <p>Drag and drop photos here to upload</p>
      </div>
    </div>
  );
}
