import React from 'react';

import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { SVG } from '@components/builder/svg/svg';
import { Wrapper } from '@components/builder/layout/wrapper';
import { getUser } from '@lib/user/actions';
import { getProjects } from '@lib/projects/actions';
import { projectSelector } from '@lib/projects/selectors';
import { setSelectionId } from '@lib/editor/actions';
import { setMenuSelected } from '@lib/layout/actions';

export default function Project(): JSX.Element {
  const dispatch = useDispatch();
  const project = useSelector(projectSelector());

  React.useEffect(() => {
    dispatch(getUser());
    dispatch(getProjects());
    // Clean up from the last project
    dispatch(setSelectionId(null));
    dispatch(setMenuSelected('photos'));
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

