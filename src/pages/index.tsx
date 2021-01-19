import React from 'react';

import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { SVG } from '@components/svg/svg';
import { getProject } from '@lib/projects/actions';
import { Header } from '@components/header/header';
import { Sidebar } from '@components/sidebar/sidebar';
import { Tray } from '@components/trays/tray';

const styles = css`
  height: 100vh;
  width: 100vw;
`;

const Home = (): JSX.Element => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProject());
  }, []);

  return (
    <div className={styles}>
      <Head>
        <title>Vectorly</title>
      </Head>
      <Header />
      <Sidebar />
      <SVG />
      <Tray />
    </div>
  );
}

export default Home;
