import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  align-items: center;
  display: flex;
  margin: 0 1rem;
  
  p {
    cursor: pointer;
    font-size: 1rem;
    margin: 0;
  }
`;

export const Title = (): JSX.Element => (
  <div className={styles}>
    <p>Untitled Project</p>
  </div>
);
