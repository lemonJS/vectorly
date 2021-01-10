import React from 'react';

import { css } from '@emotion/css';
import { Container } from '@components/header/container';
import { Logo } from '@components/header/logo';
import { Title } from '@components/header/title';
import { Divider } from '@components/header/divider';
import { Download } from '@components/header/download';
import { Undo } from '@components/header/undo';
import { Zoom } from '@components/header/zoom';

const styles = css`
  align-items: center;
  display: flex;
  left: 1.5rem;
  position: absolute;
  top: 1.5rem;
  z-index: 1;
`;

export const Header = (): JSX.Element => (
  <header className={styles}>
    <Container>
      <Logo />
      <Divider />
      <Title />
      <Divider />
      <Download />
    </Container>

    <Container>
      <Undo />
    </Container>

    <Container>
      <Zoom />
    </Container>
  </header>
);
