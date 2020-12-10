import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const styles = css`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
`;

export function Container(props: Props): JSX.Element {
  return (
    <div className={styles}>
      {props.children}
    </div>
  );
}
