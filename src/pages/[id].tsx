import React from 'react';

import Head from 'next/head';
import { useSelector } from 'react-redux';
import { Canvas } from '../components/svg/canvas';
import { Save } from '../components/layout/save';
import { Wrapper } from '../components/layout/wrapper';
import { projectSelector } from '../lib/project/selectors';

export default function Home(): JSX.Element {
  const { elements } = useSelector(projectSelector);

  return (
    <Save>
      <Wrapper>
        <Head>
          <title>SVG Editor</title>
        </Head>
        <Canvas elements={elements} />
      </Wrapper>
    </Save>
  );
}
