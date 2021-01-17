import React from 'react';

import { css } from '@emotion/css';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  align-items: center;
  background: var(--foreground);
  border-radius: var(--border-radius-md);
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, .1);
  display: flex;
  height: 3rem;
  margin-right: 1rem;
`;

export const Container = (props: Props): JSX.Element => (
  <div className={styles}>
    {props.children}
  </div>
);
