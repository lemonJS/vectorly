import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@components/common/container';
import { getUser } from '@lib/user/actions';
import { getProjects } from '@lib/projects/actions';
import { projectsSelector } from '@lib/projects/selectors';
import { ProjectRow } from '@components/account/project-row';

export default function Projects(): JSX.Element {
  const dispatch = useDispatch();
  const projects = useSelector(projectsSelector);

  React.useEffect(() => {
    dispatch(getUser());
    dispatch(getProjects());
  }, []);

  return (
    <Container>
      {projects.map(project => (
        <ProjectRow key={project.projectId} project={project} />
      ))}

      {projects.length === 0 && (
        <p>There's nothing here!</p>
      )}
    </Container>
  );
}
