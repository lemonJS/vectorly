import React from 'react';

import { css } from '@emotion/css';
import { Zoom } from '@components/zoom/zoom';

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
    <Zoom>
      {props.children}
    </Zoom>
  </main>
);

