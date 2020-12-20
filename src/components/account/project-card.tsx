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
  
  .details {
    padding: 1rem;
  }
  
  a {
    text-decoration: none;
  }
  
  h3 {
    color: var(--primary-text-color);
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 .5rem 0;
  }
  
  p {
    color: var(--secondary-text-color);
    font-size: 14px;
    margin: 0;
  }
  
  &:hover {
    border-color: var(--primary-accent-color);
  }
  
  button {
    margin: 0 1rem 1rem;
    width: calc(100% - 2rem);
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
          <div className='details'>
            <h3>{props.project.title}</h3>
            <p>Created: {createdDate}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
