import React from 'react';

import Head from 'next/head';
import { Container } from '@components/common/container';

export default function Account(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Vectorly - Account</title>
      </Head>
      <h1>Account</h1>
    </Container>
  );
}
