import React from 'react';

import Link from 'next/link';
import { format } from 'date-fns';
import { css } from '@emotion/css';
import { Project } from '@type/project';
import { Preview } from '@components/builder/svg/preview';

interface Props {
  project: Project;
}

const styles = css`
  background: var(--foreground-color);
  border: 2px solid transparent;
  border-radius: .25rem;
  list-style: none;
  padding: 1.5rem;
  
  a {
    text-decoration: none;
  }
  
  h3 {
    color: var(--primary-text-color);
    font-size: 16px;
    font-weight: 600;
    margin: 1.5rem 0 .5rem 0;
  }
  
  p {
    color: var(--secondary-text-color);
    font-size: 14px;
    margin: 0;
  }
  
  &:hover {
    border-color: var(--primary-accent-color);
  }
`;

export function ProjectCard(props: Props): JSX.Element {
  const createdAt = new Date(props.project.createdAt);
  const createdDate = format(createdAt, 'eo MMMM yyyy');

  return (
    <li className={styles}>
      <Link href={`/projects/${props.project.projectId}`}>
        <a>
          <Preview project={props.project} />
          <h3>{props.project.title}</h3>
          <p>Created: {createdDate}</p>
        </a>
      </Link>
    </li>
  );
}
