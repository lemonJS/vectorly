import React from 'react';

import { css } from '@emotion/css';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  align-items: center;
  display: flex;
  justify-content: center;
  grid-area: content;
  padding: 1.5rem;
`;

export function Content(props: Props): JSX.Element {
  return (
    <main id='editor-content' className={styles}>
      {props.children}
    </main>
  );
}
