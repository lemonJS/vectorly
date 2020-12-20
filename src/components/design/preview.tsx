import React from 'react';

import { css } from '@emotion/css';
import { Design } from '@type/design';

interface Props {
  design?: Design;
}

const styles = css`
  background: var(--foreground-color);
  border-radius: .25rem;
  flex: 1;
  margin-right: 1.5rem;
  padding: 1.5rem;
  
  @media only screen and (max-width: 1024px) {
    margin: 0 0 1.5rem 0;
  }
  
  p {
    margin: 0;
  }
`;

export function Preview(_props: Props): JSX.Element {
  return (
    <div className={styles}>
      <p>Preview...</p>
    </div>
  );
}
