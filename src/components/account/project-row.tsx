import React from 'react';

import { Project } from '@type/project';

interface Props {
  project: Project;
}

export function ProjectRow(props: Props): JSX.Element {
  console.log(props);
  return (
    <p>Hello</p>
  );
}
