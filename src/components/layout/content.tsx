import React from 'react';

import { css } from '@emotion/css';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const Content = (props: Props): JSX.Element => (
  <main id='editor-content' className={styles}>
    {props.children}
  </main>
);
