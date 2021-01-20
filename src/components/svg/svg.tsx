import React from 'react';

import { css } from '@emotion/css';
import { Wrapper } from '@components/svg/wrapper';
import { Drawing } from '@components/svg/drawing/drawing';
import { Elements } from '@components/svg/elements/elements';
import { Text } from '@components/svg/text/text';
import { Position } from '@components/svg/position';
import { canvas } from '@lib/constants';

const styles = css`
  height: 100%;
  outline: none;
  user-select: none;
  width: 100%;
`;

export const SVG = (): JSX.Element => (
  <Wrapper>
    <svg id={canvas} className={styles}>
      <Position>
        <Elements />
        <Drawing />
        <Text />
      </Position>
    </svg>
  </Wrapper>
);
