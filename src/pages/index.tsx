import React from 'react';

import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { SVG } from '@components/svg/svg';
import { Wrapper } from '@components/layout/wrapper';
import { getProject } from '@lib/projects/actions';

const Home = (): JSX.Element => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProject());
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

export default Home;
