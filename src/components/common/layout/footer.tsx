import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  background: var(--header-background-color);
  grid-area: footer;
`;

export function Footer(): JSX.Element {
  return (
    <footer className={styles} />
  );
}
