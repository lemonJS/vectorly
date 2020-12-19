import React from 'react';

import { css } from '@emotion/css';
import { api } from '@lib/api';
import { Button } from '@components/common/button';

const styles = css`
  margin-top: 1.5rem;
`;

export function Create(): JSX.Element {

  async function handleCreate() {
    const response = await api.post('/projects');
    location.href = `/projects/${response.projectId}`;
  }

  return (
    <Button onClick={handleCreate} className={styles}>Create Project</Button>
  );
}
