import React from 'react';

import { css } from '@emotion/css';
import { Spinner } from '@components/common/spinner';

const styles = css`
  margin-top: 1.5rem;
  
  .spinner {
    height: 4rem;
    width: 4rem;
    
    div {
      border-color: var(--primary-accent-color) transparent transparent transparent;
      border-width: .5rem;
      height: 4rem;
      width: 4rem;
    }
  }
`;

export function Loading(): JSX.Element {
  return (
    <Spinner className={styles} />
  );
}
