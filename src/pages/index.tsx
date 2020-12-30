import React from 'react';

import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { SVG } from '@components/svg/svg';
import { Wrapper } from '@components/layout/wrapper';
import { getProject } from '@lib/projects/actions';
import { setSelectionId } from '@lib/editor/actions';
import { setMenuSelected } from '@lib/editor/actions';

export default function Index(): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProject());
    // Clean up from the last project
    dispatch(setSelectionId(null));
    dispatch(setMenuSelected('photos'));
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

