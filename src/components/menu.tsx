import React from 'react';

import { css } from '@emotion/css';
import { User } from './user';

const styles = css`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0 1.5rem 0 0;
`;

export function Menu(): JSX.Element {
  return (
    <menu className={styles}>
      <User />
    </menu>
  );
}
