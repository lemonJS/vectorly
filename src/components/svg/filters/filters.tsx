import React from 'react';

import { css } from '@emotion/css';
import { Brannan } from '@components/svg/filters/brannan';
import { Earlybird } from '@components/svg/filters/earlybird';
import { Inkwell } from '@components/svg/filters/inkwell';
import { Lofi } from '@components/svg/filters/lofi';
import { Ludwig } from '@components/svg/filters/ludwig';
import { Mayfair } from '@components/svg/filters/mayfair';
import { Nashville } from '@components/svg/filters/nashville';

const styles = css`
  height: 0;
  width: 0;
`;

// A bunch more can be found here:
// https://github.com/BuZZ-dEE/SVGram

export const Filters = (): JSX.Element => (
  <svg id='filters' className={styles}>
    <Brannan />
    <Earlybird />
    <Inkwell />
    <Lofi />
    <Ludwig />
    <Mayfair />
    <Nashville />
  </svg>
);
