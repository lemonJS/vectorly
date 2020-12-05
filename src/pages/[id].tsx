import React from 'react';

import Head from 'next/head';
import { useSelector } from 'react-redux';
import { SVG } from '../components/svg/svg';
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
        <SVG elements={elements} />
      </Wrapper>
    </Save>
  );
}
