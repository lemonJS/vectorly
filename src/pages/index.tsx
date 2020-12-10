import React from 'react';

import { NextPageContext } from 'next';
import { Project } from '@type/project';
import { Carousel } from '@components/common/carousel';
import { Container } from '@components/common/container';
import { Designs } from '@components/shelf/designs/designs';

interface Props {
  projects: Project[];
}

export default function Home(props: Props): JSX.Element {
  return (
    <React.Fragment>
      <Container>
        <Carousel slides={[<p>Slide 1</p>, <p>Slide 2</p>, <p>Slide 3</p>]} />
        <Designs />
      </Container>
      <h1>Projects</h1>
      <ul>
        {props.projects.map(project => (
          <li key={project.id}>
            <a href={`/projects/${project.id}`}>{project.title}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

Home.getInitialProps = async (_ctx: NextPageContext) => {
  const res = await fetch(`http://localhost:3000/api/projects`);
  const projects = await res.json();
  return { projects };
};
