import React from 'react';

import { css } from '@emotion/css';
import { Zoom } from '@components/zoom/zoom';
import { Rulers } from '@components/layout/rulers';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  align-items: center;
  display: flex;
  justify-content: center;
  grid-area: content;
  overflow: hidden;
  position: relative;
`;

export const Content = (props: Props): JSX.Element => (
  <main id='editor-content' className={styles}>
    <Zoom>
      <Rulers>
        {props.children}
      </Rulers>
    </Zoom>
  </main>
);

