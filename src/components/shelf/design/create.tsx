import React from 'react';

import { css } from '@emotion/css';
import { gql, useMutation } from '@apollo/client';
import { Button } from '@components/common/button';

const styles = css`
  margin-top: 1.5rem;
`;

const MUTATION = gql`
  mutation CreateProject {
    createProject {
      id
    }
  }
`;

export function Create(): JSX.Element {
  const [createProject] = useMutation(MUTATION);

  async function handleCreate() {
    const response = await createProject();
    location.href = `/projects/${response.data.createProject.id}`;
  }

  return (
    <Button onClick={handleCreate} className={styles}>Create Project</Button>
  );
}
