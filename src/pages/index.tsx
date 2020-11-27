import React from 'react';

import Head from 'next/head';
import { useSelector } from 'react-redux';
import { Canvas } from '../components/canvas';
import { Wrapper } from '../components/wrapper';
import { projectSelector } from '../lib/project/selectors';

export default function Home(): JSX.Element {
  const { elements } = useSelector(projectSelector);

  return (
    <Wrapper>
      <Head>
        <title>SVG Editor</title>
      </Head>
      <Canvas elements={elements} />
    </Wrapper>
  );
}
