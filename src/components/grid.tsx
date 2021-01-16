import React from 'react';

import { css } from '@emotion/css';

const gridStyles = css`
  display: flex;
  flex-direction: column;
`;

const rowStyles = css`
  display: flex;
`;

const colStyles = css`
  flex: 1;
`;

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const Grid = (props: Props): JSX.Element => (
  <div className={`${gridStyles} ${props.className || ''}`}>
    {props.children}
  </div>
);

export const Row = (props: Props): JSX.Element => (
  <div className={`${rowStyles} ${props.className || ''}`}>
    {props.children}
  </div>
);

export const Col = (props: Props): JSX.Element => (
  <div className={`${colStyles} ${props.className || ''}`}>
    {props.children}
  </div>
);
