import React from 'react';

import { css } from '@emotion/css';
import { Project } from '@type/project';
import { ProjectCard } from '@components/account/project-card';

interface Props {
  projects: Project[];
}

const styles = css`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin: 0;
  padding: 0;
`;

export function ProjectList(props: Props): JSX.Element {
  return (
    <ul className={styles}>
      {props.projects.map(project => (
        <ProjectCard key={project.projectId} project={project} />
      ))}
    </ul>
  );
}
