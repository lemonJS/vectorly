import React from 'react';

import { css } from '@emotion/css';
import { Design } from '@type/design';

interface Props {
  design?: Design;
}

const styles = css`
  background: var(--foreground-color);
  border-radius: .25rem;
  margin-top: 1.5rem;
  min-height: 800px;
  padding: 1.5rem;
  
  p {
    margin: 0;
  }
`;

export function Description(_props: Props): JSX.Element {
  return (
    <div className={styles}>
      <p>Description...</p>
    </div>
  );
}
