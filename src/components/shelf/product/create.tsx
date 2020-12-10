import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@components/common/button';

const styles = css`
  margin-top: 1.5rem;
`;

export function Create(): JSX.Element {
  async function handleCreate() {
    const res = await fetch('/api/projects', { method: 'POST' });
    const project = await res.json();
    location.href = `/projects/${project.id}`;
  }

  return (
    <Button onClick={handleCreate} className={styles}>Create Project</Button>
  );
}
