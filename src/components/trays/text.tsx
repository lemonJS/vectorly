import React from 'react';

import { css } from '@emotion/css';
import { Button } from '../button';

const styles = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1.5rem;
  width: 100%;
`;

export function Text(): JSX.Element {
  return (
    <div className={styles}>
      <Button className='secondary'>
        Add Text
        <i className='ri-add-line' />
      </Button>
    </div>
  );
}
