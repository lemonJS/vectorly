import React from 'react';

import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@components/common/container';
import { getUser } from '@lib/user/actions';
import { getProjects } from '@lib/projects/actions';
import { projectsSelector } from '@lib/projects/selectors';
import { ProjectList } from '@components/account/project-list';

export default function Projects(): JSX.Element {
  const dispatch = useDispatch();
  const projects = useSelector(projectsSelector);

  React.useEffect(() => {
    dispatch(getUser());
    dispatch(getProjects());
  }, []);

  return (
    <Container>
      <Head>
        <title>Vectorly - Projects</title>
      </Head>
      <ProjectList projects={projects} />
    </Container>
  );
}
