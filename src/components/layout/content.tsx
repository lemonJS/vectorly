import React from 'react';

import { css } from '@emotion/css';
import { Saving } from '@components/controls/saving';
import { Undo } from '@components/controls/undo';
import { Zoom } from '@components/controls/zoom';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  align-items: center;
  display: flex;
  justify-content: center;
  grid-area: content;
  overflow: hidden;
  padding: 1.5rem;
  position: relative;
`;

export const Content = (props: Props): JSX.Element => (
  <main id='editor-content' className={styles}>
    {props.children}
    <Saving />
    <Undo />
    <Zoom />
  </main>
);
