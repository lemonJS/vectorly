import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@components/common/button';

const styles = css`
  align-items: center;
  background: var(--foreground-color);
  border-radius: .25rem;
  display: flex;
  height: 42px;
  right: 1.5rem;
  padding: 0 .5rem;
  position: absolute;
  top: 1.5rem;
  
  .divider {
    background: var(--secondary-text-color);
    height: 16px;
    margin: 0 .5rem;
    width: 1px;
  }
  
  button {
    background: none;
    border: none;
    color: var(--primary-text-color);
    padding: 0 .5rem;
    
    i {
      margin: 0;
    }
    
    &:hover {
      i {
        color: var(--primary-accent-color);
      }
    }
  }
`;

export function UndoRedo(): JSX.Element {
  return (
    <div className={styles}>
      <Button>
        <i className='ri-arrow-go-back-line' />
      </Button>
      <span className='divider' />
      <Button>
        <i className='ri-arrow-go-forward-line' />
      </Button>
    </div>
  );
}
