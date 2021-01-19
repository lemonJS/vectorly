import React from 'react';

import { css } from '@emotion/css';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  height: 100%;
  position: relative;
  width: 100%;
`;

export const Content = (props: Props): JSX.Element => (
  <main id='editor-content' className={styles}>
    {props.children}
  </main>
);
