import React from 'react';

import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { SVG } from '@components/builder/svg/svg';
import { Wrapper } from '@components/builder/layout/wrapper';
import { getUser } from '@lib/user/actions';
import { getProjects } from '@lib/projects/actions';
import { projectSelector } from '@lib/projects/selectors';

export default function Project(): JSX.Element {
  const dispatch = useDispatch();
  const project = useSelector(projectSelector());

  React.useEffect(() => {
    dispatch(getUser());
    dispatch(getProjects());
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Vectorly - {project?.title || 'Project'}</title>
      </Head>
      <SVG />
    </Wrapper>
  );
}

