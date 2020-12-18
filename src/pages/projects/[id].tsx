import React from 'react';

import Head from 'next/head';
import { SVG } from '@components/builder/svg/svg';
import { Wrapper } from '@components/builder/layout/wrapper';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { projectSelector } from '@lib/projects/selectors';

export default function Project(): JSX.Element {
  const router = useRouter();
  const project = useSelector(projectSelector(router.query.id));

  console.log(project);

  return (
    <Wrapper>
      <Head>
        <title>Vectorly</title>
      </Head>
      <SVG />
    </Wrapper>
  );
}

