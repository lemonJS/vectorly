import React from 'react';

import type { NextPageContext } from 'next';
import type { Project } from '@type/project';
import { Button } from '@components/common/button';

interface Props {
  projects: Project[];
}

export default function Home(props: Props): JSX.Element {
  async function handleCreate() {
    const res = await fetch('/api/projects', { method: 'POST' });
    const project = await res.json();
    location.href = `/projects/${project.id}`;
  }

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {props.projects.map(project => (
          <li key={project.id}>
            <a href={`/projects/${project.id}`}>{project.title}</a>
          </li>
        ))}
      </ul>

      <Button onClick={handleCreate}>Create Project</Button>
    </div>
  );
}

Home.getInitialProps = async (_ctx: NextPageContext) => {
  const res = await fetch(`http://localhost:3000/api/projects`);
  const projects = await res.json();
  return { projects };
};
