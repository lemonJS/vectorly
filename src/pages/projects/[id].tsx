import React from 'react';

import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { SVG } from '@components/builder/svg/svg';
import { Wrapper } from '@components/builder/layout/wrapper';
import { getUser } from '@lib/user/actions';
import { getProjects } from '@lib/projects/actions';

export default function Project(): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUser());
    dispatch(getProjects());
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Vectorly</title>
      </Head>
      <SVG />
    </Wrapper>
  );
}

