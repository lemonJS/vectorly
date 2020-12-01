import React from 'react';

import { css } from '@emotion/css';
import { Button } from '../../button';
import { Divider } from '../../divider';

interface Props {

}

const styles = css`
  hr {
    margin: 1.5rem 0;
  }
  
  button {
    margin-bottom: 1rem;
    width: 100%;
    
    i {
      margin: 0 .25rem 0 0;
    }
  }
`;

export function Actions(props: Props): JSX.Element {
  return (
    <div className={styles}>
      <Divider />

      <Button className='secondary'>
        <i className='ri-file-copy-line' />
        Duplicate
      </Button>

      <Button className='tertiary'>
        <i className='ri-delete-bin-2-line' />
        Delete
      </Button>
    </div>
  );
}