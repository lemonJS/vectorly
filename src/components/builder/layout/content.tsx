import React from 'react';

import { css } from '@emotion/css';
import { Saving } from '@components/builder/layout/saving';
import { Zoom } from '@components/builder/layout/zoom';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  align-items: center;
  display: flex;
  justify-content: center;
  grid-area: content;
  padding: 1.5rem;
  position: relative;
`;

export function Content(props: Props): JSX.Element {
  return (
    <main id='editor-content' className={styles}>
      {props.children}
      <Saving />
      <Zoom />
    </main>
  );
}
