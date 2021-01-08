import React from 'react';

import { css } from '@emotion/css';
import { Undo } from '@components/controls/undo';
import { Reset } from '@components/controls/reset';
import { Zoom } from '@components/controls/zoom';
import { Saving } from '@components/controls/saving';

const styles = css`
  align-items: center;
  display: flex;
  padding-right: 1.5rem;
  position: relative;

  button {
    background: none;
    border: none;
    color: var(--secondary-text-color);

    &:hover {
      color: white;
    }

    &.disabled {
      pointer-events: none;
    }
  }

  .divider {
    height: 16px;
    margin: 0 .5rem;
    width: 1px;
  }
`;

export const Options = (): JSX.Element => (
  <div className={styles}>
    <Saving />
    <Zoom />
    <Undo />
    <Reset />
  </div>
);
