import React from 'react';

import { css } from '@emotion/css';
import { User } from '@components/common/user';
import { Price } from '@components/builder/layout/price';

const styles = css`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0 1.5rem 0 0;
`;

export function Menu(): JSX.Element {
  return (
    <menu className={styles}>
      <Price />
      <User />
    </menu>
  );
}