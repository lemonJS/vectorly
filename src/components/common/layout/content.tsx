import React from 'react';

import { css } from '@emotion/css';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  grid-area: content;
  padding: 1.5rem;
`;

export function Content(props: Props): JSX.Element {
  return (
    <main id='shelf-content' className={styles}>
      {props.children}
    </main>
  );
}
